"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;

    try {
      const res = await fetch("/api/send-notification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, message }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        form.reset();
        router.refresh();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div style={{ padding: "0 12px", marginBottom: "15px" }}>
      <h1>Contact Us</h1>
      {status === "success" && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          Your message has been sent successfully.
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setStatus("idle")}
          />
        </div>
      )}
      {status === "error" && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          Something went wrong. Please try again.
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setStatus("idle")}
          />
        </div>
      )}
      <form onSubmit={handleSubmit} className="container">
        <div className="form-group">
          <label htmlFor="email" className="d-block" style={{ paddingBottom: "10px" }}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control mb-2"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="d-block" style={{ paddingBottom: "10px" }}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control mb-2"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="d-block" style={{ paddingBottom: "10px" }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="form-control mb-4"
            rows={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Send
        </button>
      </form>
    </div>
  );
}
