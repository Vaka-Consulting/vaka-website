import { Metadata } from "next";
import { AppProps } from "next/app";
import "@/styles/globals.css";
import { Oxanium, Open_Sans } from "next/font/google";
import { Layout } from "@/components";

const oxanium = Oxanium({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oxanium",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Vaka Consultancy",
  description: "Vaka Consultancy Website",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${oxanium.variable} ${openSans.variable}`}>
      <style jsx global>{`
        body {
          font-family: ${openSans.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
