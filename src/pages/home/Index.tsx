// import useLayoutConfig from "../../hooks/useLayoutConfig";
import AddressSection from "./sections/AddressSection";
import AktiApp from "./sections/AktiApp";
import BannerNew from "./sections/BannerNew";
import ChooseUs from "./sections/ChooseUs";
import FaqNew from "./sections/FaqNew";
import InsuranceClamNew from "./sections/InsuranceClamNew";
import InsuranceType from "./sections/InsuranceType";
import SecureFuture from "./sections/SecureFuture";
import ShowCounter from "./sections/ShowCounter";
import SlidingBenefits from "./sections/SlidingBenefits";
import FormSection from "./sections/FormSection";
import NewWheelSection from "./sections/NewWheelSection";

const HomePage = () => {
  // const { isRtl, locale } = useLayoutConfig();
  return (
    <>
      <div className="w-full mt-8 pt-6 flex flex-col md:flex-row rounded-[20px] items-center relative justify-between gap-10">
        <InsuranceType />
      </div>
      <div className="w-full bg-white  px-6 md:px-10 flex flex-col md:flex-row rounded-[20px] items-center my-3 relative justify-between gap-10">
        <BannerNew />
      </div>
      <ShowCounter />
      <SecureFuture />
      <SlidingBenefits />
      <NewWheelSection />
      {/* <WheelSection /> */}
      <InsuranceClamNew />
      <FormSection />
      <ChooseUs />
      <AktiApp />
      <SlidingBenefits />
      <AddressSection />
      <FaqNew />
    </>
  );
};

export default HomePage;
