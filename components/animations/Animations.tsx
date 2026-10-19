"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { pageTransition } from "@/lib/pageTransition";

if (typeof window !== "undefined")
  gsap.registerPlugin(ScrollTrigger, SplitText);

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const MOTION = "(prefers-reduced-motion: no-preference)";
const FINE_POINTER = "(hover: hover) and (pointer: fine)";

/**
 * Site-wide motion, driven by data attributes so pages stay server components:
 *   data-animate="split"      heading rises in line by line
 *   data-animate="fade"       fades up when scrolled into view
 *   data-animate="stagger"    each direct child fades up in turn
 *   data-animate="line"       draws in from the left (dividers)
 *   data-animate="image"      unmasks from the bottom
 *   data-animate="dim-reveal" section pins and words fade in from nothing as the page scrolls
 *   data-magnetic          eases toward the pointer on hover
 *   data-spotlight         soft light follows the pointer (styled in globals.css)
 * Elements are pre-hidden in CSS until this runs; see globals.css.
 */
const Animations = () => {
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    const all = <T extends Element = HTMLElement>(selector: string) =>
      gsap.utils.toArray<T>(selector);
    const mm = gsap.matchMedia();

    try {
      mm.add({ motion: MOTION, fine: FINE_POINTER }, (context) => {
        const { motion, fine } = context.conditions as {
          motion: boolean;
          fine: boolean;
        };
        const cleanups: (() => void)[] = [];

        if (motion) {
          // Content already in view on load waits for the page title to lead,
          // and after a route change, for the page-transition curtain to lift.
          const startedAt = performance.now();
          const lead = pageTransition.revealDelay;
          const onLoad = () => performance.now() - startedAt < 200;
          const introDelay = () => (onLoad() ? lead + 0.3 : 0);

          all('[data-animate="split"]').forEach((el) => {
            SplitText.create(el, {
              type: "lines",
              mask: "lines",
              autoSplit: true,
              onSplit(self) {
                gsap.set(el, { autoAlpha: 1 });
                const inView = onLoad() && ScrollTrigger.isInViewport(el);
                return gsap.from(self.lines, {
                  yPercent: 110,
                  duration: 1.1,
                  ease: "expo.out",
                  stagger: 0.09,
                  delay: 0.05 + (inView ? lead : 0),
                  scrollTrigger: { trigger: el, start: "top 90%", once: true },
                });
              },
            });
          });

          all('[data-animate="dim-reveal"]').forEach((el) => {
            const section = el.closest("section") ?? el;
            SplitText.create(el, {
              type: "words",
              autoSplit: true,
              onSplit(self) {
                // Opacity only: the text color comes from the theme.
                gsap.set(self.words, { autoAlpha: 0.08 });
                return gsap.to(self.words, {
                  autoAlpha: 1,
                  stagger: 0.04,
                  ease: "none",
                  scrollTrigger: {
                    trigger: section,
                    start: "center center",
                    end: "+=100%",
                    scrub: true,
                    pin: true,
                  },
                });
              },
            });
          });

          const fades = [
            ...all('[data-animate="fade"]'),
            ...all('[data-animate="stagger"] > *'),
          ];
          gsap.set(fades, { autoAlpha: 0, y: 36 });
          ScrollTrigger.batch(fades, {
            start: "top 90%",
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: 0.9,
                ease: "power3.out",
                stagger: 0.1,
                delay: introDelay(),
                overwrite: true,
                // Hand transforms back to CSS so hover states keep working.
                clearProps: "transform,opacity,visibility",
              }),
          });

          all('[data-animate="line"]').forEach((el) => {
            gsap.from(el, {
              scaleX: 0,
              transformOrigin: "left center",
              duration: 1.2,
              ease: "power3.inOut",
              scrollTrigger: { trigger: el, start: "top 95%", once: true },
            });
          });

          all('[data-animate="image"]').forEach((el) => {
            gsap.fromTo(
              el,
              { clipPath: "inset(100% 0% 0% 0%)", scale: 1.08 },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                scale: 1,
                duration: 1.4,
                ease: "expo.out",
                delay:
                  (ScrollTrigger.isInViewport(el) ? introDelay() : 0) + 0.1,
                clearProps: "clipPath,transform",
                scrollTrigger: { trigger: el, start: "top 90%", once: true },
              },
            );
          });
        }

        if (fine && motion) {
          all("[data-magnetic]").forEach((el) => {
            const xTo = gsap.quickTo(el, "x", {
              duration: 0.8,
              ease: "elastic.out(1, 0.5)",
            });
            const yTo = gsap.quickTo(el, "y", {
              duration: 0.8,
              ease: "elastic.out(1, 0.5)",
            });
            const move = (e: PointerEvent) => {
              const r = el.getBoundingClientRect();
              xTo((e.clientX - (r.left + r.width / 2)) * 0.3);
              yTo((e.clientY - (r.top + r.height / 2)) * 0.3);
            };
            const leave = () => {
              xTo(0);
              yTo(0);
            };
            el.addEventListener("pointermove", move);
            el.addEventListener("pointerleave", leave);
            cleanups.push(() => {
              el.removeEventListener("pointermove", move);
              el.removeEventListener("pointerleave", leave);
            });
          });
        }

        if (fine) {
          const spotlight = (e: PointerEvent) => {
            const card = (e.target as Element | null)?.closest<HTMLElement>(
              "[data-spotlight]",
            );
            if (!card) return;
            const r = card.getBoundingClientRect();
            card.style.setProperty("--mx", `${e.clientX - r.left}px`);
            card.style.setProperty("--my", `${e.clientY - r.top}px`);
          };
          document.addEventListener("pointermove", spotlight, {
            passive: true,
          });
          cleanups.push(() =>
            document.removeEventListener("pointermove", spotlight),
          );
        }

        return () => cleanups.forEach((fn) => fn());
      });
    } finally {
      // Always reveal content even if a selector above throws (e.g. a
      // malformed heading breaks SplitText) - otherwise everything stays
      // hidden until the 3s CSS fallback in globals.css kicks in.
      document.documentElement.classList.add("anim-ready");
    }

    return () => mm.revert();
  }, [pathname]);

  return null;
};

export default Animations;
