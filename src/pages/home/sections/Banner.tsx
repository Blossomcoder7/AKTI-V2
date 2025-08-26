import { useNavigate, useParams } from "react-router";
import FullLogo from "../../../components/UI/FullLogo";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import InsuranceEl from "../../../components/UI/InsuranceEl";
import { useEffect, useRef, useState } from "react";

const Banner = () => {
  const { locale } = useParams();
  const navigate = useNavigate();
  const isRtl = locale === "ar";
  const { t } = useTranslation("home");
  const contentEl = useRef<HTMLDivElement | null>(null);
  const [calculatedHeight, setCalculatedHeight] = useState(0);
  useEffect(() => {
    const updateHeight = () => {
      if (contentEl.current) {
        const height = contentEl.current.offsetHeight;
        setCalculatedHeight(height);
      }
    };

    requestAnimationFrame(updateHeight);
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [contentEl]);

  return (
    <div
      style={{ minHeight: `${calculatedHeight + 50}px` }}
      className=" flex items-center justify-center relative bg-white min-h-fit h-screen rounded-[20px]"
    >
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
              isRtl ? "right-full top-0 rotate-90" : "left-full rotate-0 top-0"
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
              isRtl ? "right-0 rotate-90 top-full" : "left-0 rotate-0 top-full"
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
      <div
        ref={contentEl}
        className="w-full h-full py-10 px-10 absolute inset-0 z-3 min-h-fit max-h-max flex flex-col"
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
        <div dir="ltr" className="w-full h-1/3 flex items-center justify-start">
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
    </div>
  );
};

export default Banner;
