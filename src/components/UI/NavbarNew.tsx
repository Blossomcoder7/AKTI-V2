import { IconButton } from "@mui/material";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { DrawerRefType } from "../wrappers/Drawer";
import MagicScrollWrapper from "../wrappers/MagicScrollWrapper";
import Drawer from "../wrappers/Drawer";
import WhatsappCTA from "./buttons/WhatsappCTA";
import LanguageToggle from "./buttons/languageToggle";
import logo from "../../assets/logos/brand-logo.png";

const NavbarNew = () => {
  const { t } = useTranslation("navbar");

  const drawerEl = useRef<DrawerRefType>(null);
  const { scrollY } = useScroll();
  const controls = useAnimation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Track screen size
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: t("Motor"), path: "/motor" },
    { label: t("Medical"), path: "/medical" },
    { label: t("Marine"), path: "/marine" },
    { label: t("Travel"), path: "/travel" },
    { label: t("Personal Accidents"), path: "/personalaccidents" },
    { label: t("Support"), path: "/projects" },
  ];

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 400);
  });

  useEffect(() => {
    controls.start({
      y: scrolled ? 0 : -100,
      opacity: scrolled ? 1 : 0,
      transition: {
        duration: 0.6,
        ease: [0.77, 0, 0.175, 1],
      },
    });
  }, [scrolled, controls]);

  const handleNavigation = (path: string) => {
    navigate(path);
    drawerEl.current?.close?.();
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <MagicScrollWrapper>
      <nav
        className={clsx(
          "navbar w-full lg:py-4 items-center relative justify-center flex text-base overflow-hidden h-full text-akti-burgundy bg-white px-5 lg:px-10"
        )}
      >
        <motion.div
          animate={controls}
          className="w-full absolute inset-0 top-0 left-0 backdrop-blur-[1px] z-1"
        />

        <div className="flex items-center justify-between w-full relative z-2 rounded-md">
          {/* Mobile logo */}
          <div className="lg:hidden">
            <img
              src={logo}
              alt="logo"
              height={28}
              width={100}
              className="object-contain object-center"
            />
          </div>

          <div className="w-fit lg:w-full h-full">
            <Drawer
              ref={drawerEl}
              muiDrawerProps={{
                anchor: "right",
                disableScrollLock: true,
              }}
              menu={
                <IconButton
                  className="text-[clamp(20px,4vw,28px)]"
                  sx={{ p: 2 }}
                  onClick={() => drawerEl?.current?.open?.()}
                >
                  <HiOutlineBars3 className="text-akti-burgundy text-4xl" />
                </IconButton>
              }
            >
              <div className="hidden lg:flex items-center justify-center w-fit hover:cursor-pointer">
                <img
                  src={logo}
                  alt="logo"
                  height={42}
                  width={130}
                  className="object-contain object-center"
                />
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-center flex-1 pt-6 lg:pt-0 space-y-6 lg:space-y-0 lg:space-x-8 ">
                {navItems.map((item, i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => handleNavigation(item.path)}
                    className={clsx(
                      "text-center font-bold hover:scale-110 transition-all ease-in-out hover:cursor-pointer",
                      isActive(item.path)
                        ? isMobile
                          ? "text-white scale-110"
                          : "text-akti-burgundy scale-110"
                        : isMobile
                          ? "text-white"
                          : "text-akti-burgundy-light"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="flex flex-col lg:flex-row py-10 lg:py-0 justify-center  items-center gap-3">
                <LanguageToggle />
                <WhatsappCTA />
              </div>
            </Drawer>
          </div>
        </div>
      </nav>
    </MagicScrollWrapper>
  );
};

export default NavbarNew;
