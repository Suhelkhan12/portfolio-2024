import { ButtonProps } from "@/types";

// Rendered as a span: it's always used as the visual body of a link.
const SecondaryButton = ({ children }: ButtonProps) => {
  return (
    <span className="inline-flex items-center justify-center rounded-full border border-ligthFaintWhite bg-ligthFaintWhite px-8 py-4 text-[1.125rem] font-medium text-basicOnyx transition-[color,background-color,border-color,transform] duration-200 hover:border-ligthFaintWhite/80 hover:bg-ligthFaintWhite/80 active:scale-[0.97]">
      {children}
    </span>
  );
};

export default SecondaryButton;
