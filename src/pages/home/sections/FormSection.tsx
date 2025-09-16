import { MdOutlineArrowOutward } from "react-icons/md";
import SlidingButton from "../../../components/Elements/buttons/SlidingButton";

const FormSection = () => {
    return (
        <div className="w-full h-auto flex justify-center items-center p-10 my-6 ">
            <div className="max-w-lg w-full text-center space-y-6">
                <div>
                    <h2 className="text-3xl font-bold text-akti-white">
                        Get Started Today
                    </h2>
                    <p className="text-akti-white mt-2 text-sm">
                        Enter your mobile number to receive instant updates and exclusive
                        offers.
                    </p>
                </div>

                <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden shadow-sm bg-white">
                    <input
                        type="tel"
                        placeholder="Your Mobile Number"
                        className="bg-transparent p-5 w-full text-base outline-none 
                        placeholder-akti-burgundy font-bold flex justify-center items-center "
                    />
                    <div className="mr-2">
                        <SlidingButton
                            type="submit"
                            className="bg-akti-burgundy-light text-akti-white p-1 flex items-center justify-center rounded-full hover:bg-akti-burgundy transition"
                        >
                            <MdOutlineArrowOutward size={20} />
                        </SlidingButton>
                    </div>
                </div>

                <p className="text-xs text-akti-white">
                    We respect your privacy. Your number will never be shared.
                </p>
            </div>
        </div>
    );
};

export default FormSection;
