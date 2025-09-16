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
import WheelSection from "./sections/WheelSection";

const HomePage = () => {
  // const { isRtl, locale } = useLayoutConfig();
  return (
    <>
      <BannerNew />
      <ShowCounter />
      <SecureFuture />
      <InsuranceType />
      <WheelSection />
      <InsuranceClamNew />
      <ChooseUs />
      <AktiApp />
      <AddressSection />
      <FaqNew />
    </>
  );
};

export default HomePage;
