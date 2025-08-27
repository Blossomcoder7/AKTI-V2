import { Outlet } from "react-router";
import Navbar from "../UI/Navbar";
import useSmoothScroll from "../../hooks/useSmoothScroll";

const WebsiteLayout = () => {
  useSmoothScroll({ autoInit: true });
  return (
    <>
      <header className="w-full h-[90px] fixed top-0 left-0 z-[999] flex items-end justify-center">
        <>
          <Navbar />
        </>
      </header>
      <main className="flex flex-col items-start justify-start bg-akti-burgundy  w-full h-auto min-h-[600vh] p-3.5 space-y-3.5">
        <Outlet />
      </main>
      <footer className="flex items-center justify-center">Footer Here</footer>
    </>
  );
};

export default WebsiteLayout;
