"use client";

import { useId, useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/dictionaries";

type Status = "idle" | "submitting" | "success" | "error" | "invalid";

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const [status, setStatus] = useState<Status>("idle");
  const nameId = useId();
  const emailId = useId();
  const websiteId = useId();
  const messageId = useId();
  const statusId = useId();
  const f = dict.contact.form;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never fill this hidden field.
    if ((data.get("company") as string)?.length) {
      setStatus("success");
      form.reset();
      return;
    }

    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();
    if (!name || !email || !message) {
      setStatus("invalid");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          website: (data.get("website") as string)?.trim() || "",
          message,
        }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="card reveal" noValidate aria-describedby={statusId}>
      <p className="sr-only" id={`${nameId}-honeypot-label`}>
        {f.honeypotLabel}
      </p>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        aria-labelledby={`${nameId}-honeypot-label`}
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
        <div className="field">
          <label className="mono-label" htmlFor={nameId}>
            {f.name} *
          </label>
          <input required id={nameId} name="name" type="text" autoComplete="name" />
        </div>

        <div className="field">
          <label className="mono-label" htmlFor={emailId}>
            Email *
          </label>
          <input required id={emailId} name="email" type="email" autoComplete="email" />
        </div>

        <div className="field">
          <label className="mono-label" htmlFor={websiteId}>
            {f.website}
          </label>
          <input id={websiteId} name="website" type="text" autoComplete="url" />
        </div>

        <div className="field">
          <label className="mono-label" htmlFor={messageId}>
            {f.message} *
          </label>
          <textarea required id={messageId} name="message" rows={5} />
        </div>

        <button type="submit" className="btn magnetic" disabled={status === "submitting"} style={{ justifyContent: "center" }}>
          {status === "submitting" ? f.submitting : f.submit}
        </button>

        <p className="small" id={statusId} role="status" aria-live="polite">
          {status === "success" && f.success}
          {status === "error" && f.error}
          {status === "invalid" && f.required}
        </p>
      </div>
    </form>
  );
}
