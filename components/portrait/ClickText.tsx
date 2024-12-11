"use client";
import { portraitText } from "@/data/data";
import { useState } from "react";

const ClickText = () => {
  const [currText, setCurrText] = useState("Click this text.");
  const [currIndex, setCurrIndex] = useState(0);

  const handleClick = () => {
    // Increment the index, looping back to 0 if it exceeds the array length
    setCurrIndex((prevIndex) => (prevIndex + 1) % portraitText.length);
    setCurrText(portraitText[currIndex]);
  };

  return (
    <button
      className="clicktext absolute -top-20 right-0 cursor-pointer rounded-full bg-ligthFaintWhite px-5 py-4 text-black"
      onClick={handleClick}
    >
      {currText}
    </button>
  );
};

export default ClickText;
