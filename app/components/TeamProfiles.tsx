"use client";

import { useEffect, useState } from "react";

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
    role: "Advisor, Strategy and Design",
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

export function TeamProfiles() {
  const [profileIndex, setProfileIndex] = useState(0);
  const [profilesPaused, setProfilesPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const showPreviousProfile = () => { setProfilesPaused(true); setProfileIndex((index) => (index - 1 + profiles.length) % profiles.length); };
  const showNextProfile = () => { setProfilesPaused(true); setProfileIndex((index) => (index + 1) % profiles.length); };

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(motionPreference.matches);
    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);
    return () => motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (profilesPaused || prefersReducedMotion) return;
    const timer = window.setInterval(() => setProfileIndex((index) => (index + 1) % profiles.length), 8000);
    return () => window.clearInterval(timer);
  }, [profilesPaused, prefersReducedMotion, profileIndex]);

  return (
    <section className="profile section-pad" aria-label="Vaka Consulting team">
      <div className="shell profile-carousel" role="region" aria-roledescription="carousel" aria-label="Vaka Consulting team profiles">
        <div className="profile-slides" aria-live={profilesPaused || prefersReducedMotion ? "polite" : "off"}>
          {profiles.map((profile, index) => (
            <article
              className={`profile-grid profile-slide${index === profileIndex ? " is-active" : ""}`}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${profiles.length}: ${profile.name}`}
              key={profile.name}
            >
              <div className="profile-title"><h2>{profile.name}</h2><span>{profile.role}</span></div>
              <div className="profile-copy"><p className="lead">{profile.lead}</p><p>{profile.text}</p></div>
              <p className="profile-focus">{profile.focus}</p>
            </article>
          ))}
        </div>
        <div className="profile-controls" aria-label="Team profile controls">
          <button
            className="profile-playback"
            type="button"
            onClick={() => setProfilesPaused((paused) => !paused)}
            aria-label={prefersReducedMotion ? "Automatic profile rotation disabled by reduced motion preference" : profilesPaused ? "Play automatic profile rotation" : "Pause automatic profile rotation"}
            aria-pressed={profilesPaused || prefersReducedMotion}
            disabled={prefersReducedMotion}
          >
            {profilesPaused || prefersReducedMotion ? "▶" : "Ⅱ"}
          </button>
          <button type="button" onClick={showPreviousProfile} aria-label="Previous profile">←</button>
          <div className="profile-selectors">
            {profiles.map((profile, index) => <button type="button" className={index === profileIndex ? "is-active" : ""} onClick={() => { setProfilesPaused(true); setProfileIndex(index); }} aria-label={`Show ${profile.name} profile`} aria-current={index === profileIndex ? "true" : undefined} key={profile.name} />)}
          </div>
          <button type="button" onClick={showNextProfile} aria-label="Next profile">→</button>
        </div>
      </div>
    </section>
  );
}
