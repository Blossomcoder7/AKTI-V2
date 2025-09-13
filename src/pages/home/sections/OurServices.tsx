import React from "react";
import Marine from "/images/insurances/marine.png";
import Motor from "/images/insurances/motor.png";
import Medical from "/images/insurances/medical.png";
import Personal from "/images/insurances/personal.png";
import Travel from "/images/insurances/travel.png";
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import type ServicesType from "../../../types/ServicesType";
import AnimatedServiceEl from "../../../components/animated/AnimatedFaqEl";

interface OurServicesData {
  title: string;
  viewAll: string;
  items: ServicesType[];
}

const images = [Motor, Marine, Medical, Personal, Travel];

const OurServices: React.FC = () => {
  const { t } = useTranslation("ourServices");

  const data = (t("services", { returnObjects: true }) as OurServicesData) ?? {
    title: "Our Services",
    viewAll: "View All",
    items: [],
  };

  return (
    <div className="w-full h-auto py-8">
      <div className="flex flex-col sm:flex-row justify-between w-full items-center mb-8">
        <h2 className="text-2xl text-center sm:text-start sm:text-6xl font-semibold text-white leading-tight">
          {data.title}
        </h2>

        <div className="hidden sm:flex w-fit items-center gap-6 rounded-xl py-3 px-3 text-white cursor-pointer bg-[#D0D0D0]/50 border-white/30 hover:bg-white/20 transition-colors">
          <span className="text-white text-lg font-medium">{data.viewAll}</span>
          <span className="p-2 rounded-full bg-white">
            <FaArrowRight className="text-[#740832] text-sm" />
          </span>
        </div>
      </div>

      <div className="rounded-2xl flex flex-col w-full h-fit overflow-hidden shadow-lg">
        {data?.items?.length > 0 ? (
          data.items.map((service, index) => (
            <AnimatedServiceEl
              key={index}
              service={{
                ...service,
                image: images[index] ?? images[index % images.length],
              }}
            />
          ))
        ) : (
          <div className="w-full text-center text-white py-6">No Services</div>
        )}
      </div>

      <div className="sm:hidden pt-10 pb-5 w-full flex flex-col items-center">
        <div className="flex w-fit items-center gap-6 rounded-xl py-3 px-3 text-white cursor-pointer bg-[#D0D0D0]/50 border-white/30 hover:bg-white/20 transition-colors">
          <span className="text-white text-lg font-medium">{data.viewAll}</span>
          <span className="p-2 rounded-full bg-white">
            <FaArrowRight className="text-[#740832] text-sm" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
