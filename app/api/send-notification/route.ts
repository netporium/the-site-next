import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function getTransporter() {
  const user = (process.env.MAIL_USERNAME ?? process.env.SMTP_USER)?.trim();
  const pass = (process.env.MAIL_PASSWORD ?? process.env.SMTP_PASS)?.trim();
  const host = process.env.SMTP_HOST ?? "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT ?? "587");

  if (!user || !pass) return null;

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email: senderEmail, name, message } = body;

    if (!senderEmail || !name || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = getTransporter();
    const toEmail =
      process.env.CONTACT_TO_EMAIL ?? "zenithsantosmanuel@gmail.com";

    if (!transporter) {
      console.warn(
        "Send notification: SMTP not configured (set MAIL_USERNAME/MAIL_PASSWORD or SMTP_USER/SMTP_PASS in .env.local). Form data received but no email sent."
      );
      return NextResponse.json({ success: true });
    }

    const from =
      process.env.SMTP_FROM ?? process.env.MAIL_USERNAME ?? "noreply@yourapp.com";

    await transporter.sendMail({
      from,
      to: toEmail,
      replyTo: senderEmail,
      subject: `Important notification from ${senderEmail}`,
      html: `
        <h1>Hello, Zenith!</h1>
        <p>You have a message from <b>${escapeHtml(name)}</b>; here is what he/she has to say:</p>
        <p>${escapeHtml(message)}</p>
        <p>Sender's email: ${escapeHtml(senderEmail)}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Send notification error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (c) => map[c] ?? c);
}
