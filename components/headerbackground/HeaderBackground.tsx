const HeaderBackground = () => {
  return (
    <div
      aria-hidden="true"
      className={`absolute left-1/2 top-[-5%]  -z-10 flex h-[35rem] w-[1200px]  -translate-x-1/2 items-center justify-center `}
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

export default HeaderBackground;
