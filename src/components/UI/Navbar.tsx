import { useNavigate, useParams } from "react-router";
import WhatsappCTA from "./buttons/WhatsappCTA";
import LanguageToggle from "./buttons/languageToggle";
import HamMenuButton from "./buttons/HamMenuButton";
// import FullLogo from "./FullLogo";
import { useScroll } from "motion/react";
import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import MagicScrollWrapper from "../wrappers/MagicScrollWrapper";
import type { DrawerRefType } from "../wrappers/Drawer";
import Drawer from "../wrappers/Drawer";
import useLayoutConfig from "../../hooks/useLayoutConfig";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { locale } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation("navbar");
  const navItems = [
    { label: t("Navbar.home"), path: "home" },
    { label: t("Navbar.about"), path: "about" },
    { label: t("Navbar.services"), path: "services" },
    { label: t("Navbar.contact"), path: "contact" },
  ];

  const handleNavigation = (path: string) => {
    navigate(`/${locale}/${path}`);
    drawerRef.current?.close?.();
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const { scrollY } = useScroll();
  const [y, setY] = useState(0);
  const drawerRef = useRef<DrawerRefType | null>(null);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setY(latest);
    });
  }, [scrollY]);
  const { isRtl } = useLayoutConfig();

  // Function to open the drawer
  const handleMenuClick = () => {
    if (drawerRef.current) {
      drawerRef.current.open();
    }
  };

  return (
    <>
      <MagicScrollWrapper>
        <div
          className={clsx(
            "px-7 flex items-center max-w-full w-full h-full py-2.5 justify-end",
            y > 100 ? "" : "bg-transparent"
          )}
        >
          <div></div>
          {/* {y > 200 ? (
            <div className="w-auto h-full inline-flex ">
              <FullLogo
                onClick={() => {
                  navigate("/");
                }}
                className=""
                style={{ height: "60px", width: "auto" }}
              ></FullLogo>
            </div>
          ) : (
            <span></span>
          )} */}
          <div className="flex items-center justify-center space-x-4">
            <div className="hidden md:inline-flex">
              <WhatsappCTA />
            </div>
            <div className="hidden md:inline-flex">
              <LanguageToggle />
            </div>
            <HamMenuButton onClick={handleMenuClick} />
          </div>
        </div>
      </MagicScrollWrapper>

      {/* Add the Drawer component */}
      <Drawer
        ref={drawerRef}
        muiDrawerProps={{
          anchor: isRtl ? "left" : "right",
        }}
        menu={
          <div className="flex flex-col items-center justify-center w-full h-full space-y-5 pt-8">
            {navItems.map((item, i) => (
              <button
                type="button"
                key={i}
                onClick={() => handleNavigation(item.path)}
                className={clsx(
                  "text-center font-bold text-lg hover:scale-110 transition-all ease-in-out",
                  isActive(item.path)
                    ? "text-akti-savana scale-110"
                    : "text-akti-white"
                )}
              >
                {item.label}
              </button>
            ))}

            <div className="flex flex-col items-center space-y-4 py-4 ">
              <WhatsappCTA />
              <LanguageToggle
                next={() => {
                  drawerRef?.current?.close?.();
                }}
              />
            </div>
          </div>
        }
      />
    </>
  );
};

export default Navbar;
