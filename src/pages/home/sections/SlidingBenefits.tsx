import { motion } from "framer-motion";

const SlidingBenefits = () => {
  const benefits = [
    "24 Hours Open",
    "Quick Claim Settlement",
    "Global Coverage",
    "Affordable Premiums",
    "24/7 Assistance",
    "Peace of Mind",
  ];

  return (
    <div className="w-full overflow-hidden flex items-center p-5 ">
      <div className="w-full flex ">
        <motion.div
          className="flex shrink-0 gap-10  pl-10 whitespace-nowrap"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {benefits.map((item, index) => (
            <div key={index} className="text-white text-2xl max-w-full">
              {item}
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex shrink-0 gap-10 pl-10 whitespace-nowrap"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {benefits.map((item, index) => (
            <div key={index} className="text-white text-2xl max-w-full">
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SlidingBenefits;
