import GetStartedButton from "../../../components/UI/GetStartedButton";
import { FaLongArrowAltUp } from "react-icons/fa";
import SlidingButton from "../../../components/Elements/buttons/SlidingButton";
import WeeklyDynamics from "../../../components/animated/WeeklyDynamics";
import Counter from "../../../components/animated/Counter";




const BannerNew = () => {


  return (
    <div className="w-full p-3.5 h-auto flex justify-center items-center py-10 gap-6 relative">
      {/* phone number field  */}
 

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        <div className="w-full flex-1 flex  flex-col justify-center items-start text-center lg:text-start gap-5">
          <p className="w-full text-base text-black italic">
            Welcome to Alkhaleej Takaful Insurance
          </p>
          <h1 className="w-full text-3xl md:text-5xl font-bold  leading-snug">
            Secure Your Future <br /> with{" "}
            <span className="text-white bg-gradient-to-r from-akti-burgundy-light to-akti-burgundy px-2 py-1 rounded-xl">
              AKTI Insurance
            </span>
          </h1>
          <p className="w-full text-gray-700 leading-relaxed pb-5">
            Are you searching for reliable online car insurance in Qatar that
            offers comprehensive and convenient coverage? AKTI is the solution.
            Purchasing car insurance may seem difficult at times, but we're here
            to make it easier and assist you in obtaining coverage that suits
            your values and requirements.
          </p>
          <div className="w-full flex justify-center lg:justify-start items-center">
            <GetStartedButton />
          </div>
        </div>

        <div className="w-full flex-1 relative flex justify-center items-center">
          <div className="w-full h-[500px] flex justify-center items-center">
            <img
              src="https://res.cloudinary.com/db2bcuzzn/image/upload/v1758179454/2149631022_zn6qsb.jpg"
              alt="Insurance"
              className="w-full h-full object-center object-cover rounded-lg "
            />
          </div>

          <div className="hidden absolute top-24 -right-10 bg-white text-gray-700 py-2 px-3 rounded-2xl md:flex items-center gap-2">
            <div className="w-full flex justify-center items-center gap-2">
              <div className="w-full flex flex-col px-2 text-base font-semibold">
                <span>Customers</span>
                <span className="text-sm">
                  {" "}
                  <Counter suffix="+" end={10000} />
                </span>
              </div>

              <SlidingButton className=" w-fit p-1 flex items-center justify-center rounded-full bg-gradient-to-r from-akti-burgundy to-akti-burgundy-light text-white hover:cursor-pointer hover:scale-105 transition-transform duration-200">
                <FaLongArrowAltUp size={20} />
              </SlidingButton>
            </div>
          </div>

          <div className="absolute -bottom-20  lg:bottom-2 md:-left-14 lg:-left-24 px-4 py-2 rounded-md text-sm">
            <WeeklyDynamics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerNew;
