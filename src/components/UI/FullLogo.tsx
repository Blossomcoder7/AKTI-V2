import clsx from "clsx";
import { type HTMLAttributes } from "react";
import fullLogo from "../../assets/images/full-logo-white.png";

const FullLogo = ({
  className,
  ...rest
}: Omit<HTMLAttributes<HTMLDivElement>, "children">) => {
  return (
    <div
      {...rest}
      className={clsx(
        "flex items-center cursor-pointer justify-center w-[200px] h-[85px]",
        className
      )}
    >
      <img
        src={fullLogo}
        alt="logo"
        className="w-full h-full object-center object-contain"
      />
    </div>
  );
};

export default FullLogo;
