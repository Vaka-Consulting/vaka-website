"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon } from "./ArrowIcon";

const navigation = [
  ["Capabilities", "#capabilities"],
  ["Approach", "#approach"],
  ["Work", "#work"],
  ["About", "#about"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButton.current?.focus();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href="#top" aria-label="Vaka Consulting home">
          <Image src="/assets/vaka-consulting-logo.svg" alt="Vaka Consulting" width={100} height={36} priority />
        </a>
        <nav aria-label="Primary navigation">
          {navigation.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          <a className="nav-contact" href="#contact">Get in touch <ArrowIcon /></a>
        </nav>
        <button
          ref={menuButton}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>
        <nav id="mobile-navigation" className={`mobile-nav${menuOpen ? " is-open" : ""}`} aria-label="Mobile navigation">
          {navigation.map(([label, href]) => <a href={href} onClick={closeMenu} key={href}>{label}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Get in touch <ArrowIcon /></a>
        </nav>
      </div>
    </header>
  );
}
