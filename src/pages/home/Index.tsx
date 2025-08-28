import SmallScreenBanner from "../../components/UI/SmallScreenBanner";
import Banner from "./sections/Banner";
import Faq from "./sections/Faq";
import InsuranceClam from "./sections/InsuranceClam";
import MapSection from "./sections/MapSection";

import Reviews from "./sections/Reviews";
import VideoBanner from "./sections/VideoBanner";


const HomePage = () => {

  return (
    <>
      <Banner />
      <VideoBanner />
      <SmallScreenBanner />
      {/* <WheelSection /> */}
      <InsuranceClam />
      <MapSection />
      <Faq />
      <Reviews />

    </>
  );
};

export default HomePage;
