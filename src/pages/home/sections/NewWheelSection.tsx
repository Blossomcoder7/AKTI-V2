import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import SlidingButton from "../../../components/Elements/buttons/SlidingButton";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHourglassStart,
} from "react-icons/fa";
import "../../../styles/NewSwiper.css";

const NewWheelSection = () => {
  const insuranceData = [
    {
      title: "Motor Insurance",
      description:
        "Are you searching for reliable online car insurance in Qatar that offers comprehensive and convenient coverage? AKTI is then the solution",
      bg: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Marine Insurance",
      description:
        "Set sail with confidence, knowing you're covered. Our third-party Boat & Yacht Insurance provides seamless protection on the water.",

      bg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Medical Insurance",
      description:
        "Designed exclusively for residents aged 60 and above, AKTI Senior's Health Insurance plans offer two tailored options: Basic and Basic Plus.",

      bg: "https://res.cloudinary.com/dfdgjx0ri/image/upload/v1753703644/samples/coffee.jpg",
    },
    {
      title: "Personal Insurance",
      description:
        "Select the plan that works for you and stay covered with reliable protection every day.",

      bg: "https://res.cloudinary.com/dfdgjx0ri/image/upload/v1753703644/samples/cup-on-a-table.jpg",
    },
    {
      title: "Travel Insurance",
      description:
        "Stay protected against trip delays, lost baggage, and unexpected emergencies—wherever you go.",

      bg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center my-3 rounded-2xl bg-white">
      <div className="w-full min-h-[500px] p-10">
        <div className="relative w-full">
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="${className}">${index + 1}</span>`,
            }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            loop
            effect="fade"
            fadeEffect={{ crossFade: true }}
            className="w-full h-[500px] rounded-2xl overflow-hidden cursor-grab"
          >
            {insuranceData.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-full h-full relative bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.bg})` }}
                >
                  <div className="absolute inset-0 bg-black/50 z-0 "></div>
                  <div className="relative z-10 w-full h-full flex flex-col justify-center items-center mx-auto">
                    <div className="max-w-xl text-center flex flex-col justify-center items-center text-akti-white px-4">
                      <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                        {item.title}
                      </h1>
                      <p className="text-white/90 text-lg leading-relaxed my-4">
                        {item.description}
                      </p>

                      <SlidingButton className="bg-akti-burgundy-light text-sm flex items-center gap-2 px-4 py-2 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer">
                        <div className="flex items-center gap-2 text-white uppercase font-medium">
                          <FaHourglassStart className="w-4 h-4" />
                          <span>Learn More</span>
                        </div>
                      </SlidingButton>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300 shadow-lg">
            <FaChevronLeft className="w-5 h-5" />
          </button>
          <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300 shadow-lg">
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewWheelSection;
