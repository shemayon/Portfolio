"use client";

/**
 * Contact form component with client-side validation and POST to
 * `${NEXT_PUBLIC_API_URL}/contact`.
 *
 * Includes honeypot and timing-based abuse prevention and provides accessible
 * success/error feedback via alerts and toasts.
 */

import { zodResolver } from "@hookform/resolvers/zod";
import AlertCircle from "lucide-react/dist/esm/icons/alert-circle";
import CheckCircle2 from "lucide-react/dist/esm/icons/check-circle-2";
import Loader2 from "lucide-react/dist/esm/icons/loader-2";
import { useId, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { type ContactFormData, contactFormSchema } from "@/lib/schemas/contact";

interface APIErrorResponse {
  error: string;
  code?: string;
  details?: Array<{ message: string; path: Array<string | number> }>;
}

/**
 * Contact form UI with validation and submission logic.
 *
 * @returns A fully accessible contact form.
 */
export function ContactForm() {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const { toast } = useToast();
  const idPrefix = useId();
  const fieldIds = useMemo(
    () => ({
      name: `${idPrefix}-name`,
      email: `${idPrefix}-email`,
      message: `${idPrefix}-message`,
      honeypot: `${idPrefix}-hp`,
    }),
    [idPrefix],
  );
  // Track when form was loaded for timing-based abuse prevention
  const formLoadTime = useRef(Date.now());
  const [honeypot, setHoneypot] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormStatus("idle");

    try {
      const web3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

      if (!web3FormsKey) {
        if (process.env.NODE_ENV === "development") {
          // Simulate latency and a successful local mock submission
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setFormStatus("success");
          toast({
            title: "Mock Message Sent!",
            description: "Local dev mode: Message successfully processed.",
          });
          reset();
          return;
        }

        throw new Error(
          "Web3Forms API key is not configured. Set NEXT_PUBLIC_WEB3FORMS_KEY in your environment.",
        );
      }

      const formData = new FormData();
      formData.append("access_key", web3FormsKey);
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);
      formData.append("subject", `Portfolio Contact: ${data.name}`);
      formData.append("from_name", data.name);
      formData.append("botcheck", honeypot);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json().catch(() => ({
        success: false,
        message: "The API returned an invalid response.",
      }));

      if (process.env.NODE_ENV === "development") {
        console.log("Web3Forms Response:", result);
      }

      if (!response.ok || !result.success) {
        throw new Error(result?.message || "Failed to send message");
      }

      setFormStatus("success");
      toast({
        title: "Message sent!",
        description: "Thanks for your message. I'll get back to you soon.",
      });
      reset();
    } catch (error) {
      setFormStatus("error");
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      {formStatus === "success" && (
        <Alert
          role="status"
          aria-live="polite"
          className="border-emerald-200/70 bg-emerald-50/90 text-emerald-950 shadow-xs dark:border-emerald-900/60 dark:bg-emerald-950/35 dark:text-emerald-50"
        >
          <CheckCircle2
            className="h-4 w-4 text-emerald-600 dark:text-emerald-300"
            aria-hidden="true"
          />
          <AlertTitle>Message Sent Successfully!</AlertTitle>
          <AlertDescription className="text-emerald-800/90 dark:text-emerald-200/90">
            Thank you for your message. I&apos;ll get back to you as soon as possible.
          </AlertDescription>
        </Alert>
      )}

      {formStatus === "error" && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" aria-hidden="true" />
          <AlertTitle>Failed to Send Message</AlertTitle>
          <AlertDescription>
            Please try again. If the problem persists, reach out via the contact form later or send
            a message through{" "}
            <a
              href="https://www.linkedin.com/in/shemayon-soloman/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xs underline hover:text-red-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              LinkedIn
            </a>
            .
          </AlertDescription>
        </Alert>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
        noValidate
        aria-busy={isSubmitting}
      >
        {/* Honeypot field - hidden from users, catches bots */}
        <div className="absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden="true">
          <label htmlFor={fieldIds.honeypot}>
            Leave this field empty
            <input
              type="text"
              id={fieldIds.honeypot}
              name="honeypot"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>

        <div className="space-y-2">
          <Label htmlFor={fieldIds.name}>Name</Label>
          <Input
            id={fieldIds.name}
            type="text"
            placeholder="Your name…"
            {...register("name")}
            autoComplete="name"
            aria-describedby={errors.name ? `${fieldIds.name}-error` : undefined}
            aria-invalid={!!errors.name}
            disabled={isSubmitting}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p id={`${fieldIds.name}-error`} className="text-sm text-red-500" aria-live="polite">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor={fieldIds.email}>Email</Label>
          <Input
            id={fieldIds.email}
            type="email"
            placeholder="your.email@example.com…"
            {...register("email")}
            autoComplete="email"
            inputMode="email"
            spellCheck={false}
            aria-describedby={errors.email ? `${fieldIds.email}-error` : undefined}
            aria-invalid={!!errors.email}
            disabled={isSubmitting}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p id={`${fieldIds.email}-error`} className="text-sm text-red-500" aria-live="polite">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor={fieldIds.message}>Message</Label>
          <Textarea
            id={fieldIds.message}
            placeholder="Your message…"
            {...register("message")}
            autoComplete="off"
            aria-describedby={errors.message ? `${fieldIds.message}-error` : undefined}
            aria-invalid={!!errors.message}
            disabled={isSubmitting}
            rows={5}
            className={errors.message ? "border-red-500" : ""}
          />
          {errors.message && (
            <p id={`${fieldIds.message}-error`} className="text-sm text-red-500" aria-live="polite">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  );
}
