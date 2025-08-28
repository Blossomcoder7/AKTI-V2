import mapImage from "../../../assets/images/Vector13.png";

const MapSection = () => {
    return (
        <div className=" relative w-full h-auto py-5 bg-akti-white rounded-2xl my-5">
            <div className=" w-full flex justify-center pt-4">
                <h1 className="text-5xl md:text-[6rem] leading-none font-bold text-akti-burgundy">
                    Exclusively
                </h1>
            </div>
            <div className="pb-5">
                <img src={mapImage} alt="mapImage" className="w-fit h-fit" />
            </div>

            <div className="hidden md:flex  absolute bottom-0 left-0 px-4 py-4">
                <div className="bg-gradient-to-r from-[#BE215A]  via-akti-burgundy-light to-akti-burgundy w-fit px-6 py-3 rounded-xl text-akti-white">
                    Grand Hamad Street, Doha <br /> 4555, Qatar
                </div>
            </div>
        </div>
    );
};

export default MapSection;
