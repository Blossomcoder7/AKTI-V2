import clsx from "clsx";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import SlidingButton from "../Elements/buttons/SlidingButton";

const GetStartedButton = () => {
  const { t } = useTranslation("home");
  return (
    <>
      <div
        className={clsx("relative  group z-5   cursor-pointer")}
        onClick={() => {
          gsap.to(window, {
            scrollTo: { y: "#section2", offsetY: 0 },
            duration: 1.0,
            ease: "power2.out",
          });
        }}
      >
        <div className=" w-full h-full flex gap-10 rounded-2xl justify-center items-center bg-gradient-to-b px-7 py-3 group-hover:opacity-90 from-[#590B25] via-[#740832] to-[#941845] ">
          <SlidingButton className="leading-none">
            <span className="text-akti-white font-medium text-xl ">
              {t("banner.get-started")}
            </span>
          </SlidingButton>
          <button
          // className={clsx("absolute bottom-3 ", isRtl ? "left-3" : "right-3")}
          >
            <BsArrowRightCircleFill className="text-akti-white group-hover:text-akti-white group-hover:rotate-90 transition-all duration-300 ease-in font-medium text-2xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default GetStartedButton;
