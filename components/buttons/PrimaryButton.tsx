import { ButtonProps } from "@/types";

// Rendered as a span: it's always used as the visual body of a link.
const PrimaryButton = ({ children, classNames }: ButtonProps) => {
  return (
    <span
      className={`primaryBtnLight inline-flex items-center justify-center rounded-full px-8 py-4 text-[1.125rem] font-medium text-white shadow-lg transition-[color,transform] duration-200 hover:text-basicLightGray active:scale-[0.97] ${classNames ?? ""}`}
    >
      {children}
    </span>
  );
};

export default PrimaryButton;
