import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

// Mock UI components
vi.mock("@/components/ui/badge", () => ({
  Badge: ({ children, ...props }: { children: React.ReactNode }) => (
    <span {...props}>{children}</span>
  ),
}));

vi.mock("@/components/ui/card", () => ({
  Card: ({ children, ...props }: { children: React.ReactNode }) => <div {...props}>{children}</div>,
}));

// Mock skills data
vi.mock("@/data/skills", () => ({
  skillCategories: [
    {
      name: "Cloud & DevOps",
      Icon: () => <span>CloudIcon</span>,
      color: "text-blue-500",
      skills: ["AWS", "Docker", "Kubernetes"],
    },
    {
      name: "AI & Machine Learning",
      Icon: () => <span>BrainIcon</span>,
      color: "text-purple-500",
      skills: ["PyTorch", "TensorFlow", "LangChain"],
    },
  ],
}));

// Import after mocks
import { About } from "@/components/sections/about";

describe("About", () => {
  it("renders the section heading", () => {
    render(<About />);

    expect(
      screen.getByRole("heading", { level: 2, name: /engineering perception & intelligence/i }),
    ).toBeInTheDocument();
  });

  it("renders the landscape badge", () => {
    render(<About />);

    expect(screen.getByText(/neural landscape/i)).toBeInTheDocument();
  });

  it("renders the professional summary description", () => {
    render(<About />);

    expect(screen.getAllByText(/machine learning engineer/i).length).toBeGreaterThan(0);
  });

  it("renders the Architecture section", () => {
    render(<About />);

    expect(screen.getByText("System Architecture")).toBeInTheDocument();
  });

  it("renders skill categories from data", () => {
    render(<About />);

    expect(screen.getByText("Cloud & DevOps")).toBeInTheDocument();
    expect(screen.getByText("AI & Machine Learning")).toBeInTheDocument();
  });

  it("renders individual skills as badges", () => {
    render(<About />);

    expect(screen.getByText("AWS")).toBeInTheDocument();
    expect(screen.getByText("Docker")).toBeInTheDocument();
    expect(screen.getByText("PyTorch")).toBeInTheDocument();
  });

  it("renders CTA link to about page", () => {
    render(<About />);

    const ctaLink = screen.getByRole("link", { name: /access full logs/i });
    expect(ctaLink).toBeInTheDocument();
    expect(ctaLink).toHaveAttribute("href", "/about");
  });

  it("has section landmark", () => {
    render(<About />);

    expect(screen.getByRole("region", { name: /engineering perception & intelligence/i })).toBeInTheDocument();
  });
});
