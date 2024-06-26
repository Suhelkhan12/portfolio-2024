import React from "react";

const OpenToWork = () => {
  return (
    <div className=" hidden items-center gap-4 text-basicDarkGray sm:flex ">
      <div className=" size-3 rounded-full">
        <span className="relative flex size-3">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
        </span>
      </div>
      <div>
        <h2 className="text-xl">OPEN TO WORK</h2>
        <p className=" text-sm">Based in India</p>
      </div>
    </div>
  );
};

export default OpenToWork;
