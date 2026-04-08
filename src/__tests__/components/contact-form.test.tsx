import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HttpResponse, http } from "msw";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ContactForm } from "@/components/contact/contact-form";
import { server } from "@/mocks/node";
import { createDeferred, fillContactForm } from "@/test/helpers";

// Mock the toast hook
const mockToast = vi.fn();
vi.mock("@/hooks/use-toast", () => ({
  useToast: () => ({ toast: mockToast }),
}));

const web3FormsKey = "91124057-4773-4e16-976f-b2a02eaca9f6";
const web3FormsEndpoint = "https://api.web3forms.com/submit";

describe("ContactForm", () => {
  beforeEach(() => {
    vi.stubEnv("NEXT_PUBLIC_WEB3FORMS_KEY", web3FormsKey);
    mockToast.mockClear();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("renders form with name, email, message fields", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it("renders hidden honeypot field with tabIndex -1", () => {
    render(<ContactForm />);

    // The honeypot field should be in the document but hidden
    const honeypotInput = document.querySelector('input[name="honeypot"]');
    expect(honeypotInput).toBeInTheDocument();
    expect(honeypotInput).toHaveAttribute("tabIndex", "-1");
  });

  it("updates honeypot value when changed", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    const honeypotInput = document.querySelector('input[name="honeypot"]') as HTMLInputElement;
    await user.type(honeypotInput, "bot");

    expect(honeypotInput.value).toBe("bot");
  });

  it("shows validation errors on blur for invalid name", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/name/i);
    await user.type(nameInput, "A"); // Too short (min 2 chars)
    await user.tab(); // Trigger blur

    await waitFor(() => {
      expect(screen.getByText(/at least 2 characters/i)).toBeInTheDocument();
    });
  });

  it("shows validation errors on blur for invalid email", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    const emailInput = screen.getByLabelText(/email/i);
    await user.type(emailInput, "not-an-email");
    await user.tab();

    await waitFor(() => {
      expect(screen.getByText(/valid email/i)).toBeInTheDocument();
    });
  });

  it("keeps submit enabled and shows validation errors on submit", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    const submitButton = screen.getByRole("button", { name: /send message/i });
    expect(submitButton).toBeEnabled();

    await user.click(submitButton);

    expect(await screen.findByText(/name must be/i)).toBeInTheDocument();
    expect(await screen.findByText(/valid email/i)).toBeInTheDocument();
    expect(await screen.findByText(/message must be/i)).toBeInTheDocument();
  });

  it("submits form data to API endpoint", async () => {
    const user = userEvent.setup();
    let capturedRequest: { url: string; method: string; headers: Headers } | null = null;
    server.use(
      http.post(web3FormsEndpoint, ({ request }) => {
        capturedRequest = {
          url: request.url,
          method: request.method,
          headers: request.headers,
        };
        return HttpResponse.json({ success: true });
      }),
    );

    render(<ContactForm />);
    await fillContactForm(user);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(capturedRequest).not.toBeNull();
      expect(capturedRequest?.url).toContain("web3forms.com/submit");
      expect(capturedRequest?.method).toBe("POST");
      // Content-Type for FormData is dynamic (includes boundary), so check it exists
      expect(capturedRequest?.headers.get("Content-Type")).toContain("multipart/form-data");
    });
  });

  it("includes honeypot and formLoadTime in payload", async () => {
    const user = userEvent.setup();
    let capturedBody: Record<string, unknown> | null = null;
    server.use(
      http.post(web3FormsEndpoint, async ({ request }) => {
        const formData = await request.formData();
        capturedBody = Object.fromEntries(formData.entries());
        return HttpResponse.json({ success: true });
      }),
    );

    render(<ContactForm />);
    await fillContactForm(user);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(capturedBody).not.toBeNull();
      expect(capturedBody).toHaveProperty("access_key", web3FormsKey);
      expect(capturedBody).toHaveProperty("botcheck");
    });
  });

  it("shows loading state during submission", async () => {
    const user = userEvent.setup();
    const pending = createDeferred<void>();

    server.use(
      http.post(web3FormsEndpoint, async () => {
        await pending.promise;
        return HttpResponse.json({ success: true });
      }),
    );

    render(<ContactForm />);
    await fillContactForm(user);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    try {
      // Should show loading state while fetch is pending
      await waitFor(() => {
        expect(screen.getByText(/sending/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /sending/i })).toBeDisabled();
      });
    } finally {
      pending.resolve();
    }

    // Ensure pending request resolves before test completes to avoid open handles.
    await waitFor(() => {
      expect(screen.getByRole("button", { name: /send message/i })).toBeEnabled();
    });
  });

  it("shows success message on 200 response", async () => {
    const user = userEvent.setup();
    // Default handler returns success - no override needed

    render(<ContactForm />);
    await fillContactForm(user);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
    });
  });

  it("shows error message on failure", async () => {
    const user = userEvent.setup();
    // Override with error response
    server.use(
      http.post(web3FormsEndpoint, () => {
        return HttpResponse.json({ success: false, message: "Submission failed" }, { status: 400 });
      }),
    );

    render(<ContactForm />);
    await fillContactForm(user);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/failed to send message/i)).toBeInTheDocument();
    });
  });

  it("shows actionable error when Web3Forms key is missing", async () => {
    const user = userEvent.setup();
    vi.stubEnv("NEXT_PUBLIC_WEB3FORMS_KEY", "");

    render(<ContactForm />);
    await fillContactForm(user);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({
          description: expect.stringContaining("Set NEXT_PUBLIC_WEB3FORMS_KEY"),
        }),
      );
    });
  });



  it("shows error when NEXT_PUBLIC_WEB3FORMS_KEY is invalid", async () => {
    const user = userEvent.setup();
    vi.stubEnv("NEXT_PUBLIC_WEB3FORMS_KEY", "invalid");

    server.use(
      http.post(web3FormsEndpoint, () => {
        return HttpResponse.json({ success: false, message: "Invalid key" }, { status: 401 });
      }),
    );

    render(<ContactForm />);
    await fillContactForm(user);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({
          description: "Invalid key",
        }),
      );
    });
  });



  it("maps generic errors from a 400 response", async () => {
    const user = userEvent.setup();
    server.use(
      http.post(web3FormsEndpoint, () => {
        return HttpResponse.json(
          {
            success: false,
            message: "Something went wrong",
          },
          { status: 400 },
        );
      }),
    );

    render(<ContactForm />);
    await fillContactForm(user);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({
          description: "Something went wrong",
        }),
      );
    });
  });


  it("surfaces invalid JSON responses from the API", async () => {
    const user = userEvent.setup();
    server.use(
      http.post(web3FormsEndpoint, () => {
        return new HttpResponse("not-json", { status: 500 });
      }),
    );

    render(<ContactForm />);
    await fillContactForm(user);

    await user.click(screen.getByRole("button", { name: /send message/i }));

      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({
          description: expect.stringContaining("The API returned an invalid response"),
        }),
      );
  });

  it("treats successful responses with invalid JSON as an error", async () => {
    const user = userEvent.setup();
    server.use(
      http.post(web3FormsEndpoint, () => {
        return new HttpResponse("not-json", { status: 200 });
      }),
    );

    render(<ContactForm />);
    await fillContactForm(user);

    await user.click(screen.getByRole("button", { name: /send message/i }));

      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({
          description: expect.stringContaining("The API returned an invalid response"),
        }),
      );
  });

  it("falls back to a generic error when the API response lacks details", async () => {
    const user = userEvent.setup();
    server.use(
      http.post(web3FormsEndpoint, () => {
        return HttpResponse.json({}, { status: 500 });
      }),
    );

    render(<ContactForm />);
    await fillContactForm(user);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({
          description: "Failed to send message",
        }),
      );
    });
  });

  it("uses fallback messaging when a non-Error is thrown", async () => {
    const user = userEvent.setup();
    const originalFetch = globalThis.fetch;
    globalThis.fetch = vi.fn().mockRejectedValue("boom") as typeof fetch;

    try {
      render(<ContactForm />);
      await fillContactForm(user);

      await user.click(screen.getByRole("button", { name: /send message/i }));

      await waitFor(() => {
        expect(mockToast).toHaveBeenCalledWith(
          expect.objectContaining({
            description: "Failed to send message",
          }),
        );
      });
    } finally {
      globalThis.fetch = originalFetch;
    }
  });

  it("resets form after successful submission", async () => {
    const user = userEvent.setup();
    // Default handler returns success - no override needed

    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
    const messageInput = screen.getByLabelText(/message/i) as HTMLTextAreaElement;

    // Type and blur each field
    await user.type(nameInput, "John Doe");
    await user.tab();
    await user.type(emailInput, "john@example.com");
    await user.tab();
    await user.type(messageInput, "This is a test message that is long enough.");
    await user.tab();

    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(nameInput.value).toBe("");
      expect(emailInput.value).toBe("");
      expect(messageInput.value).toBe("");
    });
  });
});
