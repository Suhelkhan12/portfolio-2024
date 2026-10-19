const FooterBg = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-[-35%] left-1/2 z-0 flex h-[35rem] w-[1200px] -translate-x-1/2 items-center justify-center opacity-50 transition-opacity duration-500 dark:opacity-100 sm:bottom-[-20%] md:bottom-[-40%]"
    >
      <div aria-hidden="true" className="relative">
        <div
          aria-hidden="true"
          className="header-bg-elipse-1 absolute left-0 top-0"
        ></div>
        <div
          aria-hidden="true"
          className="header-bg-elipse-2 absolute left-0 top-0 -translate-x-1/2 "
        ></div>
        <div
          aria-hidden="true"
          className="header-bg-elipse-3 absolute right-0 top-0"
        ></div>
      </div>
    </div>
  );
};

export default FooterBg;
