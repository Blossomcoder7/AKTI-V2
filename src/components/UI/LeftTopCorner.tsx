import clsx from "clsx";
import useLayoutConfig from "../../hooks/useLayoutConfig";
import FullLogo from "./FullLogo";
import { useNavigate } from "react-router";

const LeftTopCorner = () => {
  const { isRtl } = useLayoutConfig();
  const navigate = useNavigate();
  return (
    <>
      <div
        className={clsx(
          " absolute top-[-1px] max-w-fit w-fit h-fit z-10 ",
          isRtl ? "right-[-1px]" : "left-[-1px]"
        )}
      >
        <div
          className={clsx(
            "w-fit h-fit p-3  px-3.5  bg-akti-burgundy",
            isRtl ? "rounded-bl-[20px]" : "rounded-br-[20px]"
          )}
        >
          <FullLogo
            onClick={() => {
              navigate("/");
            }}
            className=""
            style={{ height: "60px", width: "auto" }}
          ></FullLogo>
          <div
            className={clsx(
              "absolute  w-[20px] h-[20px] z-10 pointer-events-none",
              isRtl ? "right-full top-0 rotate-90" : "left-full rotate-0 top-0"
            )}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block rotate-180"
            >
              <path
                d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
                fill="#590b25"
              />
            </svg>
          </div>
          <div
            className={clsx(
              "absolute  w-[20px] h-[20px] z-10 pointer-events-none",
              isRtl ? "right-0 rotate-90 top-full" : "left-0 rotate-0 top-full"
            )}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block rotate-180"
            >
              <path
                d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
                fill="#590b25"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftTopCorner;
