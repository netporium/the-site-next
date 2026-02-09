import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Netporium",
  description:
    "Seamless eCommerce solutions for your brand's growth. Marketplace management, wholesale distribution, logistics & fulfillment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
