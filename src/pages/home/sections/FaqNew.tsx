import { useState } from "react";
import { FiChevronDown, FiHelpCircle, FiPhone } from "react-icons/fi";
import SlidingButton from "../../../components/Elements/buttons/SlidingButton";
import { AnimatePresence, motion } from "framer-motion";

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

const FaqNew = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center bg-akti-white rounded-[20px] p-10">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className="w-full h-full flex flex-col justify-between">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Have a question? <br /> We are here to help.
            </h2>
            <p className="text-gray-700 ">
              Check out the most common questions our customers asked. Still
              have questions? Contact our customer support.
            </p>

            <div className="text-base text-gray-700">
              <p>
                {" "}
                Our customer support is available Monday to Friday: 8am–8:30pm.
              </p>
              <p> Average answer time: 24h</p>
            </div>
          </div>

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

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              onClick={() => toggleFaq(index)}
              className="border-2 border-gray-400 hover:border-akti-burgundy-light hover:cursor-pointer rounded-lg"
            >
              <button className="w-full flex items-center justify-between px-4 py-4 text-left text-akti-burgundy-light font-medium focus:outline-none">
                <span className="font-bold">{faq.question}</span>
                <FiChevronDown
                  className={`w-5 h-5 bg-akti-burgundy text-akti-white p-1 rounded-full transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 text-gray-700 text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqNew;
