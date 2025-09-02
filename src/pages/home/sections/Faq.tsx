const image1 =
  "https://res.cloudinary.com/dfdgjx0ri/image/upload/v1753703644/samples/coffee.jpg";
const image2 =
  "https://res.cloudinary.com/dfdgjx0ri/image/upload/v1753703644/samples/cup-on-a-table.jpg";
const image3 =
  "https://res.cloudinary.com/dfdgjx0ri/image/upload/v1753703638/samples/animals/kitten-playing.gif";
const image4 =
  "https://res.cloudinary.com/dfdgjx0ri/image/upload/v1753703636/samples/sheep.jpg";

import { FaArrowRight } from "react-icons/fa";
import AnimatedFaqEl from "../../../components/animated/AnimatedFaqEl";
import type FaqItemType from "../../../types/FaqItemType";

const Faq = () => {
  const faqs: FaqItemType[] = [
    {
      id: 1,
      number: "01",
      image: image1,
      question: "What Sets Comprehensive Apart From TPL Insurance?",
      answer:
        "Comprehensive Insurance Offers Extensive Protection, Covering Theft, Physical Damage To Your Vehicle, Passenger Injury, And Third-Party Liability. This Means It Covers Accidents Where You're At Fault, Including Injuries To Others And Damage To Their Property.",
    },
    {
      id: 2,
      number: "02",
      image: image2,
      question: "What Is The Period Of Insurance Coverage?",
      answer:
        "The Insurance Coverage Period Is One Year (365 Days) From The Date Of Policy Issuance.",
    },
    {
      id: 3,
      number: "03",
      image: image3,
      question: "Why Should I Buy A Boat & Yacht Insurance Policy?",
      answer:
        "To Stay Protected While Enjoying The Water. Our Third-Party Coverage Ensures You're Financially Safeguarded Against Any Liability For Damages To Others, Giving You Peace Of Mind Every Time You Set Sail.",
    },
    {
      id: 4,
      number: "04",
      image: image4,
      question: "Is There Any Number To Call If I Have Any Claim Questions?",
      answer:
        "For Any Claim Questions And Clarifications, Please Call Us Any Time At +974 70801616 To Discuss Your Concern.",
    },
  ];

  return (
    <div className="w-full h-auto py-10">
      {/* <XSpacing> */}
      <div className="flex flex-col  sm:flex-row justify-between w-full items-center mb-8 ">
        <h2 className="text-2xl text-center sm:text-start sm:text-4xl font-semibold text-white leading-tight">
          Faqs {"("} Frequently Asked <br /> Question {")"}
        </h2>
        <div className="hidden sm:flex w-fit items-center gap-6 rounded-xl py-3 px-3 text-white cursor-pointer bg-[#D0D0D0]/50 border-white/30 hover:bg-white/20 transition-colors">
          <span className="text-white text-lg font-medium">View All</span>
          <span className="p-2 rounded-full bg-white">
            <FaArrowRight className="text-[#740832] text-sm" />
          </span>
        </div>
      </div>
      <div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          {faqs.map((faq, index) => (
            <AnimatedFaqEl key={index} faq={faq} />
          ))}
        </div>
      </div>

      <div className="pt-10 pb-5 w-full flex flex-col items-center">
        <div className="sm:hidden flex w-fit items-center gap-6 rounded-xl py-3 px-3 text-white cursor-pointer bg-[#D0D0D0]/50 border-white/30 hover:bg-white/20 transition-colors">
          <span className="text-white text-lg font-medium">View All</span>
          <span className="p-2 rounded-full bg-white">
            <FaArrowRight className="text-[#740832] text-sm" />
          </span>
        </div>
      </div>
      {/* </XSpacing> */}
    </div>
  );
};

export default Faq;
