"use client";

import { useEffect } from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";


export default function MouseFollowerComponent() {
  useEffect(() => {
    MouseFollower.registerGSAP(gsap);

    const cursor = new MouseFollower({
      speed: 0.25,
      skewing: 5,
      skewingText: 9,
      skewingIcon: 9,
    });

    return () => {
      cursor.destroy();
    };
  }, []);

  return null;
}