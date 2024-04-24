import { ButtonProps } from "@/types";

const SecondaryButton = ({ children }: ButtonProps) => {
  return (
    <button className="rounded-full border border-ligthFaintWhite bg-ligthFaintWhite px-8 py-4 text-[1.125rem] font-medium text-basicOnyx transition-all hover:border-ligthFaintWhite/80 hover:bg-ligthFaintWhite/80 ">
      {children}
    </button>
  );
};

export default SecondaryButton;
