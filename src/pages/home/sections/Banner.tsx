import { MdOutlineArrowRight } from "react-icons/md";
import { useNavigate } from "react-router";
import FullLogo from "../../../components/UI/FullLogo";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import InsuranceEl from "../../../components/UI/InsuranceEl";
import { useCallback, useEffect, useRef, useState } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import corner from "../../../assets/images/banner-corner.png";
import { motion, useAnimation } from "motion/react";
import PhoneCollectionForm from "./PhoneCollectionForm";
import useLayoutConfig from "../../../hooks/useLayoutConfig";

gsap.registerPlugin(ScrollToPlugin);
const Banner = () => {
  const navigate = useNavigate();
  const { isRtl } = useLayoutConfig();
  const { t } = useTranslation("home");
  const contentEl = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const control = useAnimation();
  const handleOpen = () => {
    setOpen(true);
    control.start({
      width: 450,
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
    <div className="flex w-full h-fit items-center justify-center ">
      <div className="w-full flex items-center  h-screen  justify-center relative bg-white  min-h-screen rounded-[20px]">
        {/* phone number field  */}

        <div
          className={clsx(
            "absolute z-4 cursor-pointer  top-1/2 -translate-y-1/2",
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
            "w-full h-full absolute inset-0 z-4 bg-white/5 backdrop-blur-[1px]",
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
        <div
          className={clsx(
            "absolute top-[-1px] w-fit h-fit ",
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
                isRtl
                  ? "right-full top-0 rotate-90"
                  : "left-full rotate-0 top-0"
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
                isRtl
                  ? "right-0 rotate-90 top-full"
                  : "left-0 rotate-0 top-full"
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
        {/* background text  */}
        <div className="absolute w-full h-full inset-0 z-1 flex items-center justify-center">
          <span className="text-akti-burgundy-light font-bold text-[clamp(50px,4vw,80px)] leading-none">
            <pre>{t("banner.bg-text")}</pre>
          </span>
        </div>
        {/* main content  */}
        <div
          ref={contentEl}
          className="w-full h-full pb-10 px-10 relative max-w-[1300px] mx-auto inset-0 z-3 min-h-fit max-h-max flex flex-col"
        >
          <div className="w-full h-1/3 flex justify-around items-end  ">
            <InsuranceEl
              className={clsx(
                "translate-y-8 ",
                isRtl ? "-translate-x-6" : "translate-x-6"
              )}
              heading={t("banner.insurances.motor.heading")}
              subHeading={t("banner.insurances.motor.subHeading")}
              image="/images/insurances/motor.png"
            />
            <InsuranceEl
              className={clsx(
                "translate-y-1/4 ",
                isRtl ? "translate-x-1/5" : "-translate-x-1/5"
              )}
              heading={t("banner.insurances.marine.heading")}
              subHeading={t("banner.insurances.marine.subHeading")}
              image="/images/insurances/marine.png"
            />
          </div>
          <div
            dir="ltr"
            className="w-full h-1/3 flex items-center justify-start"
          >
            <InsuranceEl
              className="translate-y-1/3 translate-x-1/12"
              heading={t("banner.insurances.medical.heading")}
              subHeading={t("banner.insurances.medical.subHeading")}
              image="/images/insurances/medical.png"
            />
          </div>
          <div
            dir="ltr"
            className="w-full h-1/3 flex items-center justify-center"
          >
            <InsuranceEl
              className=" translate-x-1/2 translate-y-2"
              heading={t("banner.insurances.travel.heading")}
              subHeading={t("banner.insurances.travel.subHeading")}
              image="/images/insurances/travel.png"
            />
            <InsuranceEl
              className=" translate-x-8/12 -translate-y-1/4"
              heading={t("banner.insurances.personal.heading")}
              subHeading={t("banner.insurances.personal.subHeading")}
              image="/images/insurances/personal.png"
            />
          </div>
        </div>
        {/* left bottom button  */}
        <div
          className={clsx(
            "absolute group z-5  bottom-3.5 cursor-pointer",
            isRtl ? "right-3.5" : "left-3.5"
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
              className={clsx(
                "absolute bottom-3 ",
                isRtl ? "left-3" : "right-3"
              )}
            >
              <BsArrowRightCircleFill className="text-akti-white group-hover:text-akti-white group-hover:rotate-90 transition-all duration-300 ease-in font-medium text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
