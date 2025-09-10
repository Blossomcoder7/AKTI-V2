import logo from "../../assets/logos/SmallLogo2.png";
import textLogo from "../../assets/logos/Text-Logo.png";
import backgroundImage from "../../assets/images/background.png";

import PS from "../../assets/images/GOOGLEPAY.png";
import AS from "../../assets/images/AppStore.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Card2 from "../animated/Card2";
import AnimatedWheelWrapper from "../animated/AnimatedWheelWrapper";
import SlidingButton from "../Elements/buttons/SlidingButton";

const Footer = () => {
  const { t } = useTranslation("footer");
  const footerButtons = t("footerButtons", { returnObjects: true }) as {
    id: number;
    title: string;
    description: { label: string; link: string }[];
  }[];

  return (
    <>
      <div className="h-auto w-full bg-akti-burgundy">
        <div
          className="w-full text-white rounded-t-2xl"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="px-4 w-full">
            <div className="w-full pt-1">
              <div className="flex w-full justify-between items-center pt-6">
                <h2 className="text-xl font-semibold uppercase whitespace-pre-line">
                  {t("officeAddress")}
                </h2>
                <div className="w-24 h-24 aspect-square flex items-center relative justify-center">
                  <div className="absolute left-1/2 top-1/2 -translate-1/2 text-center leading-none tracking-tight z-2 w-fit p-1 aspect-square flex items-center justify-center bg-white rounded-full text-akti-burgundy font-normal text-xs">
                    Stay <br /> Updated
                  </div>
                  <AnimatedWheelWrapper
                    keepRunning
                    className="absolute left-1/2 top-1/2 -translate-1/2 z-1"
                  >
                    <img
                      src={logo}
                      alt=""
                      className="h-24 w-24 object-contain "
                    />
                  </AnimatedWheelWrapper>
                </div>
              </div>
              <div className="w-full">
                <Card2 />
              </div>
            </div>

            <div className="">
              <div className="pt-4 lg:pt-6 pb-4 md:pb-0 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
                <div>
                  <img
                    src={textLogo}
                    alt="text logo"
                    className="h-24 w-36 object-contain hover:cursor-pointer"
                  />
                </div>
                {footerButtons.map((section) => (
                  <div key={section.id}>
                    <h4 className="font-bold text-base mb-3">
                      {section.title}
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {section.description.map((item, idx) => (
                        <li key={idx}>
                          {section.id === 11 || section.id === 12 ? (
                            <Link
                              to={item.link}
                              className="hover:text-akti-burgundy hover:scale-110 transform transition-transform duration-300 ease-in-out hover:font-bold"
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <a
                              href={item.link || "#"}
                              className="hover:text-akti-burgundy hover:scale-110 transform transition-transform duration-300 ease-in-out hover:font-bold"
                            >
                              {item.label}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="flex col-span-1 flex-wrap  gap-3 md:gap-1">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit h-fit text-sm bg-[#E0E0E0]/40 border text-[#ffffff] border-[#ffffff] rounded-full hover:cursor-pointer"
                  >
                    <SlidingButton className="px-2 py-1">
                      {" "}
                      {t("socialMedia.facebook")}
                    </SlidingButton>
                  </a>

                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit h-fit text-sm bg-[#E0E0E0]/40 border text-[#ffffff] border-[#ffffff]  rounded-full hover:cursor-pointer"
                  >
                    <SlidingButton className="px-2 py-1">
                      {t("socialMedia.instagram")}{" "}
                    </SlidingButton>
                  </a>

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit h-fit text-sm bg-[#E0E0E0]/40 border text-[#ffffff] border-[#ffffff]  rounded-full hover:cursor-pointer"
                  >
                    <SlidingButton className="px-2 py-1">
                      {t("socialMedia.linkedin")}
                    </SlidingButton>
                  </a>
                </div>
              </div>

              <div className="py-6 flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col gap-4 md:flex-row justify-between w-full items-center ">
                  <p className="text-sm">{t("rightsReserved")}</p>

                  <div className="flex space-x-4">
                    <div className="hover:cursor-pointer">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <img
                          src={PS}
                          alt="Playstore"
                          className="h-fit w-36 object-contain"
                        />
                      </a>
                    </div>

                    <div className="hover:cursor-pointer">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <img
                          src={AS}
                          alt="appstore"
                          className="h-fit w-36 object-contain"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;



