"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Progressive-enhancement layer ported from the original static build:
 * scroll reveal, magnetic buttons, tilt cards, animated stat counters,
 * shape parallax, and a nav scroll shadow. Re-scans on every client-side
 * route change since Next.js swaps content without a full page reload.
 * Everything here is inert for keyboard users and respects
 * prefers-reduced-motion.
 */
export default function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fineHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cleanups: Array<() => void> = [];

    // Scroll reveal
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
    if ("IntersectionObserver" in window && revealEls.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealEls.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    } else {
      revealEls.forEach((el) => el.classList.add("is-in"));
    }

    // Magnetic buttons
    if (fineHover && !reduceMotion) {
      const magnets = document.querySelectorAll<HTMLElement>(".magnetic");
      const onMove = (btn: HTMLElement) => (e: MouseEvent) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
      };
      const onLeave = (btn: HTMLElement) => () => {
        btn.style.transform = "translate(0,0)";
      };
      magnets.forEach((btn) => {
        const move = onMove(btn);
        const leave = onLeave(btn);
        btn.addEventListener("mousemove", move);
        btn.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          btn.removeEventListener("mousemove", move);
          btn.removeEventListener("mouseleave", leave);
        });
      });

      // Tilt cards
      const tilts = document.querySelectorAll<HTMLElement>(".tilt");
      tilts.forEach((card) => {
        const move = (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform = `perspective(800px) rotateX(${py * -6}deg) rotateY(${px * 6}deg) translateZ(0)`;
        };
        const leave = () => {
          card.style.transform = "";
        };
        card.addEventListener("mousemove", move);
        card.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          card.removeEventListener("mousemove", move);
          card.removeEventListener("mouseleave", leave);
        });
      });
    }

    // Stat counters
    const statEls = document.querySelectorAll<HTMLElement>(".stat-num[data-target]");
    if (statEls.length) {
      const animateStat = (el: HTMLElement) => {
        const target = parseFloat(el.getAttribute("data-target") || "0");
        const suffix = el.getAttribute("data-suffix") || "";
        if (reduceMotion) {
          el.textContent = target + suffix;
          return;
        }
        let start: number | null = null;
        const dur = 1300;
        const step = (ts: number) => {
          if (start === null) start = ts;
          const p = Math.min((ts - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      if ("IntersectionObserver" in window) {
        const statIo = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                animateStat(entry.target as HTMLElement);
                statIo.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.5 }
        );
        statEls.forEach((el) => statIo.observe(el));
        cleanups.push(() => statIo.disconnect());
      } else {
        statEls.forEach(animateStat);
      }
    }

    // Shape parallax
    const parallaxEls = document.querySelectorAll<HTMLElement>("[data-parallax]");
    if (parallaxEls.length && !reduceMotion) {
      let ticking = false;
      const update = () => {
        const y = window.scrollY;
        parallaxEls.forEach((el) => {
          const speed = parseFloat(el.getAttribute("data-parallax") || "0.08");
          el.style.transform = `translateY(${y * speed * -1}px)`;
        });
        ticking = false;
      };
      const onScroll = () => {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
    }

    // Nav scroll shadow
    const nav = document.querySelector<HTMLElement>(".nav");
    if (nav) {
      const onScroll = () => {
        nav.style.boxShadow = window.scrollY > 8 ? "0 1px 0 rgba(0,0,0,.02)" : "none";
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
