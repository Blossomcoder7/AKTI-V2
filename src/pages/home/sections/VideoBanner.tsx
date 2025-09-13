import XSpacing from "../../../components/wrappers/XSpacing";
import { useTranslation } from "react-i18next";
import SlidingButton from "../../../components/Elements/buttons/SlidingButton";
import LeftTopCorner from "../../../components/UI/LeftTopCorner";
const VideoBanner = () => {
  const { t } = useTranslation("home");

  return (
    <>
      <LeftTopCorner />
      <div className="w-full h-auto flex flex-col items-center justify-center pb-3.5">
        <div className="w-full h-screen relative overflow-hidden flex justify-center rounded-2xl items-center bg-white text-white">
          <div className="w-full h-full absolute inset-0  z-1">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-center object-cover bg-black  text-white"
            >
              <source
                src="https://framerusercontent.com/assets/3wm5wH8s1250R4o5nepAOc9QkY.mp4"
                type="video/mp4"
              />
              <source
                src="https://framerusercontent.com/assets/3wm5wH8s1250R4o5nepAOc9QkY.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/40 z-1"></div>
          </div>
          <div className="w-full h-full flex items-center justify-center relative z-3">
            <XSpacing
              style={{ padding: "40px" }}
              className="flex  flex-col justify-end items-center  h-full  py-[15px] md:py-[20px] lg:py-[40px] xl:py-[60px] "
            >
              <div className="flex flex-col h-fit w-full justify-center items-center  z-3">
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
        </div>
      </div>
      <div id="next" className="h-1 w-full"></div>
    </>
  );
};

export default VideoBanner;
