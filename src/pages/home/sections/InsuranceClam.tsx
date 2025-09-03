import { forwardRef, useRef, type HTMLAttributes } from "react";
import logo from "../../../assets/logos/SmallLogo2.png";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useLayoutConfig from "../../../hooks/useLayoutConfig";
import AnimatedWheelWrapper from "../../../components/animated/AnimatedWheelWrapper";
gsap.registerPlugin(ScrollTrigger);
const InsuranceClaim = () => {
  const { t } = useTranslation("insuranceClaim");
  const arr = [
    {
      title: t("insuranceClaim.steps.step1.title"),
      description: t("insuranceClaim.steps.step1.description"),
    },
    {
      title: t("insuranceClaim.steps.step2.title"),
      description: t("insuranceClaim.steps.step2.description"),
    },
    {
      title: t("insuranceClaim.steps.step3.title"),
      description: t("insuranceClaim.steps.step3.description"),
    },
    {
      title: t("insuranceClaim.steps.step4.title"),
      description: t("insuranceClaim.steps.step4.description"),
    },
    {
      title: t("insuranceClaim.steps.step5.title"),
      description: t("insuranceClaim.steps.step5.description"),
    },
    {
      title: t("insuranceClaim.steps.step5.title"),
      description: t("insuranceClaim.steps.step5.description"),
    },
    {
      title: t("insuranceClaim.steps.step5.title"),
      description: t("insuranceClaim.steps.step5.description"),
    },
  ];
  const containerRef = useRef<HTMLDivElement | null>(null);
  const horizontalRef = useRef<HTMLDivElement | null>(null);
  const cardItemsRef = useRef<(HTMLDivElement | undefined)[]>([]);
  const circleEl = useRef<HTMLDivElement | null>(null);

  const { isRtl } = useLayoutConfig();
  useGSAP(
    () => {
      if (!containerRef.current || !cardItemsRef.current || !circleEl?.current)
        return;
      const containerEl = containerRef.current;
      const items = gsap.utils.toArray<HTMLElement>(cardItemsRef.current);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerEl,
          pin: true,
          pinSpacing: true,
          scrub: true,
          start: "top top",
          end: `+=${items.length * 60 + 10}%`,
          onLeave: () => tl.pause(),
          onLeaveBack: () => tl.pause(),
        },
      });

      items.forEach((item, i) => {
        if (i === 0) {
          tl.set(item, { yPercent: -50 + 2 * i });
        } else {
          if (isRtl) {
            tl.fromTo(
              item,
              { yPercent: 300 },
              {
                yPercent: -50 + 7 * i,
                xPercent: 1 - 5 * i,
              },
              ">"
            );
          } else {
            tl.fromTo(
              item,
              { yPercent: 300 },
              {
                yPercent: -50 + 7 * i,
                xPercent: 1 + 5 * i,
              },
              ">"
            );
          }
        }
      });

      return () => {
        tl.kill();
        ScrollTrigger.refresh();
      };
    },
    {
      dependencies: [cardItemsRef, isRtl, containerRef, circleEl],
      scope: containerRef,
    }
  );

  return (
    <div ref={containerRef} className="w-full  text-white rounded-2xl ">
      <div className="w-full  grid grid-cols-1 md:grid-cols-2 items-center py-10 gap-6">
        {/* Left Side */}
        <div
          ref={horizontalRef}
          className="w-full relative h-full flex items-center justify-start gap-14 min-w-max"
        >
          {arr.map((a, i) => (
            <Card
              ref={(el) => {
                cardItemsRef.current[i] = el ?? undefined;
              }}
              heading={a.title}
              subHeading={a.description}
              className={clsx("cards-items absolute  ", ``)}
              style={{
                top: `${50 + 10 * i}%`,
                transform: `translateX(${10 * i}%)`,
              }}
              key={i}
              index={i + 1}
            />
          ))}
        </div>
        {/* Right Side */}
        <div className="flex w-full justify-end">
          <div className="text-right max-w-sm ">
            <h2 className="text-2xl md:text-[3.2rem] font-bold leading-none pb-5">
              {t("insuranceClaim.title")}
            </h2>
            <div className="flex w-full justify-end">
              <div ref={circleEl} className="h-52 w-52 aspect-square">
                <AnimatedWheelWrapper>
                  <img
                    src={logo}
                    alt="logo"
                    className="w-full h-full object-cover"
                  />
                </AnimatedWheelWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceClaim;
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  heading: string;
  subHeading: string;
  index: number;
}
const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ heading, subHeading, index, className }, ref) => {
    return (
      <>
        <div
          ref={ref}
          className={clsx(
            "bg-gradient-to-r backdrop-blur-2xl from-[#DADADA]/30 to-[#DADADA]/50  rounded-lg p-6  flex flex-col gap-5",
            className
          )}
        >
          <div>
            <h1 className="text-xl font-semibold py-2">{heading}</h1>
            <p className="text-base mt-1">{subHeading}</p>
          </div>
          <div className="w-full  pt-5 flex justify-end ">
            <span className=" text-6xl font-bold text-akti-white">
              {index?.toString()?.padStart(2, "0")}
            </span>
          </div>
        </div>
      </>
    );
  }
);
