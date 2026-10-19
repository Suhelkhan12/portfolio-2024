import { ButtonProps } from "@/types";

// Rendered as a span: it's always used as the visual body of a link.
// Inverts against the page: dark on the light theme, light on the dark one.
const SecondaryButton = ({ children }: ButtonProps) => {
  return (
    <span className="inline-flex items-center justify-center rounded-full border border-fg bg-fg px-8 py-4 text-[1.125rem] font-medium text-page transition-[color,background-color,border-color,transform] duration-200 hover:border-fg/80 hover:bg-fg/80 active:scale-[0.97]">
      {children}
    </span>
  );
};

export default SecondaryButton;
