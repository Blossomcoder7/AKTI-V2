import { useState, useRef } from "react";
import { FiChevronDown, FiHelpCircle, FiPhone } from "react-icons/fi";
import SlidingButton from "../../../components/Elements/buttons/SlidingButton";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useInView } from "framer-motion";
import clsx from "clsx";

const faqs = [
  {
    id: 1,
    question: "What Sets Comprehensive Apart From TPL Insurance?",
    answer:
      "Comprehensive Insurance offers extensive protection, covering theft, physical damage to your vehicle, passenger injury, and third-party liability. This means it covers accidents where you're at fault, including injuries to others and damage to their property.",
  },
  {
    id: 2,
    question: "What Is The Period Of Insurance Coverage?",
    answer:
      "The insurance coverage period is one year (365 days) from the date of policy issuance.",
  },
  {
    id: 3,
    question: "Why Should I Buy A Boat & Yacht Insurance Policy?",
    answer:
      "To stay protected while enjoying the water. Our third-party coverage ensures you're financially safeguarded against any liability for damages to others, giving you peace of mind every time you set sail.",
  },
  {
    id: 4,
    question: "Is There Any Number To Call If I Have Any Claim Questions?",
    answer:
      "For any claim questions and clarifications, please call us any time at +974 70801616 to discuss your concern.",
  },
  {
    id: 5,
    question: "What is your return policy?",
    answer:
      "For any claim questions and clarifications, please call us any time at +974 70801616 to discuss your concern.",
  },
  {
    id: 6,
    question: "Any Questions?",
    answer:
      "You can contact us through our contact page! We will be happy to assist you.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const FaqNew = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 }); // 30% trigger

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center bg-akti-white rounded-[20px] py-10 md:px-10 px-6 my-3">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="w-full h-full flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Have a question? <br /> We are here to help.
            </h2>
            <p className="text-gray-700">
              Check out the most common questions our customers asked. Still
              have questions? Contact our customer support.
            </p>

            <div className="text-base text-gray-700">
              <p>
                Our customer support is available Monday to Friday: 8am–8:30pm.
              </p>
              <p>Average answer time: 24h</p>
            </div>
          </div>

          {/* Support Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
            <SlidingButton className="bg-akti-burgundy-light text-sm flex items-center gap-2 px-4 py-2 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer">
              <a
                href="tel:+97470801616"
                className="flex items-center gap-2  text-white uppercase font-medium"
              >
                <FiPhone className="w-4 h-4" />
                <span>Call Support</span>
              </a>
            </SlidingButton>

            <div className="text-gray-700 font-semibold">or</div>

            <SlidingButton className="bg-akti-burgundy-light text-sm flex items-center gap-2 px-4 py-2 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-2 text-white uppercase font-medium">
                <FiHelpCircle className="w-4 h-4" />
                <span>Contact Us</span>
              </div>
            </SlidingButton>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div
          ref={containerRef}
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              onClick={() => toggleFaq(index)}
              className={clsx(
                "group border-2 border-gray-400 rounded-lg cursor-pointer transition-colors duration-300",
                openIndex === index
                  ? "bg-akti-burgundy text-white"
                  : "bg-white text-gray-800",
                "hover:bg-akti-burgundy hover:text-white"
              )}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <button className="w-full flex items-center justify-between px-4 py-4 text-left font-medium focus:outline-none">
                <span className="font-bold">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown
                    className={clsx(
                      "w-5 h-5 p-1 rounded-full transition-colors duration-300",
                      openIndex === index
                        ? "bg-white text-akti-burgundy"
                        : "bg-akti-burgundy text-white",
                      "group-hover:bg-white group-hover:text-akti-burgundy"
                    )}
                  />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0, y: -10 }}
                    animate={{ height: "auto", opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 text-sm">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FaqNew;
