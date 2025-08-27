import XSpacing from "../../../components/wrappers/XSpacing";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { motion, useMotionValue, useSpring } from "motion/react";
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
        // ref={pinRefEl}
        className="w-full h-screen min-h-screen py-3.5  flex relative items-center justify-center"
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
              className="w-full h-full object-center object-cover"
            >
              <source
                src="https://res.cloudinary.com/dfdgjx0ri/video/upload/v1756268250/15439663-uhd_3836_2160_30fps_ra0w53.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full h-full flex items-center justify-center relative z-3">
            <XSpacing
              style={{ padding: "40px" }}
              className="flex  justify-start items-end flex-row h-full  py-[15px] md:py-[20px] lg:py-[40px] xl:py-[60px] "
            >
              <div ref={fadingEl} className="flex flex-col h-fit w-fit  z-3">
                <p className="text-white text-center sm:text-start text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2">
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
