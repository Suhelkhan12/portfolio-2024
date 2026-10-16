"use client";

import { useEffect } from "react";

// Only enhance precise pointers for users who haven't asked for less motion.
// The libraries are loaded lazily so touch devices never download them.
const MEDIA_QUERY =
  "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

export default function MouseFollowerComponent() {
  useEffect(() => {
    if (!window.matchMedia(MEDIA_QUERY).matches) return;

    let cancelled = false;
    let cursor: { destroy: () => void } | null = null;

    Promise.all([import("mouse-follower"), import("gsap")]).then(
      ([{ default: MouseFollower }, { default: gsap }]) => {
        if (cancelled) return;
        MouseFollower.registerGSAP(gsap);
        cursor = new MouseFollower({ speed: 0.5 });
      },
    );

    return () => {
      cancelled = true;
      // mouse-follower's destroy() does container.removeChild(this.el) with
      // no existence check, so it throws if the cursor element already left
      // the DOM (HMR remounts, fast page transitions). Swallow that case.
      try {
        cursor?.destroy();
      } catch {
        // cursor element was already removed; nothing left to clean up.
      }
    };
  }, []);

  return null;
}
