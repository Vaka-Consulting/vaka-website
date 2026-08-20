"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const capabilities = [
  { title: "Technology Strategy & Architecture", text: "Translate business priorities into capability models, target architectures, practical roadmaps and better-informed investment decisions." },
  { title: "Digital Platforms & Modernisation", text: "Design and lead secure applications, marketplaces, integrations and modern digital platforms from concept through to operational readiness." },
  { title: "Digital Trust & Data Assurance", text: "Use blockchain, verifiable credentials and privacy-aware patterns to strengthen data integrity, provenance, traceability and authorised change." },
  { title: "Impact Finance & Data Systems", text: "Connect operational, financial and impact data to support new finance models, verified outcomes and more transparent reporting." },
];

const approach = [
  { icon: "discover", title: "Discover", text: "Clarify the problem, stakeholders, intended outcomes and constraints." },
  { icon: "architect", title: "Architect", text: "Define the target model, governance, technology choices and delivery pathway." },
  { icon: "prove", title: "Prove", text: "Test the highest-value assumptions through a focused prototype or proof of concept." },
  { icon: "deliver", title: "Deliver", text: "Coordinate product, design, engineering and specialist partners." },
  { icon: "scale", title: "Scale", text: "Prepare for operations, capability transfer and sustainable expansion." },
];

const profiles = [
  {
    name: "Phil Lewis",
    role: "Founder & CEO",
    lead: "A TOGAF-certified Enterprise Architect with more than 25 years across government, enterprise and startup environments.",
    text: "Phil combines strategic advice with practical delivery experience across architecture, applications, cloud, integration, security, digital finance and emerging technology. He has held various leadership roles in the Cardano ecosystem, including service on Intersect’s Steering Committee and establishing its Enterprise and Government Adoption Working Group.",
    focus: "Building technology solutions for humanity.",
  },
  {
    name: "Hung Tran",
    role: "Head of Strategy and Design",
    lead: "A creative leader and strategist with experience across multinational corporations and high-growth startups.",
    text: "Hung’s expertise spans brand identity, product design and user experience. He leads cross-functional teams to build cohesive design systems, strengthen brands and translate complex ideas into elegant, purposeful digital experiences.",
    focus: "Connecting people, purpose and technology through design.",
  },
  {
    name: "Matt Roberts-Davies",
    role: "Head of Product and Partnerships",
    lead: "A fintech and digital finance professional with more than 12 years of leadership across product development, financial inclusion and crowdfunding in Africa.",
    text: "Matt has built and scaled inclusive-finance technology through partnerships with GIZ, the African Development Bank and regional fintech and crowdfunding initiatives. His experience spans platform strategy, regulatory engagement, financial innovation and donor-funded delivery.",
    focus: "Designing inclusive finance solutions that can scale.",
  },
  {
    name: "Narayan Maharjan",
    role: "Head of Technology",
    lead: "A technology leader specialising in the architecture and development of robust, secure and scalable decentralised systems.",
    text: "Narayan’s experience spans blockchain and traditional technology stacks, platform engineering, infrastructure deployment, DevSecOps, and Cardano smart-contract design and integration. He holds industry-recognised certifications from Microsoft and Amazon Web Services.",
    focus: "Engineering security, resilience and scale into every solution.",
  },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

function LinkedInIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 1 0-4 0M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" /></svg>;
}

function XIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 4 11.733 16H20L8.267 4ZM4 20l6.768-6.768m2.46-2.46L20 4" /></svg>;
}

function MailIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2ZM3 7l9 6 9-6" /></svg>;
}

