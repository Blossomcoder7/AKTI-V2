import Banner from "./sections/Banner";
import Faq from "./sections/Faq";
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
      <MapSection />
      <Faq />
      <Reviews />
    </>
  );
};

export default HomePage;
