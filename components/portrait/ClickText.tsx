"use client";
import { portraitText } from "@/data/data";
import { useState } from "react";

const ClickText = () => {
  const [currText, setCurrText] = useState("Click this text.");
  const handleClick = () => {};
  return (
    <div className=" clicktext absolute -top-20 left-[50%] translate-x-[-50%] cursor-pointer rounded-full bg-basicLightGray px-5 py-4 text-black">
      <button onClick={handleClick}>{currText}</button>
    </div>
  );
};

export default ClickText;
