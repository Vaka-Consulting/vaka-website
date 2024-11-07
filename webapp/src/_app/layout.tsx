import { ReactNode } from "react";
import type { Metadata } from "next";
import Providers from "@/_app/providers";
import { Layout } from "@/components";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Vaka Consultancy",
  description: "Vaka Consultancy Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
