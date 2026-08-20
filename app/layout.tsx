import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vaka Consulting",
  description:
    "Vaka Consulting combines enterprise architecture, modern application delivery and emerging technologies to strengthen trust, traceability and measurable impact.",
  icons: {
    icon: "/favicon-96x96.png",
    shortcut: "/favicon-96x96.png",
    apple: "/favicon-96x96.png",
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
