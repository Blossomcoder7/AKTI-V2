import image1 from "../../../assets/images/car.png";
import image2 from "../../../assets/images/car.png";
import image3 from "../../../assets/images/car.png";
import image4 from "../../../assets/images/car.png";

import { FaArrowRight } from "react-icons/fa";


const Faq = () => {
  const text = [
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
          Faqs ( Frequently Asked <br /> Question )
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
          {text.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col sm:flex-row items-center gap-4 justify-between  bg-white p-6 ${index !== text.length - 1
                ? "border-b border-[#282828]/20"
                : ""
                }`}
            >
              <div className="flex items-start gap-6 flex-1 sm:items-center">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#740832] text-white font-bold text-lg">
                  {item.number}
                </div>

                <div className="flex-1 items-center grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#740832] leading-relaxed">
                      {item.question}
                    </h3>
                  </div>

                  <div className="flex-1 items-center">
                    <p className="text-[#282828] text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 items-center  ml-6 w-48 h-24 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt="FAQ image"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
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
