import { FaHourglassStart } from "react-icons/fa";
import image1 from "../../../assets/images/Vecto.png";
import SlidingButton from "../../../components/Elements/buttons/SlidingButton";

const SecureFuture = () => {
  return (
    <div className="w-full h-auto  flex justify-center items-center p-10 rounded-[20px] bg-white my-3">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="w-full h-[300px] md:h-[450px]  flex flex-1 justify-center items-center">
          <img
            src={image1}
            alt="Secure Future"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="h-full w-full px-5 flex flex-col justify-center text-center items-start gap-6 md:text-start">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold  leading-none">
            Building a Safer Future Together
          </h1>
          <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
            Are you searching for reliable online car insurance in Qatar that
            offers comprehensive and convenient coverage? AKTI is the solution.
            Purchasing car insurance may seem difficult at times, but we're here
            to make it easier and assist you in obtaining coverage that suits
            your values and requirements.
          </p>
          <div className="w-full flex justify-center md:justify-start items-center ">
            <SlidingButton className="bg-akti-burgundy-light text-sm flex items-center gap-2 px-4 py-2 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-2 text-white uppercase font-medium">
                <FaHourglassStart className="w-4 h-4" />
                <span>Learn More</span>
              </div>
            </SlidingButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureFuture;
