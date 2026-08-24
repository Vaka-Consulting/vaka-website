import type { Metadata } from "next";
import "./globals.css";

const description = "Vaka Consulting combines enterprise architecture, modern application delivery and emerging technologies to strengthen trust, traceability and measurable impact.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vakaconsulting.io"),
  title: "Vaka Consulting",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "Vaka Consulting",
    title: "Vaka Consulting",
    description,
  },
  twitter: {
    card: "summary",
    title: "Vaka Consulting",
    description,
  },
  icons: {
    icon: "/favicon-96x96.png",
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
