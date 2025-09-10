import React, {
  useRef,
  useState,
  useLayoutEffect,
  useEffect,
  useMemo,
} from "react";
import background from "../../../assets/images/wheel-section-bg.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gear from "../../../assets/icons/gear.png";
import shield from "../../../assets/icons/shield.png";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import useLayoutConfig from "../../../hooks/useLayoutConfig";
import AnimatedWheelWrapper from "../../../components/animated/AnimatedWheelWrapper";
import useScreenSize from "../../../hooks/useScreenSize";

export interface SliderListItemType {
  heading: string;
  subHeading: string;
  id: number;
}

gsap.registerPlugin(ScrollTrigger);
const angle = 270;

const WheelSection = () => {
  const { isTab, isMobile } = useScreenSize();
  const isSmallScreen = isMobile || isTab;
  const { t } = useTranslation("home");
  const SliderList: SliderListItemType[] = useMemo(
    () => [
      {
        id: 1,
        heading: t("wheel-section.slides.1.heading"),
        subHeading: t("wheel-section.slides.1.subHeading"),
      },
      {
        id: 2,
        heading: t("wheel-section.slides.2.heading"),
        subHeading: t("wheel-section.slides.2.subHeading"),
      },
      {
        id: 3,
        heading: t("wheel-section.slides.3.heading"),
        subHeading: t("wheel-section.slides.3.subHeading"),
      },
      {
        id: 4,
        heading: t("wheel-section.slides.4.heading"),
        subHeading: t("wheel-section.slides.4.subHeading"),
      },
      {
        id: 5,
        heading: t("wheel-section.slides.5.heading"),
        subHeading: t("wheel-section.slides.5.subHeading"),
      },
    ],
    [t]
  );
  const { isRtl } = useLayoutConfig();
  const pinEl = useRef<HTMLDivElement | null>(null);
  const circleEl = useRef<HTMLDivElement | null>(null);
  const handsGroupRef = useRef<HTMLDivElement | null>(null);
  const [activeId, setActiveId] = useState<number | null>(null);
  useEffect(() => {
    if (SliderList.length > 0) {
      setActiveId(SliderList[0].id);
    }
  }, [SliderList]);
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

  const totalHands = SliderList?.length || 0;
  const step = angle / (totalHands - 1);

  useGSAP(
    () => {
      if (!pinEl.current || !handsGroupRef.current) return;

      let currentItemIndex =
        SliderList.findIndex((item) => item.id === activeId) || 0;
      let isAnimating = false;

      const st = ScrollTrigger.create({
        trigger: pinEl.current,
        start: "top top",
        end: `+=${SliderList.length * 40}% `,
        markers: false,
        pin: pinEl.current,
        scrub: false,
        pinSpacing: true,
        snap: {
          snapTo: (progress) => {
            const rawIndex = progress * (totalHands - 1);
            const nearestIndex = Math.round(rawIndex);
            currentItemIndex = Math.max(
              0,
              Math.min(nearestIndex, totalHands - 1)
            );
            return currentItemIndex / (totalHands - 1);
          },
          duration: 0.5,
          ease: "power2.out",
          directional: false,
        },
        onUpdate: (self) => {
          // Prevent multiple animations from running simultaneously
          if (isAnimating) return;

          const targetIndex = Math.round(self.progress * (totalHands - 1));
          const clampedIndex = Math.max(
            0,
            Math.min(targetIndex, totalHands - 1)
          );

          // Only animate if the index actually changed
          if (clampedIndex !== currentItemIndex) {
            currentItemIndex = clampedIndex;
            const exactRotation = -clampedIndex * step;
            isAnimating = true;

            // Single, clean rotation animation with proper rounding
            gsap.to(handsGroupRef.current, {
              rotation: exactRotation,
              duration: 0.5,
              ease: "power2.out",
              force3D: true, // Force GPU acceleration
              transformOrigin: "center center",
              onComplete: () => {
                // Ensure final position is exact
                gsap.set(handsGroupRef.current, {
                  rotation: Math.round(exactRotation * 100) / 100, // Round to prevent sub-pixel issues
                  force3D: true,
                  transformOrigin: "center center",
                });
                isAnimating = false;
              },
            });

            const newActiveId = SliderList
              ? SliderList[clampedIndex]?.id
              : null;
            if (activeId !== newActiveId) {
              setActiveId(newActiveId);
            }
          }
        },
        onSnapComplete: (self) => {
          const finalIndex = Math.round(self.progress * (totalHands - 1));
          const clampedIndex = Math.max(
            0,
            Math.min(finalIndex, totalHands - 1)
          );
          const exactRotation = -clampedIndex * step;

          // Set final position with precise rounding
          gsap.set(handsGroupRef.current, {
            rotation: Math.round(exactRotation * 100) / 100,
            force3D: true,
            transformOrigin: "center center",
          });

          isAnimating = false;
        },
      });

      return () => st.kill();
    },
    { dependencies: [pinEl, handsGroupRef, totalHands, step] }
  );

  return (
    <div className="w-full h-auto flex items-center justify-center">
      <div
        className="relative w-full py-3.5 h-screen min-h-fit rounded-[20px] overflow-hidden"
        ref={pinEl}
      >
        <div className="relative w-full h-full rounded-[20px] overflow-hidden">
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
            <div
              className={clsx(
                "absolute top-[44px] ",
                isRtl ? "right-[44px]" : "left-[44px]"
              )}
            >
              <span className="text-[clamp(40px,5vw,60px)] capitalize leading-none font-semibold text-akti-burgundy">
                <pre>{t("wheel-section.bg-text")}</pre>
              </span>
            </div>

            {/* Wheel area */}
            <div className="absolute left-0 w-full h-full top-1/3  md:top-6/12 -translate-y-1">
              <div className="w-full h-full relative flex items-center justify-center">
                <div className="absolute bottom-full mb-4 max-w-[260px] left-1/2 -translate-x-1/2"></div>
                {/* Center favicon */}
                <div
                  ref={circleEl}
                  className="absolute z-30 w-full h-full flex items-center justify-center"
                >
                  <AnimatedWheelWrapper>
                    <img
                      src="/akti-logo-burgundy.svg"
                      alt="favicon"
                      className="object-contain w-full h-full rounded-full"
                    />
                  </AnimatedWheelWrapper>
                </div>
                {/* Hands */}
                <div
                  ref={handsGroupRef}
                  className="absolute left-1/2 lg:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{
                    // Add CSS to prevent blur and improve rendering
                    backfaceVisibility: "hidden",
                    perspective: "1000px",
                    transform: "translate3d(-50%, -50%, 0)", // Force 3D context
                  }}
                >
                  {SliderList?.map((item, i) => {
                    const baseAngle = i * step;
                    const isActive = activeId === item?.id;
                    const gap = isSmallScreen ? 0 : 155;
                    const length = faviconRadius + gap;
                    return (
                      <HandItem
                        key={item?.id}
                        baseAngle={baseAngle}
                        length={length}
                        icon={i % 2 === 0 ? shield : gear}
                        label={item?.id}
                        heading={item?.heading}
                        subHeading={item?.subHeading}
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
  // Round the angle and length to prevent sub-pixel issues
  const roundedAngle = Math.round(baseAngle * 100) / 100;
  const roundedLength = Math.round(length);

  return (
    <div
      className="absolute top-1/2"
      style={{
        left: "50%",
        transform: `translate3d(-50%, -50%, 0) rotate(${roundedAngle}deg) translateY(-${roundedLength}px)`,
        transformOrigin: "center center",
        // Add CSS to prevent blur and improve rendering
        backfaceVisibility: "hidden",
        perspective: "1000px",
        willChange: "transform", // Optimize for animations
      }}
    >
      <div className="flex flex-col items-center justify-center space-y-2 translate-y-1/2 lg:translate-y-0">
        {icon && (
          <img
            src={icon}
            alt="icon"
            className="min-w-12 w-12 min-h-12 h-12 object-contain"
            style={{
              // Prevent image blur during transforms
              backfaceVisibility: "hidden",
              transform: "translate3d(0, 0, 0)",
            }}
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
      <>
        <motion.div
          className="flex flex-col min-w-[200px] text-center justify-center items-center gap-2 translate-y-full lg:translate-y-2"
          style={{
            // Prevent blur in motion components
            backfaceVisibility: "hidden",
            transform: "translate3d(0, 0, 0)",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <span className="text-akti-burgundy leading-none font-medium text-[clamp(16px,3vw,24px)] whitespace-nowrap">
            {heading}
          </span>
          <span className="text-akti-grey font-medium text-xs">
            {subHeading}
          </span>
        </motion.div>
      </>
    );
  else return null;
};
