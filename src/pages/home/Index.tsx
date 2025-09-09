import Banner from "./sections/Banner";
import Faq from "./sections/Faq";
import InsuranceClaim from "./sections/InsuranceClam";
import VideoBanner from "./sections/VideoBanner";
import WheelSection from "./sections/WheelSection";

const HomePage = () => {
  return (  
    <>
      <Banner />
      <VideoBanner />
      <WheelSection />
      <InsuranceClaim />
      <Faq />
    </>
  );
};

export default HomePage;
