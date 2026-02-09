import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, message } = body;

    if (!email || !name || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Optional: add email sending here (e.g. Resend, SendGrid, nodemailer).
    // Example with Resend: await resend.emails.send({ from, to, subject, html });
    // For now we just validate and return success.
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
