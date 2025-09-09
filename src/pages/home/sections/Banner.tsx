import { MdOutlineArrowRight } from "react-icons/md";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import InsuranceEl from "../../../components/UI/InsuranceEl";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import corner from "../../../assets/images/banner-corner.png";
import { motion, useAnimation } from "motion/react";
import PhoneCollectionForm from "./PhoneCollectionForm";
import useLayoutConfig from "../../../hooks/useLayoutConfig";
import SmallScreenBanner from "../../../components/UI/SmallScreenBanner";
import GetStartedButton from "../../../components/UI/GetStartedButton";
import LeftTopCorner from "../../../components/UI/LeftTopCorner";

gsap.registerPlugin(ScrollToPlugin);
const Banner = () => {
  const { isRtl } = useLayoutConfig();
  const { t } = useTranslation("home");
  const contentEl = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const control = useAnimation();
  const handleOpen = () => {
    setOpen(true);
    control.start({
      width: window?.innerWidth > 600 ? 450 : 300,
      opacity: 1,
      padding: 36,
      transition: { duration: 0.35, ease: "easeIn" },
    });
  };

  const handleClose = useCallback(() => {
    control
      .start({
        width: 0,
        padding: 0,
        opacity: 0,
        transition: { duration: 0.45, ease: "easeOut" },
      })
      .then(() => setTimeout(() => setOpen(false), 200));
  }, [control]);

  useEffect(() => {
    const handleScroll = () => {
      if (open) {
        handleClose();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open, handleClose]);

  return (
    <div className="flex w-full h-fit items-center justify-center">
      <div className="w-full flex flex-col md:flex-row py-4 md:py-0 items-center md:max-h-[900px] h-screen  md:justify-center justify-end gap-6 md:gap-0 relative bg-white  md:min-h-[700px] rounded-[20px]">
        {/* phone number field  */}
        <LeftTopCorner />

        <div
          className={clsx(
            "absolute z-10 cursor-pointer  top-1/2 -translate-y-1/2",
            isRtl ? "-left-1 rotate-180" : "-right-1"
          )}
        >
          <div
            onClick={handleOpen}
            className={clsx(
              "flex items-center justify-center w-6 h-28",
              open && "opacity-0"
            )}
          >
            <img
              src={corner}
              alt="corner"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <motion.div
          className={clsx(
            "w-full h-full absolute inset-0 z-10 cursor-pointer bg-white/5 backdrop-blur-[1px]",
            open ? "flex" : "hidden"
          )}
          onClick={handleClose}
        >
          <>
            <motion.div
              initial={{ width: 0 }}
              animate={control}
              onClick={(e) => e.stopPropagation()}
              className={clsx(
                "absolute z-5  h-64 bg-akti-burgundy/40 top-1/2 -translate-y-1/2  backdrop-blur-sm",
                isRtl ? "rounded-r-2xl left-0" : "rounded-l-2xl right-0"
              )}
            >
              <button
                onClick={handleClose}
                className={clsx(
                  "absolute top-1/2 border border-transparent hover:border-white rounded-full p-1 -translate-y-1/2 z-6",
                  isRtl ? "right-0 rotate-180" : "left-0 "
                )}
              >
                <MdOutlineArrowRight className="text-2xl font-semibold text-akti-white" />
              </button>
              <PhoneCollectionForm
                next={(data: { phone: string }) => {
                  console.log("Phone number submitted on banner", data.phone);
                  handleClose();
                }}
              />
            </motion.div>
          </>
        </motion.div>

        {/* left top icon  */}

        {/* background text  */}
        <div className="hidden absolute w-full h-full inset-0 z-2 lg:flex flex-col gap-4 items-center justify-center">
          <span className="text-akti-burgundy-light -translate-y-10  text-center font-bold text-[clamp(50px,4vw,80px)] leading-none">
            <pre>{t("banner.bg-text")}</pre>
          </span>
        </div>
        <div className="hidden  absolute w-fit  h-fit  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 lg:flex flex-col gap-4 items-center justify-center">
          <span className="text-akti-burgundy-light text-center opacity-0 font-bold text-[clamp(50px,4vw,80px)] leading-none">
            <pre>{t("banner.bg-text")}</pre>
          </span>
          <GetStartedButton />
        </div>

        {/* main content  */}
        <div
          ref={contentEl}
          className="hidden w-full h-full pb-10 pt-6 px-10 relative max-w-[1300px] mx-auto inset-0 z-3 min-h-fit max-h-max lg:flex flex-col"
        >
          <div className="w-full h-1/3 flex justify-around items-end  ">
            <InsuranceEl
              className={clsx(
                "translate-y-10",
                isRtl ? "-translate-x-6" : "translate-x-6"
              )}
              heading={t("banner.insurances.motor.heading")}
              subHeading={t("banner.insurances.motor.subHeading")}
              image="/images/insurances/motor.png"
              delay={0.5}
            />
            <InsuranceEl
              className={clsx(
                "translate-y-1/4 ",
                isRtl ? "translate-x-1/12" : "-translate-x-1/12"
              )}
              heading={t("banner.insurances.marine.heading")}
              subHeading={t("banner.insurances.marine.subHeading")}
              image="/images/insurances/marine.png"
              delay={0.6}
            />
          </div>
          <div
            dir="ltr"
            className="w-full h-1/3 flex items-center justify-start"
          >
            <InsuranceEl
              className="translate-y-1/3 lg:translate-x-1/12 -translate-x-1/6"
              heading={t("banner.insurances.medical.heading")}
              subHeading={t("banner.insurances.medical.subHeading")}
              image="/images/insurances/medical.png"
              delay={0.9}
            />
          </div>
          <div
            dir="ltr"
            className="w-full h-1/3 flex items-center justify-center"
          >
            <InsuranceEl
              className="translate-x-1/3 lg:translate-x-1/2 translate-y-2"
              heading={t("banner.insurances.travel.heading")}
              subHeading={t("banner.insurances.travel.subHeading")}
              image="/images/insurances/travel.png"
              delay={0.8}
            />
            <InsuranceEl
              className={clsx(
                "translate-x-1/4 lg:translate-x-8/12 ",
                isRtl ? "-translate-y-1/2" : "-translate-y-1/4"
              )}
              heading={t("banner.insurances.personal.heading")}
              subHeading={t("banner.insurances.personal.subHeading")}
              image="/images/insurances/personal.png"
              delay={0.7}
            />
          </div>
        </div>
        <div className=" lg:hidden flex ">
          <SmallScreenBanner />
        </div>
        {/* left bottom button  */}
      </div>
    </div>
  );
};

export default Banner;
