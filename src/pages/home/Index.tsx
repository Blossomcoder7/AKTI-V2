import useLayoutConfig from "../../hooks/useLayoutConfig";
import Banner from "./sections/Banner";
import Faq from "./sections/Faq";
import InsuranceClaim from "./sections/InsuranceClam";
import VideoBanner from "./sections/VideoBanner";
import WheelSection from "./sections/WheelSection";

const HomePage = () => {
  const { isRtl, locale } = useLayoutConfig();
  return (
    <>
      <Banner />
      <VideoBanner />
      <WheelSection />
      {isRtl ? (
        <InsuranceClaim key={locale} />
      ) : (
        <InsuranceClaim key={locale} />
      )}
      <Faq />
    </>
  );
};

export default HomePage;
