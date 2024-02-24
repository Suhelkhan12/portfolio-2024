import { ButtonProps } from "@/types";

const PrimaryButton = ({ children }: ButtonProps) => {
  return (
    <button className=" primaryBtn rounded-lg px-8 py-4 text-[1.125rem] font-medium text-white transition-all hover:rounded-none">
      {children}
    </button>
  );
};

export default PrimaryButton;
