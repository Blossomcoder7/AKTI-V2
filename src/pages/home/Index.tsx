import Banner from "./sections/Banner";
import Faq from "./sections/Faq";
import InsuranceClaim from "./sections/InsuranceClam";
import MapSection from "./sections/MapSection";
import Reviews from "./sections/Reviews";
import VideoBanner from "./sections/VideoBanner";
import WheelSection from "./sections/WheelSection";

const HomePage = () => {
  return (
    <>
      <Banner />
      <VideoBanner />
      <WheelSection />
      <InsuranceClaim />
      <MapSection />
      <Faq />
      <Reviews />
    </>
  );
};

export default HomePage;
