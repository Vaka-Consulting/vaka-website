import { Metadata } from "next";
import { AppProps } from "next/app";
import "@/styles/globals.css";
import { Oxanium, Open_Sans } from "next/font/google";
import { Layout } from "@/components";
import Head from "next/head";

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
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
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
