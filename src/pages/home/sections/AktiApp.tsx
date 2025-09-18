import backgroundImage_home from "../../../assets/images/akti-bg.png";
import appStore from "../../../assets/images/fullAppStore.png";
import playStore from "../../../assets/images/FullPlayStore.png";
import mobileApp from "../../../assets/images/AktiApp.png";
import useLayoutConfig from "../../../hooks/useLayoutConfig";
import clsx from "clsx";

const AktiApp = () => {
  const { isRtl } = useLayoutConfig();
  return (
    <div className="flex w-full bg-akti-burgundy py-3">
      <div
        className="
          bg-akti-white py-10 md:py-5 md:h-[24rem] lg:h-[31rem] 
          flex w-full justify-between items-center 
          relative md:px-20 rounded-[20px] overflow-hidden
        "
      >
        {/* Background image */}
        <div
          className={clsx(
            "absolute inset-0 w-full h-full flex items-center justify-center",
            isRtl && "rotate-y-180"
          )}
        >
          <img
            src={backgroundImage_home}
            alt="Background"
            className="w-full block h-full object-cover z-0"
          />
        </div>

        {/* Content section */}
        <div className="relative z-10 flex flex-col gap-5 w-full md:max-w-[40rem] py-2 md:py-0">
          <div className="content text-akti-burgundy-light flex-1 justify-center items-center px-6">
            <h1 className="text-center md:text-left font-montserrat w-full text-xl md:text-3xl lg:text-4xl font-semibold screen900:text-[2.5rem] pb-2">
              Get the AKTI app
            </h1>
            <p className="text-center md:text-left font-montserrat text-base md:text-lg lg:text-lg screen900:text-[1.375rem]">
              Download and join for free. You'll never pay a membership fee.
            </p>
          </div>

          {/* Mobile image */}
          <div className="flex md:hidden w-full h-full justify-center">
            <img
              src={mobileApp}
              alt="Mobile app"
              className="w-fit h-[150px] object-contain"
            />
          </div>

          {/* App store buttons */}
          <div className="flex gap-4 w-full justify-center md:justify-start px-3">
            <img
              src={appStore}
              alt="App Store"
              className="w-[42%] md:w-36 lg:w-44 h-auto object-contain cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <img
              src={playStore}
              alt="Play Store"
              className="w-[42%] md:w-36 lg:w-44 h-auto object-contain cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        </div>

        {/* Tablet/desktop image - hidden on mobile */}
        <div className="hidden md:flex relative z-10">
          <img
            src={mobileApp}
            alt="Mobile app"
            className="w-full lg:h-[300px] md:h-[200px]  object-cover md:object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AktiApp;
