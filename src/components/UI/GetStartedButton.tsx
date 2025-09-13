import clsx from "clsx";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import SlidingButton from "../Elements/buttons/SlidingButton";

gsap.registerPlugin(ScrollToPlugin);

const GetStartedButton = () => {
  const { t } = useTranslation("home");

  const handleScroll = () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: "#section2", offsetY: 0 },
      ease: "power2.out",
    });
  };

 

  return (
    <div
      className={clsx("relative group z-5 cursor-pointer")}
      onClick={handleScroll}
    >
      <div className="w-full h-full flex gap-10 rounded-2xl justify-center items-center bg-gradient-to-b px-7 py-3 group-hover:opacity-90 from-[#590B25] via-[#740832] to-[#941845] ">
        <SlidingButton className="leading-none">
          <span className="text-akti-white font-medium text-lg ">
            {t("banner.get-started")}
          </span>
        </SlidingButton>
        <button>
          <BsArrowRightCircleFill className="text-akti-white group-hover:text-akti-white group-hover:rotate-90 transition-all duration-300 ease-in font-medium text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default GetStartedButton;
