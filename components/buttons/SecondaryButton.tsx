import { ButtonProps } from "@/types";

const SecondaryButton = ({ children }: ButtonProps) => {
  return (
    <button className="rounded-full border border-basicMediumGray bg-basicLightGray px-8 py-4 text-[1.125rem] font-medium text-basicOnyx transition-all hover:bg-white ">
      {children}
    </button>
  );
};

export default SecondaryButton;
