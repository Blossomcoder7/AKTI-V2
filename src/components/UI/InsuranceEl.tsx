import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";

export interface InsuranceElProps extends HTMLAttributes<HTMLDivElement> {
  image: string;
  heading: string;
  subHeading: string;
  buttonProps?: HTMLAttributes<HTMLButtonElement>;
}
const InsuranceEl = ({
  buttonProps = {},
  subHeading,
  heading,
  image,
  className,
  ...rest
}: InsuranceElProps) => {
  const { className: btnClasses, ...btnRest } = buttonProps;
  return (
    <div
      {...rest}
      className={clsx(
        "flex  items-center justify-center w-fit h-fit flex-col ",
        className
      )}
    >
      <div className="w-fit h-fit max-w-[clamp(150px,6vw,300px)]">
        <img
          src={image}
          alt={"image"}
          className="block object-contain  object-center"
        />
      </div>
      <div className="flex flex-col gap-1 items-center justify-between">
        <span className="text-akti-burgundy font-semibold text-3xl">
          {heading}
        </span>
        <span className="text-[#353535] font-thin text-sm max-w-xs px-2 text-pretty text-center">
          {subHeading}
        </span>
        <button
          {...btnRest}
          className={clsx(
            "flex items-center justify-center  text-akti-burgundy font-semibold text-base",
            btnClasses
          )}
        >
          View more <BsArrowRightCircleFill className="ml-1.5 inline-flex" />
        </button>
      </div>
    </div>
  );
};

export default InsuranceEl;
