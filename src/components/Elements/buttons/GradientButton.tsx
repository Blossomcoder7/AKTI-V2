import { type HTMLAttributes } from "react";
import clsx from "clsx";
interface GradientButtonProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
}
const GradientButton = ({
  children,
  className,
  ...rest
}: GradientButtonProps) => {
  return (
    <div
      className={clsx(
        "inline-flex cursor-pointer items-center justify-center rounded-[25px] text-akti-burgundy min-w-[70px] min-h-[45px] bg-gradient-to-r from-akti-white to-[#d9d9d9] border border-[#e0e0e0] transition-all",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default GradientButton;
