import { ButtonProps } from "@/types";

const SecondaryButton = ({ children }: ButtonProps) => {
  return (
    <button className="secondaryButton rounded-lg px-8 py-4 text-[1.125rem] font-medium text-basicDarkGray transition hover:text-white">
      {children}
    </button>
  );
};

export default SecondaryButton;
