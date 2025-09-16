import { Outlet } from "react-router";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import WebsiteLoading from "../Elements/loading/WebsiteLoading";
import FooterNew from "../UI/FooterNew";
import NavbarNew from "../UI/NavbarNew";

const WebsiteLayout = () => {
  useSmoothScroll({ autoInit: true });

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const to = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(to);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            className="fixed w-full h-screen flex items-center justify-center z-[9999]"
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <WebsiteLoading />
          </motion.div>
        )}
      </AnimatePresence>
      <header className="w-full h-[80px] fixed top-0 left-0 z-[999] flex items-end justify-center">
        <>
          <NavbarNew />
        </>
      </header>
      <main className=" bg-akti-burgundy  w-full h-fit min-h-fit p-3.5 ">
        <Outlet />
      </main>
      <footer className="flex items-center justify-center">
        {/* <Footer /> */}
        <FooterNew />
      </footer>
    </>
  );
};

export default WebsiteLayout;
