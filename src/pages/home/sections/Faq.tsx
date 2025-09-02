import clsx from "clsx";
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
  const { t } = useTranslation("faq");

  // Get the FAQ data from translation
  const faqData = (t("faq", { returnObjects: true }) as FAQData) ?? {
    title: "",
    viewAll: "",
    items: [],
  };

  // Map images to items
  const images = [image1, image2, image3, image4];

  return (
    <div className="w-full h-auto py-10">
      <div className="flex flex-col sm:flex-row justify-between w-full items-center mb-8">
        <h2 className="text-2xl text-center sm:text-start sm:text-4xl font-semibold text-white leading-tight">
          {faqData.title}
        </h2>
        <div className="hidden sm:flex w-fit items-center gap-6 rounded-xl py-3 px-3 text-white cursor-pointer bg-[#D0D0D0]/50 border-white/30 hover:bg-white/20 transition-colors">
          <span className="text-white text-lg font-medium">
            {faqData.viewAll}
          </span>
          <span className="p-2 rounded-full bg-white">
            <FaArrowRight className="text-[#740832] text-sm" />
          </span>
        </div>
      </div>
      <div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          {faqData.items.map((item, index) => (
            <div
              key={index}
              className={clsx(
                "flex flex-col sm:flex-row items-center gap-4 justify-between bg-white p-6",
                index !== faqData.items.length - 1 &&
                  "border-b border-[#282828]/20"
              )}
            >
              <div className="flex items-start gap-6 flex-1 sm:items-center">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#740832] text-white font-bold text-lg">
                  {item.number}
                </div>

                <div className="flex-1 items-center grid grid-cols-1 lg:grid-cols-2 gap-6">
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

              <div className="flex-shrink-0 items-center ml-6 w-48 h-24 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={images[index]}
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
          <span className="text-white text-lg font-medium">
            {faqData.viewAll}
          </span>
          <span className="p-2 rounded-full bg-white">
            <FaArrowRight className="text-[#740832] text-sm" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Faq;
