import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
import "../../../styles/swiper.css";
import "swiper/swiper-bundle.css";

import Qleft from "../../../assets/icons/QuoteLeft.png";
import Qright from "../../../assets/icons/QuoteRight.png";


const Reviews = () => {
    const reviews = [
        {
            id: 1,
            review:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        },
        {
            id: 2,
            review:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        },
        {
            id: 3,
            review:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        },
        {
            id: 4,
            review:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        },
        {
            id: 5,
            review:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        },
    ];

    return (
        <>
            <div className="w-full flex flex-col items-center justify-center px-4 py-8 ">
                {/* <XSpacing> */}
                <div className="h-full w-full">
                    <div className="text-center text-[#ffffff]">
                        <h2 className="text-2xl font-bold">Reviews</h2>
                        <p className="opacity-80">Our Happy Client</p>
                    </div>

                    {/* fade edges with CSS mask; allow overflow so side slides peek out */}
                    <div className="w-full flex justify-center items-center">
                        <div className="w-full  max-w-6xl mt-10 review-coverflow !overflow-visible [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                            <Swiper
                                modules={[EffectCoverflow, Pagination, Autoplay]}
                                effect="coverflow"
                                centeredSlides
                                loop
                                grabCursor
                                pagination={{ clickable: true }}
                                slidesPerView={1.15}
                                initialSlide={3}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                    reverseDirection: true,
                                }}
                                breakpoints={{
                                    640: { slidesPerView: 1.35 },
                                    768: { slidesPerView: 1.7 },
                                    1024: { slidesPerView: 2.3 },
                                    1280: { slidesPerView: 3.0 },
                                }}
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 220,
                                    modifier: 1.25,
                                    slideShadows: false,
                                }}
                                className="pb-12"
                            >
                                {reviews.map((item) => (
                                    <SwiperSlide key={item.id} className="!h-auto">
                                        <div className="slide-card relative overflow-hidden rounded-2xl bg-white shadow-2xl">
                                            <div className="p-10 md:p-12 min-h-[150px] flex items-center justify-center">
                                                <div className="relative max-w-2xl text-center">
                                                    <img
                                                        src={Qleft}
                                                        alt=""
                                                        className="absolute -top-6 -left-6 w-6 opacity-60"
                                                    />
                                                    <p className="text-[#282828] text-lg leading-relaxed italic">
                                                        {item.review}
                                                    </p>
                                                    <img
                                                        src={Qright}
                                                        alt=""
                                                        className="absolute -bottom-6 -right-6 w-6 opacity-60"
                                                    />
                                                </div>
                                            </div>

                                            {/* subtle inner ring for the active card */}
                                            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
                {/* </XSpacing> */}
            </div>
        </>
    );
};

export default Reviews;
