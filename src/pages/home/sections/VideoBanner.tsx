import XSpacing from "../../../components/wrappers/XSpacing";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { motion, useMotionValue, useSpring } from "motion/react";
import SlidingButton from "../../../components/Elements/buttons/SlidingButton";
gsap.registerPlugin(ScrollTrigger);
const VideoBanner = () => {
  const { t } = useTranslation("home");
  const scrollerRefEl = useRef<HTMLDivElement>(null);
  const pinRefEl = useRef<HTMLDivElement>(null);
  const fadingEl = useRef<HTMLDivElement>(null);
  const [scrollYProgress, setScrollYProgress] = useState<number>(0);
  const motionProgress = useMotionValue(0);
  const springX = useSpring(motionProgress, {
    damping: 25,
    stiffness: 120,
    mass: 1,
  });
  useGSAP(
    () => {
      if (!scrollerRefEl.current || !pinRefEl.current || !fadingEl.current) {
        return;
      } else {
        ScrollTrigger.create({
          trigger: scrollerRefEl.current,
          pin: pinRefEl.current,
          // markers: true,
          // scroller,
          start: "top top",
          end: "bottom top",
          // pinSpacing: false,
          onUpdate: (self) => {
            const progress = self.progress;
            motionProgress.set(progress);
            setScrollYProgress(progress);
            if (fadingEl.current) {
              fadingEl.current.style.opacity = String(1 - progress);
            }
          },
        });
      }
    },
    {
      dependencies: [scrollerRefEl, pinRefEl, fadingEl],
    }
  );

  return (
    <>
      <div
        ref={pinRefEl}
        id="section2"
        className="w-full  h-screen min-h-screen pb-3.5 py-3.5  flex flex-col md:flex-row relative items-center justify-center"
      >
        <div
          ref={scrollerRefEl}
          className="w-full h-screen absolute flex items-end justify-end z-2"
        ></div>
        <div className="w-full h-full relative overflow-hidden flex justify-center rounded-2xl items-center bg-white text-white">
          <div className="w-full h-full absolute inset-0  z-1">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-center object-cover bg-black text-white"
            >
              <source
                src="https://res.cloudinary.com/dfdgjx0ri/video/upload/v1756268250/15439663-uhd_3836_2160_30fps_ra0w53.mp4"
                type="video/mp4"
              />
              <source
                src="https://res.cloudinary.com/dfdgjx0ri/video/upload/v1753703638/samples/elephants.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full h-full flex items-center justify-center relative z-3">
            <XSpacing
              style={{ padding: "40px" }}
              className="flex  flex-col justify-end items-center  h-full  py-[15px] md:py-[20px] lg:py-[40px] xl:py-[60px] "
            >
              <div
                ref={fadingEl}
                className="flex flex-col h-fit w-full justify-center items-center  z-3"
              >
                <p className=" text-white text-center sm:text-start text-base sm:text-lg md:text-xl mb-2">
                  {t("video-banner.welcome")}
                </p>
                <h1
                  className="
            text-white  text-center sm:text-start
            text-3xl  md:text-4xl lg:text-6xl xl:text-[4rem] 
            font-bold 
            leading-snug sm:leading-snug md:leading-tight lg:leading-tight
          "
                >
                  <pre> {t("video-banner.subHeading")}</pre>
                </h1>
              </div>
              <div className="w-full h-fit py-4 flex items-center justify-center">
                <div className="flex gap-3 md:gap-10 pt-6">
                  <SlidingButton className=" bg-gradient-to-tl py-0.5 px-2 from-[#941845] via-akti-burgundy-light to-akti-burgundy  leading-none  flex items-center justify-center rounded-lg overflow-hidden">
                    <div className=" px-6 py-3   text-white cursor-pointer hover:bg-akti-darkRed transition-colors uppercase">
                      {t("video-banner.buttons.policy")}
                    </div>
                  </SlidingButton>
                  <SlidingButton className=" bg-gradient-to-tl py-0.5 px-2 from-[#941845] via-akti-burgundy-light to-akti-burgundy  leading-none  flex items-center justify-center rounded-lg overflow-hidden">
                    <div className=" px-6 py-3   text-white cursor-pointer hover:bg-akti-darkRed transition-colors uppercase">
                      {t("video-banner.buttons.claim")}
                    </div>
                  </SlidingButton>
                </div>
              </div>
            </XSpacing>
          </div>
          {/* <div className="w-full h-2/3 absolute z-2 bottom-0 left-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div> */}
        </div>
      </div>
      {scrollYProgress <= 0.99 && (
        <div className="fixed left-0 sm:block bottom-0 z-20 w-full h-fit ">
          <motion.div
            style={{ scaleX: springX }}
            className="h-1 bg-white z-20  origin-left transform"
          />
        </div>
      )}
      <div id="next" className="h-1 w-full"></div>
    </>
  );
};

export default VideoBanner;
