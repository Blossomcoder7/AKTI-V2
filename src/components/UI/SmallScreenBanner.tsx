import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../../styles/Banner.css";
import InsuranceEl from "./InsuranceEl";
import { useTranslation } from "react-i18next";

const SmallScreenBanner = () => {
    const { t } = useTranslation("home");

    return (
        <div className="w-full h-full bg-white py-10 rounded-2xl">
            <div className="w-full flex flex-col justify-center items-center">
                <h1 className="text-center text-3xl font-bold text-akti-burgundy-light mb-5">
                    Types of <br /> Insurances
                </h1>

                <div className="w-full h-fit flex justify-center items-center">
                    <div className="w-full max-w-6xl">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            grabCursor={true}
                            spaceBetween={20}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 1.3 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1280: { slidesPerView: 4 },
                            }}
                            className="pb-10"
                        >
                            {[
                                {
                                    heading: t("banner.insurances.motor.heading"),
                                    subHeading: t("banner.insurances.motor.subHeading"),
                                    image: "/images/insurances/motor.png",
                                },
                                {
                                    heading: t("banner.insurances.marine.heading"),
                                    subHeading: t("banner.insurances.marine.subHeading"),
                                    image: "/images/insurances/marine.png",
                                },
                                {
                                    heading: t("banner.insurances.medical.heading"),
                                    subHeading: t("banner.insurances.medical.subHeading"),
                                    image: "/images/insurances/medical.png",
                                },
                                {
                                    heading: t("banner.insurances.travel.heading"),
                                    subHeading: t("banner.insurances.travel.subHeading"),
                                    image: "/images/insurances/travel.png",
                                },
                                {
                                    heading: t("banner.insurances.personal.heading"),
                                    subHeading: t("banner.insurances.personal.subHeading"),
                                    image: "/images/insurances/personal.png",
                                },
                            ].map((item, index) => (
                                <SwiperSlide key={index}>
                                    <InsuranceEl
                                        className="insurance-card  rounded-2xl p-6 flex flex-col justify-between items-center text-center"
                                        heading={item.heading}
                                        subHeading={item.subHeading}
                                        image={item.image}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallScreenBanner;
