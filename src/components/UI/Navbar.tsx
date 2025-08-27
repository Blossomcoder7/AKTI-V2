// import { useNavigate } from "react-router";
import WhatsappCTA from "./buttons/WhatsappCTA";
import LanguageToggle from "./buttons/languageToggle";
import HamMenuButton from "./buttons/HamMenuButton";
// import FullLogo from "./FullLogo";
import { useScroll } from "motion/react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import MagicScrollWrapper from "../wrappers/MagicScrollWrapper";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [y, setY] = useState(0);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setY(latest);
    });
  }, [scrollY]);
  // const navigate = useNavigate();

  return (
    <MagicScrollWrapper>
      <div
        className={clsx(
          "  px-7 flex items-center w-full h-full py-2.5 justify-between",
          y > 100 ? "" : "bg-transparent"
        )}
      >
        <span></span>
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
          <HamMenuButton />
        </div>
      </div>
    </MagicScrollWrapper>
  );
};

export default Navbar;
