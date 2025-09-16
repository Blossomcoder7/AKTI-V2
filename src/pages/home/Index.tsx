// import useLayoutConfig from "../../hooks/useLayoutConfig";
import LeftTopCorner from "../../components/UI/LeftTopCorner";
import AddressSection from "./sections/AddressSection";
import AktiApp from "./sections/AktiApp";
import BannerNew from "./sections/BannerNew";
import ChooseUs from "./sections/ChooseUs";
import FaqNew from "./sections/FaqNew";
import InsuranceClamNew from "./sections/InsuranceClamNew";
import InsuranceType from "./sections/InsuranceType";
import Reviews from "./sections/Reviews";
import SecureFuture from "./sections/SecureFuture";
import ShowCounter from "./sections/ShowCounter";
import WheelSection from "./sections/WheelSection";

const HomePage = () => {
  // const { isRtl, locale } = useLayoutConfig();
  return (
    <>
      <div className="w-full  mb-3  flex flex-col md:flex-row rounded-[20px] items-center relative justify-between gap-10">
        <LeftTopCorner />
        <InsuranceType />
      </div>
      <div className="w-full bg-white  py-14 px-6 md:px-12 flex flex-col md:flex-row rounded-[20px] items-center relative justify-between gap-10">
        <BannerNew />
      </div>
      <ShowCounter />
      <SecureFuture />
      <WheelSection />
      <InsuranceClamNew />
      <ChooseUs />
      {/* <Reviews /> */}
      <AktiApp />
      <AddressSection />
      <FaqNew />
    </>
  );
};

export default HomePage;
