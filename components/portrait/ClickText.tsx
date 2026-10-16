"use client";
import { portraitText } from "@/data/data";
import { useRef, useState } from "react";
import gsap from "gsap";

const ClickText = () => {
  const [currText, setCurrText] = useState("Click this text.");
  const [currIndex, setCurrIndex] = useState(0);
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    // Increment the index, looping back to 0 if it exceeds the array length
    setCurrIndex((prevIndex) => (prevIndex + 1) % portraitText.length);
    setCurrText(portraitText[currIndex]);

    // Small springy pop to acknowledge the click.
    if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      gsap.fromTo(
        ref.current,
        { scale: 0.9 },
        { scale: 1, duration: 0.6, ease: "back.out(3)", overwrite: true },
      );
    }
  };

  return (
    <button
      ref={ref}
      className="clicktext absolute -top-20 right-0 cursor-pointer rounded-full bg-ligthFaintWhite px-5 py-4 text-black"
      onClick={handleClick}
    >
      {currText}
    </button>
  );
};

export default ClickText;
