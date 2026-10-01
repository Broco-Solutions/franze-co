"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.animate(
              [
                { opacity: 0, transform: "translateY(16px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              { duration: 700, easing: "cubic-bezier(.22,.61,.36,1)" },
            );
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    const reveal = (element: HTMLElement) => {
      if (element.classList.contains("is-visible")) return;
      const bounds = element.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 0.92) {
        element.classList.add("is-visible");
      } else {
        observer.observe(element);
      }
    };

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach(reveal);

    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          if (node.matches("[data-reveal]")) reveal(node);
          node.querySelectorAll<HTMLElement>("[data-reveal]").forEach(reveal);
        }
      }
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    }
  }, [pathname]);

  return null;
}