function StepIcon({ type }: { type: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  return (
    <span className="step-icon" aria-hidden="true">
      <svg viewBox="0 0 32 32" {...common}>
        {type === "discover" && <><circle cx="13.5" cy="13.5" r="7.5" /><path d="m19 19 7 7M10.5 13.5h6M13.5 10.5v6" /></>}
        {type === "architect" && <><path d="M5 11 16 5l11 6-11 6L5 11Z" /><path d="m7 16 9 5 9-5M7 21l9 5 9-5" /></>}
        {type === "prove" && <><path d="M12 5h8M14 5v7L7.5 24a2 2 0 0 0 1.8 3h13.4a2 2 0 0 0 1.8-3L18 12V5" /><path d="M10.5 21h11M13 17h6" /></>}
        {type === "deliver" && <><path d="M5 9h14v14H5z" /><path d="M19 13h4l4 5v5h-8M9 23a3 3 0 1 0 6 0M21 23a3 3 0 1 0 6 0" /></>}
        {type === "scale" && <><path d="M6 25 14 17l5 4 8-12" /><path d="M20 9h7v7" /><path d="M6 7v18h20" /></>}
      </svg>
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileIndex, setProfileIndex] = useState(0);
  const [profilesPaused, setProfilesPaused] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const showPreviousProfile = () => setProfileIndex((index) => (index - 1 + profiles.length) % profiles.length);
  const showNextProfile = () => setProfileIndex((index) => (index + 1) % profiles.length);
  const activeProfile = profiles[profileIndex];

  useEffect(() => {
    if (profilesPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setProfileIndex((index) => (index + 1) % profiles.length), 8000);
    return () => window.clearInterval(timer);
  }, [profilesPaused, profileIndex]);

  return (
    <main>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="Vaka Consulting home">
            <Image src="/assets/vaka-consulting-logo.svg" alt="Vaka Consulting" width={100} height={36} priority />
          </a>
          <nav aria-label="Primary navigation">
            <a href="#capabilities">Capabilities</a><a href="#approach">Approach</a><a href="#work">Work</a><a href="#about">About</a><a className="nav-contact" href="#contact">Get in touch <Arrow /></a>
          </nav>
          <button
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
            <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
            <a href="#approach" onClick={closeMenu}>Approach</a>
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Get in touch <Arrow /></a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-texture" aria-hidden="true" />
        <Image className="hero-vaka" src="/assets/vaka-double-hull-transparent.webp" alt="" width={1536} height={1024} aria-hidden="true" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <h1>Architecture, digital trust and delivery for systems that matter.</h1>
            <p className="hero-summary">In an ocean of information, navigating technology options can be daunting for modern businesses. Vaka Consulting helps governments, enterprises and mission-led ventures leverage decentralised trust technology to deliver secure, practical and scalable solutions.</p>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="shell intro-grid">
          <div><h2>From emerging opportunity to practical delivery.</h2></div>
          <div className="intro-copy">
            <p className="lead">We help organisations make sense of change, design the right technology response and take credible solutions toward implementation.</p>
            <p>Our work combines enterprise architecture, emerging technology and impact-focused design—with particular expertise in systems where trust, data integrity and accountability matter.</p>
          </div>
        </div>
      </section>

      <section className="capabilities section-pad" id="capabilities">
        <div className="shell">
          <div className="section-heading split-heading balanced-heading">
            <div><h2>Strategy grounded in delivery.</h2></div>
            <p>Vaka Consulting can shape the direction, prove the model and coordinate the people required to deliver it.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article className="capability-card" key={item.title}>
                <h3>{item.title}</h3><p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="approach section-pad" id="approach">
        <div className="shell">
          <div className="section-heading"><h2>A clear path from idea to sustainable capability.</h2></div>
          <ol className="approach-list">
            {approach.map((item) => <li key={item.title}><StepIcon type={item.icon} /><h3>{item.title}</h3><p>{item.text}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="work section-pad" id="work">
        <div className="shell">
          <div className="section-heading split-heading balanced-heading">
            <div><h2>Technology designed around real-world outcomes.</h2></div>
            <p>Selected examples of Vaka Consulting’s work across digital finance, trusted data and public-interest technology.</p>
          </div>
          <article className="case-study">
            <div className="case-image"><Image src="/assets/empowa-impact-housing.webp" alt="An African woman with climate-smart housing imagery" width={1254} height={1254} /><span className="case-label">Digital finance · Housing</span></div>
            <div className="case-content">
              <p className="case-kicker">Empowa</p><h3>A multi-country finance marketplace supporting affordable housing.</h3>
              <p>Vaka Consulting provided product, architecture and technology leadership from inception, helping establish blockchain-enabled investment and transaction workflows alongside conventional web services.</p>
              <div className="case-meta"><div><span>Role</span><strong>Technology strategy, architecture & delivery</strong></div><div><span>Outcome</span><strong>Climate-smart homes financed in Mozambique</strong></div></div>
              <a className="text-link" href="https://empowa.io" target="_blank" rel="noreferrer">Visit Empowa <Arrow /></a>
            </div>
          </article>
          <article className="case-study case-climafi">
            <div className="case-content">
              <p className="case-kicker">ClimaFI</p><h3>Trusted digital infrastructure for the impact economy.</h3>
              <p>As a technology and platform partner within ClimaFI, Vaka Consulting helps connect operational, financial, environmental and social data to improve financing, impact verification and reporting.</p>
              <div className="product-row">
                <div><b>Flow</b><span>Asset finance aligned with utilisation improves capital performance</span></div>
                <div><b>Proof</b><span>Simplifying the measurement, trust and attribution of outcomes</span></div>
                <div><b>Insight</b><span>Automation and standardisation improves reporting timeliness and reduces audit overheads</span></div>
              </div>
              <a className="text-link" href="https://climafi.earth" target="_blank" rel="noreferrer">Visit ClimaFI <Arrow /></a>
            </div>
            <div className="case-image"><Image src="/assets/climafi-home-hero-agriculture.webp" alt="An entrepreneur operating solar-powered agricultural processing equipment" width={1774} height={887} /><span className="case-label">Impact data · Green asset finance</span></div>
          </article>
          <article className="concept-card">
            <div><p className="case-kicker">Current solution area</p><h3>Digital public infrastructure with trust built in.</h3></div>
            <p>Vaka Consulting is developing reusable patterns for citizen-controlled data access, verifiable authority, privacy-aware audit receipts and high-assurance government services.</p>
            <ul><li>Citizen-controlled access</li><li>Verifiable credentials</li><li>Blockchain-based assurance</li><li>GovStack-aligned design</li></ul>
          </article>
        </div>
      </section>

      <section className="why section-pad" id="about">
        <div className="shell why-grid">
          <div className="why-copy">
            <h2>Enterprise discipline. Practical innovation. Global perspective.</h2>
            <p>We bring together the strategic, technical and delivery thinking required to turn innovation into practical, sustainable solutions.</p>
            <ul className="check-list"><li>Architecture connected to business outcomes</li><li>Governance, security and operational readiness from the start</li><li>Decentralised trust technology experience</li><li>Specialist teams assembled around each engagement</li></ul>
          </div>
          <div className="proof-grid"><div><strong>Enterprise<br />+ Government</strong><span>delivery experience</span></div><div><strong>Strategy<br />→ Delivery</strong><span>end-to-end capability</span></div><div><strong>APAC<br />+ Africa</strong><span>delivery perspective</span></div><div><strong>Trust<br />+ Impact</strong><span>specialist focus</span></div></div>
        </div>
      </section>

      <section className="profile section-pad" aria-label="Vaka Consulting team">
        <div className="shell profile-carousel">
          <article className="profile-grid profile-slide" key={activeProfile.name}>
            <div className="profile-title"><h2>{activeProfile.name}</h2><span>{activeProfile.role}</span></div>
            <div className="profile-copy"><p className="lead">{activeProfile.lead}</p><p>{activeProfile.text}</p></div>
            <p className="profile-focus">{activeProfile.focus}</p>
          </article>
          <div className="profile-controls" aria-label="Team profile controls">
            <button type="button" onClick={showPreviousProfile} aria-label="Previous profile">←</button>
            <div className="profile-selectors">
              {profiles.map((profile, index) => <button type="button" className={index === profileIndex ? "is-active" : ""} onClick={() => setProfileIndex(index)} aria-label={`Show ${profile.name} profile`} aria-current={index === profileIndex ? "true" : undefined} key={profile.name} />)}
            </div>
            <button className="profile-playback" type="button" onClick={() => setProfilesPaused((paused) => !paused)} aria-label={profilesPaused ? "Play automatic profile rotation" : "Pause automatic profile rotation"} aria-pressed={profilesPaused}>{profilesPaused ? "▶" : "Ⅱ"}</button>
            <button type="button" onClick={showNextProfile} aria-label="Next profile">→</button>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-image" aria-hidden="true" />
        <div className="shell contact-inner">
          <div><h2>What are you trying to make possible?</h2></div>
          <div className="contact-copy">
            <p>Bring us the opportunity, challenge or early idea. We’ll help identify the most credible path forward.</p>
            <ul className="contact-links">
              <li><LinkedInIcon /><a href="https://www.linkedin.com/company/vaka-consulting" target="_blank" rel="noreferrer">vaka-consulting</a></li>
              <li><XIcon /><a href="https://twitter.com/vaka_consulting" target="_blank" rel="noreferrer">@vaka_consulting</a></li>
              <li><MailIcon /><a href="mailto:info@vaka.consulting">info@vaka.consulting</a></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
