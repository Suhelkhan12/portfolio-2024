import Image from "next/image";

const HeaderBackground = () => {
  return (
    <div className="fixed left-[50%] top-[-100px] z-0 flex h-[35rem]  w-full translate-x-[-50%] items-center justify-center md:w-[64rem]">
      <Image src="topGradient.svg" alt="top-gradient" fill />
    </div>
  );
};

export default HeaderBackground;
