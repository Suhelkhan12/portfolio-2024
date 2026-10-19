"use client";

import type { MouseEvent } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { THEME_STORAGE_KEY } from "@/lib/theme";

const MOTION = "(prefers-reduced-motion: no-preference)";

type ViewTransitionDocument = {
  startViewTransition?: (update: () => void) => { ready: Promise<void> };
};

// Icons swap via the .dark class rather than state, so the server render
// always matches whatever theme the inline script already applied.
const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const toggle = (e: MouseEvent<HTMLButtonElement>) => {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";
    const apply = () => {
      root.classList.add("theme-switching");
      root.classList.toggle("dark", next === "dark");
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        // Storage blocked (private mode); the theme still applies this visit.
      }
      // Restore transitions once the new colors have been painted.
      requestAnimationFrame(() =>
        requestAnimationFrame(() => root.classList.remove("theme-switching")),
      );
    };

    const doc = document as unknown as ViewTransitionDocument;
    if (!doc.startViewTransition || !window.matchMedia(MOTION).matches) {
      apply();
      return;
    }

    // Grow the new theme out of the button as a circle.
    const r = e.currentTarget.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );
    doc.startViewTransition.call(document, apply).ready.then(() => {
      root.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 700,
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      data-magnetic
      className={`group relative flex size-9 items-center justify-center rounded-full border border-fg/10 bg-fg/5 text-fg transition-colors duration-300 hover:border-fg/25 hover:bg-fg/10 ${className}`}
    >
      <IoMoonOutline
        aria-hidden
        className="size-[18px] transition-transform duration-500 group-hover:-rotate-12 dark:hidden"
      />
      <IoSunnyOutline
        aria-hidden
        className="hidden size-[18px] transition-transform duration-500 group-hover:rotate-45 dark:block"
      />
    </button>
  );
};

export default ThemeToggle;
