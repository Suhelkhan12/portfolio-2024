const HeaderBackground = () => {
  return (
    <div className="absolute left-[50%] top-[-15%] z-0 flex h-[35rem] w-[1200px] translate-x-[-50%]  items-center justify-center sm:top-[-30%] md:top-[-10%]">
      <div className="relative">
        <div className="header-bg-elipse-1 absolute left-0 top-0"></div>
        <div className="header-bg-elipse-2 absolute left-0 top-0 translate-x-[-50%] "></div>
        <div className="header-bg-elipse-3 absolute right-0 top-0"></div>
      </div>
    </div>
  );
};

export default HeaderBackground;
