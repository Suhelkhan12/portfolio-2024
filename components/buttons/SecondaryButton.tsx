import { ButtonProps } from "@/types";

const SecondaryButton = ({ children }: ButtonProps) => {
  return (
    <button className=" rounded-lg bg-ligthFaintWhite px-8 py-4 text-[1.125rem] font-medium text-basicOnyx transition-all hover:rounded-none">
      {children}
    </button>
  );
};

export default SecondaryButton;
