import clsx from "clsx";
import type FaqItemType from "../../types/FaqItemType";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useRef, useState } from "react";
import useFollowMouseLocation from "../../hooks/useFollowMouseLocation";
import useLayoutConfig from "../../hooks/useLayoutConfig";

const AnimatedFaqEl = ({ faq }: { faq: FaqItemType }) => {
  const pathRef = useRef<SVGPathElement>(null);
  const motionAngle = useMotionValue(0);
  const springedAngle = useSpring(motionAngle, {
    stiffness: 140,
    damping: 25,
    mass: 1,
  });

  const [show, setShow] = useState(false);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!pathRef.current) return;
    const path = pathRef.current;
    const length = path.getTotalLength();
    const rect = path.getBoundingClientRect();
    const percent = Math.min(
      Math.max((e.clientX - rect.left) / rect.width, 0),
      1
    );
    const point = path.getPointAtLength(length * percent);
    const delta = 0.1;
    const nextPoint = path.getPointAtLength(
      Math.min(length, length * percent + delta)
    );
    let angle =
      Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) *
      (180 / Math.PI);
    const minAngle = -10;
    const maxAngle = 10;
    angle = Math.max(minAngle, Math.min(maxAngle, angle));
    motionAngle.set(angle);
  };

  const containerEl = useRef<HTMLDivElement | null>(null);
  const elRef = useRef<HTMLDivElement | null>(null);
  const { isRtl } = useLayoutConfig();
  const { springX } = useFollowMouseLocation({
    container: containerEl,
    ref: elRef,
    dependencies: [show],
  });

  return (
    <>
      <div
        onMouseEnter={() => {
          setShow(true);
        }}
        onMouseLeave={() => {
          setShow(false);
        }}
        className={clsx(
          `flex relative flex-col sm:flex-row items-center gap-4 justify-between  bg-white p-6 not-last:border-b border-[#282828]/20}`
        )}
      >
        <div className="absolute pointer-events-none w-full h-full inset-0 p-4">
          <div
            ref={containerEl}
            onMouseMove={handleMouseMove}
            className={clsx(
              "max-w-7/12 mr-4 pointer-events-auto  w-full h-full  relative",
              isRtl ? "place-self-end" : "place-self-end"
            )}
          >
            <AnimatePresence mode="wait">
              {show ? (
                <>
                  <motion.div
                    ref={elRef}
                    className={clsx(
                      "absolute z-10 top-2/3 pointer-events-none -translate-y-2/3  ",
                      isRtl ? "left-0" : ""
                    )}
                    style={{
                      x: springX,
                      rotate: springedAngle,
                      pointerEvents: "none",
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <img
                      src={faq.image}
                      alt="moving"
                      className="w-52 pointer-events-none rounded-3xl object-contain"
                    />
                  </motion.div>
                </>
              ) : null}
            </AnimatePresence>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                ref={pathRef}
                d="M 0 80 C 33 33 65 33 100 80"
                stroke="none"
                strokeWidth="1"
                fill="transparent"
                className="translate-y-1/5"
                id="trackPath"
              />
            </svg>
          </div>
        </div>

        <div className="flex items-start gap-6 flex-1 sm:items-center">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#740832] text-white font-bold text-lg">
            {faq.number}
          </div>

          <div className="flex-1 items-center grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            <div className="flex-1">
              <h3 className="text-xl font-semibold  text-[#740832] leading-relaxed">
                {faq.question}
              </h3>
            </div>

            <div className="flex-1 items-center">
              <p className="text-[#282828] text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 items-center  ml-6 w-48 h-24 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={faq.image}
            alt="FAQ image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default AnimatedFaqEl;
