import { FaHourglassStart } from "react-icons/fa";
import image1 from "../../../assets/images/Vecto.png";
import SlidingButton from "../../../components/Elements/buttons/SlidingButton";

const SecureFuture = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center py-8 px-4 rounded-[20px] bg-white">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
        <div className="w-full h-full flex justify-center">
          <img
            src={image1}
            alt="Secure Future"
            className="w-full max-w-lg object-cover object-center rounded-xl "
          />
        </div>

        <div className="h-full w-full px-5 flex flex-col justify-center items-start gap-6 text-left">
          <h1 className="text-2xl md:text-5xl font-bold  leading-none">
            Building a Safer Future Together
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Are you searching for reliable online car insurance in Qatar that
            offers comprehensive and convenient coverage? AKTI is the solution.
            Purchasing car insurance may seem difficult at times, but we're here
            to make it easier and assist you in obtaining coverage that suits
            your values and requirements.
          </p>
          <div className="w-full flex justify-start">
            <SlidingButton className="bg-akti-burgundy-light text-sm flex items-center gap-2 px-4 py-2 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer">
              <button className="flex items-center gap-2 text-white uppercase font-medium">
                <FaHourglassStart className="w-4 h-4" />
                <span>Learn More</span>
              </button>
            </SlidingButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureFuture;
