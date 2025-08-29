import logo from "../../../assets/logos/SmallLogo2.png";
import { useTranslation } from "react-i18next";

const InsuranceClaim = () => {

    const { t } = useTranslation("insuranceClaim");
    return (
        <div
            className="w-full h-auto text-white rounded-2xl py-10">
            <div className="w-full  grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                {/* Left Side */}
                <div className="bg-gradient-to-r from-[#DADADA]/30 to-[#DADADA]/50  rounded-lg p-6  flex flex-col gap-5">
                    <div>
                        <h1 className="text-xl font-semibold">{t("insuranceClaim.steps.step1.title")}</h1>
                        <p className="text-base mt-1">
                            {t("insuranceClaim.steps.step1.description")}
                        </p>
                    </div>

                    <div className="w-full  pt-5 flex justify-end ">
                        <span className=" text-6xl font-bold text-akti-white">
                            01
                        </span>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex w-full justify-end">
                    <div className="text-right max-w-sm ">
                        <h2 className="text-2xl md:text-[3.2rem] font-bold leading-none pb-5">
                            {t("insuranceClaim.title")}
                        </h2>
                        <div className="flex w-full justify-end">
                            <div className="h-52 w-52">
                                <img src={logo} alt="logo" className="w-full h-full object-cover" />
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default InsuranceClaim;
