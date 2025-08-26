import clsx from "clsx";
import { type HTMLAttributes } from "react";
import favicon from "/favicon.png";
const Favicon = ({
  className,
  ...rest
}: Omit<HTMLAttributes<HTMLDivElement>, "children">) => {
  return (
    <div
      className={clsx(
        "w-full h-full aspect-square flex items-center justify-center",
        className
      )}
      {...rest}
    >
      <img
        src={favicon}
        alt="favicon"
        className="object-center object-contain w-full h-full"
      />
    </div>
  );
};

export default Favicon;
