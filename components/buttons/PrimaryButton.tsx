import { ButtonProps } from "@/types";

const PrimaryButton = ({ children }: ButtonProps) => {
  return (
    <button className=" primaryBtnLight rounded-full px-8 py-4 text-[1.125rem] font-medium text-white shadow-lg transition-all ">
      {children}
    </button>
  );
};

export default PrimaryButton;
