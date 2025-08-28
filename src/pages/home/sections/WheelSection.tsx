import React, { useRef, useState, useLayoutEffect } from "react";
import background from "../../../assets/images/wheel-section-bg.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gear from "../../../assets/icons/gear.png";
import shield from "../../../assets/icons/shield.png";
import { SliderList } from "../../../options/SliderList";
import { AnimatePresence, motion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);
const angle = 270;
const WheelSection = () => {
  const pinEl = useRef<HTMLDivElement | null>(null);
  const circleEl = useRef<HTMLDivElement | null>(null);
  const handsGroupRef = useRef<HTMLDivElement | null>(null);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [faviconRadius, setFaviconRadius] = useState(0);

  useLayoutEffect(() => {
    if (!circleEl.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { height } = entry.contentRect;
        setFaviconRadius(height / 2);
      }
    });
    observer.observe(circleEl.current);
    return () => observer.disconnect();
  }, []);

  const totalHands = SliderList.length;
  const step = angle / (totalHands - 1);

  useGSAP(
    () => {
      if (!pinEl.current || !handsGroupRef.current) return;

      let currentItemIndex = 0;

      const st = ScrollTrigger.create({
        trigger: pinEl.current,
        start: "top top",
        end: "+=300%",
        markers: true,
        pin: pinEl.current,
        scrub: false,
        snap: {
          snapTo: (progress) => {
            // Calculate which item we're closest to
            const rawIndex = progress * (totalHands - 1);
            const nearestIndex = Math.round(rawIndex);
            currentItemIndex = Math.max(
              0,
              Math.min(nearestIndex, totalHands - 1)
            );
            return currentItemIndex / (totalHands - 1);
          },
          duration: 0.4,
          delay: 0.02,
          ease: "power2.out",
          directional: false, // Prevents going back to previous
        },
        onUpdate: (self) => {
          // Only animate rotation during the snap, not continuously
          const targetIndex = Math.round(self.progress * (totalHands - 1));
          const clampedIndex = Math.max(
            0,
            Math.min(targetIndex, totalHands - 1)
          );
          const exactRotation = -clampedIndex * step;

          // Single, clean rotation animation
          gsap.to(handsGroupRef.current, {
            rotation: exactRotation,
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto",
          });
          const newActiveId = SliderList[clampedIndex]?.id || null;
          if (activeId !== newActiveId) {
            setActiveId(newActiveId);
          }
        },
        onSnapComplete: (self) => {
          const finalIndex = Math.round(self.progress * (totalHands - 1));
          const clampedIndex = Math.max(
            0,
            Math.min(finalIndex, totalHands - 1)
          );
          const exactRotation = -clampedIndex * step;
          gsap.set(handsGroupRef.current, {
            rotation: exactRotation,
          });
        },
      });

      return () => st.kill();
    },
    { dependencies: [pinEl, handsGroupRef, totalHands, step] }
  );

  return (
    <div className="w-full h-auto py-3.5 flex items-center justify-center">
      <div
        ref={pinEl}
        className="relative w-full h-auto min-h-fit rounded-[20px] overflow-hidden"
      >
        {/* Background */}
        <div className="absolute w-full h-full inset-0 z-0">
          <img
            src={background}
            alt="bg"
            className="object-center object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="h-screen min-h-[600px] relative z-10 w-full flex items-center justify-center">
          {/* Title */}
          <div className="absolute top-[44px] left-[44px]">
            <span className="text-[clamp(40px,5vw,60px)] capitalize leading-none font-semibold text-akti-burgundy">
              <pre>{"Why \nchoose us"}</pre>
            </span>
          </div>

          {/* Wheel area */}
          <div className="absolute left-0 w-full h-full top-6/12 -translate-y-1">
            <div className="w-full h-full relative flex items-center justify-center">
              <div className="absolute bottom-full mb-4 max-w-[260px] left-1/2 -translate-x-1/2"></div>
              {/* Center favicon */}
              <div
                ref={circleEl}
                className="absolute z-30 w-full h-full flex items-center justify-center"
              >
                <img
                  src="/full-favicon.png"
                  alt="favicon"
                  className="object-contain w-full h-full rounded-full"
                />
              </div>
              {/* Hands */}
              <div
                ref={handsGroupRef}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              >
                {SliderList.map((item, i) => {
                  const baseAngle = i * step;
                  const isActive = activeId === item.id;
                  const gap = isActive ? 155 : 155;
                  const length = faviconRadius + gap;
                  return (
                    <HandItem
                      key={item.id}
                      baseAngle={baseAngle}
                      length={length}
                      icon={i % 2 === 0 ? shield : gear}
                      label={item.id}
                      heading={item.title}
                      subHeading={item.des}
                      isActive={isActive}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WheelSection;

/* ---- HandItem ---- */
type HandItemProps = {
  baseAngle: number;
  length?: number;
  icon?: string;
  label?: string | number;
  isActive?: boolean;
  heading?: string;
  subHeading?: string;
};

const HandItem: React.FC<HandItemProps> = ({
  baseAngle,
  length = 300,
  icon,
  label,
  isActive,
  heading,
  subHeading,
}) => {
  return (
    <div
      className="absolute"
      style={{
        left: "50%",
        top: "50%",
        transform: `translate(-50%,-50%) rotate(${baseAngle}deg) translateY(-${length}px)`,
        transformOrigin: "center center",
      }}
    >
      <div className="flex flex-col items-center justify-center space-y-2">
        {icon && (
          <img
            src={icon}
            alt="icon"
            className="min-w-12 w-12 min-h-12 h-12 object-contain"
          />
        )}
        <span className="text-akti-burgundy text-lg font-semibold">
          {label}
        </span>
        <div className="w-3 h-3 rounded-full bg-akti-burgundy" />
      </div>
      <DetailsCard
        heading={heading}
        subHeading={subHeading}
        isActive={isActive}
      />
    </div>
  );
};

const DetailsCard = ({
  heading,
  subHeading,
  isActive,
}: {
  heading?: string;
  subHeading?: string;
  isActive?: boolean;
}) => {
  if (isActive)
    return (
      <AnimatePresence>
        <motion.div className="flex flex-col min-w-[200px] text-center justify-center items-center gap-2 translate-y-2">
          <span className="text-akti-burgundy leading-none font-medium text-[clamp(16px,3vw,24px)] whitespace-nowrap">
            {heading}
          </span>
          <span className="text-akti-grey font-medium text-xs">
            {subHeading}
          </span>
        </motion.div>
      </AnimatePresence>
    );
  else return null;
};
