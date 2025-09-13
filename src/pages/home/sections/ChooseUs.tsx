import { motion } from "motion/react";
import {
  FaChessKnight,
  FaHandshake,
  FaShieldAlt,
  FaFileSignature,
  FaHandsHelping,
  FaGlobeAmericas,
  FaChartLine,
  FaLeaf,
} from "react-icons/fa";

const ChooseUs = () => {
  const features = [
    {
      icon: <FaChessKnight size={40} />,
      title: "STRENGTH",
      desc: "Over 40 years of dedicated service",
    },
    {
      icon: <FaHandshake size={40} />,
      title: "SOLIDARITY",
      desc: "Mutual principle",
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "CONFIDENCE",
      desc: "Top-class international reinsurers",
    },
    {
      icon: <FaFileSignature size={40} />,
      title: "CLAIM MANAGEMENT",
      desc: "Prompt claim settlement",
    },
    {
      icon: <FaHandsHelping size={40} />,
      title: "CUSTOMER SUPPORT",
      desc: "24/7 assistance for our clients",
    },
    {
      icon: <FaGlobeAmericas size={40} />,
      title: "GLOBAL REACH",
      desc: "International partnerships and services",
    },
    {
      icon: <FaChartLine size={40} />,
      title: "FINANCIAL STABILITY",
      desc: "Strong and consistent growth",
    },
    {
      icon: <FaLeaf size={40} />,
      title: "SUSTAINABILITY",
      desc: "Committed to eco-friendly practices",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center rounded-[20px] py-12 bg-white mt-4">
      {/* Section Heading */}
      <div className="max-w-4xl text-center px-6">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
          className="text-3xl font-bold text-akti-burgundy"
        >
          What We Believe In
        </motion.h1>
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
          className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed"
        >
          We are committed to delivering quality products and services that meet
          the evolving needs of our society. With a focus on adding value for
          our clients, employees, and shareholders, we take pride in being one
          of Qatar’s leading insurance providers, offering innovative solutions
          aligned with Islamic Sharia principles.
        </motion.p>
      </div>

      {/* Feature Cards */}
      <div className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-16">
        {features.map((feature, index) => (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
            key={index}
            className="bg-akti-warm-grey/10 hover:cursor-pointer rounded-xl p-6 flex flex-col items-center text-center transition-transform transform hover:-translate-y-2  duration-300"
          >
            <div className="text-akti-burgundy mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-sm mt-2">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
