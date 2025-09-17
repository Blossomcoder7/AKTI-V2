import backgroundImage from "../../../assets/images/Vector11.png";
import logo from "../../../assets/logos/SmallLogo2.png";
import SlidingButton from "../../../components/Elements/buttons/SlidingButton";
import Card2 from "../../../components/animated/Card2";
import AnimatedWheelWrapper from "../../../components/animated/AnimatedWheelWrapper";
import { MdHomeWork } from "react-icons/md";

const AddressSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center my-3">
      <div className="relative w-full min-h-fit p-10 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt="Background"
            className="h-full w-full z-0 object-cover object-center"
          />
          <div className="absolute z-0 inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-2 w-full h-full grid grid-cols-2 items-center justify-between ">
          <div className=" flex flex-col items-start text-start gap-4 z-10">
            <div className="w-24 h-24 aspect-square flex items-center relative justify-center">
              <div className="absolute left-1/2 top-1/2 -translate-1/2 text-center leading-none tracking-tight z-2 w-fit p-1 aspect-square flex items-center justify-center bg-white rounded-full text-akti-burgundy font-normal text-xs">
                Stay <br /> Updated
              </div>
              <AnimatedWheelWrapper
                keepRunning
                className="absolute left-1/2 top-1/2 -translate-1/2 z-1"
              >
                <img src={logo} alt="" className="h-24 w-24 object-contain " />
              </AnimatedWheelWrapper>
            </div>

            <div className="w-full flex items-center justify-start ">
              <h1 className="text-white max-w-fit text-3xl md:text-5xl font-bold leading-tight">
                Safeguarding Dreams, Securing Lives
              </h1>
            </div>

            <SlidingButton className="bg-akti-burgundy-light text-sm flex items-center gap-2 px-4 py-2 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-2 text-white uppercase font-medium">
                <MdHomeWork className="w-4 h-4" />
                <span>Visit Office</span>
              </div>
            </SlidingButton>
          </div>

          <div className="w-full flex flex-col   h-full">
            <Card2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressSection;
