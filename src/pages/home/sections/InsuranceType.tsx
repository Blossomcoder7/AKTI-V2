import { motion, useAnimation } from "motion/react";
import Cards from "./Cards";
import { useCallback, useEffect, useState } from "react";
import { MdOutlineArrowRight } from "react-icons/md";
import PhoneCollectionForm from "./PhoneCollectionForm";
import corner from "../../../assets/images/banner-corner-white-border.png";
import useLayoutConfig from "../../../hooks/useLayoutConfig";
import clsx from "clsx";
import { FaCaretLeft } from "react-icons/fa";
const InsuranceType = () => {
  const [open, setOpen] = useState<boolean>(false);

  const { isRtl } = useLayoutConfig();
  const control = useAnimation();
  const handleOpen = () => {
    setOpen(true);
    control.start({
      width: window?.innerWidth > 600 ? 450 : 300,
      opacity: 1,
      padding: 36,
      transition: { duration: 0.15, ease: "easeIn" },
    });
  };

  const handleClose = useCallback(() => {
    control
      .start({
        width: 0,
        padding: 0,
        opacity: 0,
        transition: { duration: 0.05, ease: "easeOut" },
      })
      .then(() => setTimeout(() => setOpen(false), 50));
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
    <div className="relative w-full h-full flex items-center justify-center p-3.5">
      <div className="w-full h-auto flex flex-col justify-center items-center pt-6  lg:pt-8 text-white ">
        <h1 className="text-2xl lg:text-5xl font-bold text-center pb-5">
          Insurance <br /> Solutions We Provide
        </h1>
        <Cards />
        <div
          onClick={handleOpen}
          className={clsx(
            "absolute z-10 cursor-pointer  top-1/2 ",
            isRtl ? "-left-0 rotate-180" : "-right-0"
          )}
        >
          <div
            className={clsx(
              "absolute top-1/2 left-1/2 -translate-1/2",
              open && "opacity-0"
            )}
          >
            <FaCaretLeft className="text-white text-base" />
          </div>

          <div
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
            "w-full h-full fixed inset-0 z-10 cursor-pointer bg-white/5 backdrop-blur-[1px]",
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
      </div>
    </div>
  );
};

export default InsuranceType;
