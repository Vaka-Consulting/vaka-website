import { Header } from "@/components";
import { Open_Sans, Oxanium } from "next/font/google";

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

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${oxanium.variable} ${openSans.variable} py-5`}>
      <header className="container bg-primary sticky top-0 z-[1]">
        <Header />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
