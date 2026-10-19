"use client";

import { useCallback, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { pageTransition } from "@/lib/pageTransition";

const MOTION = "(prefers-reduced-motion: no-preference)";
const COLUMNS = 5;
// How long after the route commits until the new page's content may animate;
// roughly when the curtain has lifted halfway.
const REVEAL_DELAY = 0.55;

const LABELS: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/work": "Work",
  "/techstack": "Toolkit",
  "/contact": "Contact",
};

const labelFor = (path: string) =>
  LABELS[path] ??
  path.split("/").filter(Boolean).pop()?.replace(/[-_]/g, " ") ??
  "Home";

/**
 * Curtain transition between routes. Internal link clicks are intercepted:
 * columns sweep up to cover the screen and name the destination, the route
 * changes underneath, then the columns lift away. Back/forward navigation and
 * reduced-motion users get the normal instant route change.
 */
export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const busy = useRef(false);
  const fallback = useRef<number>();

  const reveal = useCallback(() => {
    const root = rootRef.current;
    if (!root) return;
    window.clearTimeout(fallback.current);
    const ease = "power4.inOut";
    gsap
      .timeline({
        delay: 0.1,
        onComplete: () => {
          gsap.set(root, { autoAlpha: 0, pointerEvents: "none" });
          pageTransition.revealDelay = 0;
          busy.current = false;
        },
      })
      .to(labelRef.current, { yPercent: -110, duration: 0.35, ease: "power3.in" })
      .to(
        root.querySelectorAll("[data-panel='main']"),
        { scaleY: 0, transformOrigin: "top", duration: 0.55, ease, stagger: 0.04 },
        "-=0.1",
      )
      .to(
        root.querySelectorAll("[data-panel='accent']"),
        { scaleY: 0, transformOrigin: "top", duration: 0.55, ease, stagger: 0.04 },
        "<0.1",
      );
  }, []);

  const cover = useCallback(
    (href: string, path: string) => {
      const root = rootRef.current;
      const label = labelRef.current;
      if (!root || !label) return;
      busy.current = true;
      label.textContent = labelFor(path);
      const ease = "power4.inOut";
      const accent = root.querySelectorAll("[data-panel='accent']");
      const main = root.querySelectorAll("[data-panel='main']");
      gsap.set(root, { autoAlpha: 1, pointerEvents: "auto" });
      gsap.set([accent, main], { scaleY: 0, transformOrigin: "bottom" });
      gsap.set(label, { yPercent: 110 });
      gsap
        .timeline()
        .to(accent, { scaleY: 1, duration: 0.5, ease, stagger: 0.04 })
        .to(main, { scaleY: 1, duration: 0.5, ease, stagger: 0.04 }, "<0.08")
        .to(label, { yPercent: 0, duration: 0.45, ease: "expo.out" }, "-=0.2")
        .add(() => {
          pageTransition.revealDelay = REVEAL_DELAY;
          router.push(href);
          // Lift the curtain even if the route never changes (e.g. an error).
          fallback.current = window.setTimeout(reveal, 5000);
        });
    },
    [router, reveal],
  );

  // The new route has rendered under the curtain: lift it.
  useEffect(() => {
    if (busy.current) reveal();
  }, [pathname, reveal]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (!window.matchMedia(MOTION).matches) return;

      const link = (e.target as Element | null)?.closest?.("a");
      if (!link || link.hasAttribute("download")) return;
      if (link.target && link.target !== "_self") return;

      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      // Same page (incl. hash links) and files like the résumé PDF.
      if (url.pathname === window.location.pathname) return;
      if (/\.\w+$/.test(url.pathname)) return;

      // Runs in the capture phase, before next/link's handler, which skips
      // navigation once the default is prevented.
      e.preventDefault();
      if (busy.current) return;
      cover(url.pathname + url.search + url.hash, url.pathname);
    };
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.clearTimeout(fallback.current);
    };
  }, [cover]);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none invisible fixed inset-0 z-[9990] flex"
    >
      {Array.from({ length: COLUMNS }, (_, i) => (
        <div key={i} className="relative h-full flex-1">
          <div
            data-panel="accent"
            className="absolute -inset-x-px inset-y-0 origin-bottom scale-y-0 bg-gradient-to-t from-[#ffb800] via-[#e93f3f] to-[#3f64e9]"
          />
          <div
            data-panel="main"
            className="absolute -inset-x-px inset-y-0 origin-bottom scale-y-0 bg-curtain"
          />
        </div>
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="overflow-hidden px-4 py-2">
          <span
            ref={labelRef}
            className="block text-5xl font-bold capitalize tracking-tight text-white md:text-8xl"
          />
        </span>
      </div>
    </div>
  );
}
