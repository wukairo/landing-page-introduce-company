"use client";

import { useLayoutEffect } from "react";

const REVEAL_TARGETS = [
  "main > section > .container",
  "main > section > .hero-grid",
  "footer > .container",
].join(", ");

export function ScrollReveal() {
  useLayoutEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_TARGETS),
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((target) => target.classList.add("is-revealed"));
      return;
    }

    targets.forEach((target) => target.classList.add("scroll-reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-revealed", entry.isIntersecting);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return null;
}
