import { ReactNode, useEffect, useState } from "react";
import { Header } from "@/components";
import { Open_Sans, Oxanium } from "next/font/google";
import { clsx } from "clsx";

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

export default function PageLayout({ children }: { children: ReactNode }) {
  const [hasBgColor, setHasBgColor] = useState(false);

  const handleBgColorOnScroll = () => {
    if (window.scrollY > 200) {
      setHasBgColor(true);
    } else {
      setHasBgColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleBgColorOnScroll);
  });

  return (
    <div className={`${oxanium.variable} ${openSans.variable}`}>
      <header
        className={clsx(
          { "bg-primary": hasBgColor },
          "fixed top-0 w-full z-[1]",
        )}
      >
        <Header className="container" />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
