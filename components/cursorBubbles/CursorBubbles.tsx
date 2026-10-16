"use client";

import { useEffect } from "react";
import gsap from "gsap";

// Ambient cursor toy: soft bubbles trail the pointer and pop on click.
// Fine pointers + reduced motion opt-out only, same gate as the custom cursor.
const MEDIA_QUERY =
  "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

const MAX_BUBBLES = 6;
const SPAWN_INTERVAL = 650;
const BUBBLE_LIFETIME = 3200;
const COLORS = ["#8b5cf6", "#22d3ee", "#f472b6", "#facc15"];

export default function CursorBubbles() {
  useEffect(() => {
    if (!window.matchMedia(MEDIA_QUERY).matches) return;

    const layer = document.createElement("div");
    layer.setAttribute("aria-hidden", "true");
    layer.style.position = "fixed";
    layer.style.inset = "0";
    layer.style.zIndex = "40";
    layer.style.pointerEvents = "none";
    document.body.appendChild(layer);

    let active = 0;
    let lastSpawn = 0;

    const shockwave = (x: number, y: number, color: string, size: number) => {
      const ring = document.createElement("span");
      ring.style.position = "absolute";
      ring.style.left = `${x}px`;
      ring.style.top = `${y}px`;
      ring.style.width = `${size}px`;
      ring.style.height = `${size}px`;
      ring.style.marginLeft = `${-size / 2}px`;
      ring.style.marginTop = `${-size / 2}px`;
      ring.style.borderRadius = "50%";
      ring.style.border = `2px solid ${color}`;
      ring.style.willChange = "transform, opacity";
      layer.appendChild(ring);
      gsap.to(ring, {
        scale: 2.4,
        opacity: 0,
        duration: 0.45,
        ease: "power3.out",
        onComplete: () => ring.remove(),
      });
    };

    const burst = (x: number, y: number, color: string) => {
      const count = 10;
      for (let i = 0; i < count; i++) {
        const spark = document.createElement("span");
        const sparkSize = gsap.utils.random(3, 6);
        spark.style.position = "absolute";
        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;
        spark.style.width = `${sparkSize}px`;
        spark.style.height = `${sparkSize}px`;
        spark.style.marginLeft = `${-sparkSize / 2}px`;
        spark.style.marginTop = `${-sparkSize / 2}px`;
        spark.style.borderRadius = "50%";
        spark.style.background = color;
        spark.style.willChange = "transform, opacity";
        layer.appendChild(spark);
        const angle = (Math.PI * 2 * i) / count + gsap.utils.random(-0.2, 0.2);
        const distance = gsap.utils.random(22, 42);
        gsap.to(spark, {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance + 10,
          opacity: 0,
          scale: 0.3,
          duration: gsap.utils.random(0.45, 0.65),
          ease: "power2.out",
          onComplete: () => spark.remove(),
        });
      }
    };

    const spawn = (x: number, y: number) => {
      if (active >= MAX_BUBBLES) return;
      active++;

      const size = gsap.utils.random(14, 26);
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const bubble = document.createElement("span");
      bubble.style.position = "absolute";
      bubble.style.left = `${x - size / 2}px`;
      bubble.style.top = `${y - size / 2}px`;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.borderRadius = "50%";
      bubble.style.cursor = "pointer";
      bubble.style.pointerEvents = "auto";
      bubble.style.background = `radial-gradient(circle at 35% 30%, ${color}99, ${color}22)`;
      bubble.style.boxShadow = `0 0 12px ${color}55`;
      bubble.style.willChange = "transform, opacity";
      layer.appendChild(bubble);

      const tooltip = document.createElement("span");
      tooltip.textContent = "you can pop me!";
      tooltip.style.position = "absolute";
      tooltip.style.left = "50%";
      tooltip.style.bottom = "100%";
      tooltip.style.transform = "translate(-50%, 0)";
      tooltip.style.marginBottom = "10px";
      tooltip.style.padding = "3px 10px";
      tooltip.style.borderRadius = "999px";
      tooltip.style.background = "rgba(12, 12, 12, 0.9)";
      tooltip.style.color = "#fff";
      tooltip.style.fontSize = "11px";
      tooltip.style.fontWeight = "500";
      tooltip.style.whiteSpace = "nowrap";
      tooltip.style.pointerEvents = "none";
      tooltip.style.opacity = "0";
      bubble.appendChild(tooltip);

      let popped = false;
      let lifeTimer: number;
      const remove = () => {
        if (!bubble.isConnected) return;
        active--;
        bubble.remove();
      };

      const startLifeTimer = () => {
        lifeTimer = window.setTimeout(() => {
          if (popped) return;
          gsap.to(bubble, {
            opacity: 0,
            duration: 0.5,
            ease: "power1.out",
            onComplete: remove,
          });
        }, BUBBLE_LIFETIME);
      };
      startLifeTimer();

      bubble.addEventListener("pointerenter", () => {
        if (popped) return;
        window.clearTimeout(lifeTimer);
        gsap.to(tooltip, {
          opacity: 1,
          y: -4,
          duration: 0.2,
          ease: "power2.out",
        });
        gsap.to(bubble, { scale: 1.15, duration: 0.2, ease: "power2.out" });
      });
      bubble.addEventListener("pointerleave", () => {
        if (popped) return;
        gsap.to(tooltip, { opacity: 0, y: 0, duration: 0.15, ease: "power1.in" });
        gsap.to(bubble, { scale: 1, duration: 0.2, ease: "power2.out" });
        startLifeTimer();
      });

      bubble.addEventListener("pointerdown", () => {
        if (popped) return;
        popped = true;
        window.clearTimeout(lifeTimer);
        gsap.killTweensOf(tooltip);
        tooltip.remove();

        const rect = bubble.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        gsap
          .timeline({ onComplete: remove })
          .to(bubble, {
            scaleX: 1.35,
            scaleY: 0.65,
            duration: 0.08,
            ease: "power1.out",
          })
          .to(bubble, {
            scale: 1.9,
            opacity: 0,
            duration: 0.3,
            ease: "power3.out",
          });
        burst(cx, cy, color);
        shockwave(cx, cy, color, size);
      });

      gsap.fromTo(
        bubble,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" },
      );
      gsap.to(bubble, {
        y: `+=${gsap.utils.random(-30, -60)}`,
        x: `+=${gsap.utils.random(-20, 20)}`,
        duration: gsap.utils.random(2.6, 3.6),
        ease: "sine.inOut",
      });
    };

    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      if (now - lastSpawn < SPAWN_INTERVAL) return;
      lastSpawn = now;
      spawn(
        e.clientX + gsap.utils.random(-12, 12),
        e.clientY + gsap.utils.random(-12, 12),
      );
    };

    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      layer.remove();
    };
  }, []);

  return null;
}
