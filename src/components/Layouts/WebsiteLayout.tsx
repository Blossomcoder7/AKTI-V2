import { Outlet } from "react-router";
import Navbar from "../UI/Navbar";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import Footer from "../UI/Footer";

const WebsiteLayout = () => {
  useSmoothScroll({ autoInit: true });
  return (
    <>
      <header className="w-full h-[90px] fixed top-0 left-0 z-[999] flex items-end justify-center">
        <>
          <Navbar />
        </>
      </header>
      <main className=" bg-akti-burgundy  w-full h-fit min-h-fit p-3.5 ">
        <Outlet />
      </main>
      <footer className="flex items-center justify-center">
        <Footer />
      </footer>
    </>
  );
};

export default WebsiteLayout;
