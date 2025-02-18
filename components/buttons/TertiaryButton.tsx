import { ButtonProps } from "@/types";

const TertiaryButton = ({ children, classNames, onClick }: ButtonProps) => {
  return (
    <button
      className={`primaryBtnLight rounded-lg px-4 py-2 text-[1rem] font-normal text-white shadow-lg transition-all hover:text-basicLightGray ${classNames}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TertiaryButton;
