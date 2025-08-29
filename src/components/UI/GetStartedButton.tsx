import clsx from "clsx";
import { BsArrowRightCircleFill } from "react-icons/bs";
import useLayoutConfig from "../../hooks/useLayoutConfig";
import { useTranslation } from "react-i18next";
import gsap from "gsap";

const GetStartedButton = () => {
  const { isRtl } = useLayoutConfig();
  const { t } = useTranslation("home");
  return (
    <>
      <div
        className={clsx(
          "relative md:absolute group z-5  bottom-3.5 mb-3.5 cursor-pointer",
          isRtl ? "md:right-3.5" : "md:left-3.5"
        )}
        onClick={() => {
          gsap.to(window, {
            scrollTo: { y: window.scrollY + 400, offsetY: 100 },
            duration: 0.51,
            ease: "linear",
          });
        }}
      >
        <div className=" w-xs h-18 bg-gradient-to-b p-3 group-hover:opacity-90 from-[#590B25] via-[#740832] to-[#941845] rounded-2xl">
          <span className="text-akti-white font-medium text-xl ">
            {t("banner.get-started")}
          </span>
          <button
            className={clsx("absolute bottom-3 ", isRtl ? "left-3" : "right-3")}
          >
            <BsArrowRightCircleFill className="text-akti-white group-hover:text-akti-white group-hover:rotate-90 transition-all duration-300 ease-in font-medium text-3xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default GetStartedButton;
