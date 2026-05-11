"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const endpoint = siteConfig.formspreeEndpoint;
  const isConfigured = Boolean(endpoint);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isConfigured) return;

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const payload = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMsg(payload?.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 border-t border-[rgb(var(--border))]"
    >
      <div className="container-page max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
          Contact
        </p>
        <h2 className="section-title">Let&apos;s work together</h2>
        <p className="section-subtitle text-lg">
          Punya ide project, pertanyaan, atau sekadar mau ngobrol? Kirim pesan
          dan saya akan balas secepatnya.
        </p>

        {!isConfigured && (
          <div className="mb-6 flex items-start gap-3 rounded-xl border border-amber-400/40 bg-amber-50 p-4 text-sm text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <div>
              <strong>Form not configured yet.</strong> Sign up at{" "}
              <a
                href="https://formspree.io"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                formspree.io
              </a>{" "}
              (free) and paste your endpoint into{" "}
              <code className="rounded bg-amber-100 px-1 py-0.5 text-xs dark:bg-amber-900/50">
                lib/site-config.ts → formspreeEndpoint
              </code>
              . Meanwhile, you can email me at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="underline underline-offset-2"
              >
                {siteConfig.email}
              </a>
              .
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name"
                className="w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--background))] px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--background))] px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell me about your project, idea, or just say hi..."
              className="w-full resize-none rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--background))] px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
            />
          </div>

          {/* Honeypot field for spam protection */}
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={status === "submitting" || !isConfigured}
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? (
                "Sending..."
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send message
                </>
              )}
            </button>

            <a href={`mailto:${siteConfig.email}`} className="btn-ghost">
              <Mail className="h-4 w-4" /> Email directly
            </a>
          </div>

          {status === "success" && (
            <p className="inline-flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-4 w-4" /> Thanks! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="inline-flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
              <AlertCircle className="h-4 w-4" /> {errorMsg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
