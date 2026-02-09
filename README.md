# Netporium – Next.js

This is the Next.js version of the Netporium marketing site (converted from the Rails app in `The-Site`).

## Pages

- **/** – Home (hero, service boxes, contact form)
- **/about** – About Us
- **/services** – Services and “What We Do Best”
- **/contact** – Contact page with form

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

The contact form submits to `POST /api/send-notification`. The API route currently validates the payload and returns success; it does **not** send email.

To send real email, add a provider in `app/api/send-notification/route.ts`, for example:

- [Resend](https://resend.com): `npm install resend` and use their API.
- [SendGrid](https://sendgrid.com) or [Nodemailer](https://nodemailer.com) with your SMTP.

Request body: `{ email, name, message }`.

## Stack

- Next.js (App Router)
- TypeScript
- Bootstrap 5
- Tailwind (minimal, for theme)
- Font Awesome (CDN)

## Node version

Next.js 16 expects Node **>= 20.9.0**. If you see engine warnings, switch with `nvm use 20` (or install Node 20+).


cd /Users/zenithmanuel/OrbStack/ubuntu/home/zenithmanuel/the-site-next
npm install
npm run dev
