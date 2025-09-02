const image1 =
  "https://res.cloudinary.com/dfdgjx0ri/image/upload/v1753703644/samples/coffee.jpg";
const image2 =
  "https://res.cloudinary.com/dfdgjx0ri/image/upload/v1753703644/samples/cup-on-a-table.jpg";
const image3 =
  "https://res.cloudinary.com/dfdgjx0ri/image/upload/v1753703638/samples/animals/kitten-playing.gif";
const image4 =
  "https://res.cloudinary.com/dfdgjx0ri/image/upload/v1753703636/samples/sheep.jpg";

const images = [image1, image2, image3, image4];
import { FaArrowRight } from "react-icons/fa";
import AnimatedFaqEl from "../../../components/animated/AnimatedFaqEl";
import type FaqItemType from "../../../types/FaqItemType";
import { useTranslation } from "react-i18next";

interface FAQData {
  title: string;
  viewAll: string;
  items: FaqItemType[];
}
const Faq = () => {
  const { t } = useTranslation("faq");
  const faqData = (t("faq", { returnObjects: true }) as FAQData) ?? {
    title: "Faq",
    viewAll: "View All",
    items: [],
  };
  console.log({ faqData: faqData });

  return (
    <div className="w-full h-auto py-10">
      {/* <XSpacing> */}
      <div className="flex flex-col  sm:flex-row justify-between w-full items-center mb-8 ">
        <h2 className="text-2xl text-center sm:text-start sm:text-4xl font-semibold text-white leading-tight">
          {faqData.title}
        </h2>
        <div className="hidden sm:flex w-fit items-center gap-6 rounded-xl py-3 px-3 text-white cursor-pointer bg-[#D0D0D0]/50 border-white/30 hover:bg-white/20 transition-colors">
          <span className="text-white text-lg font-medium">{}View All</span>
          <span className="p-2 rounded-full bg-white">
            <FaArrowRight className="text-[#740832] text-sm" />
          </span>
        </div>
      </div>
      <div>
        <div className="rounded-2xl flex flex-col w-full h-fit overflow-hidden shadow-lg">
          {faqData?.items?.length > 0 ? (
            faqData?.items?.map((faq, index) => (
              <AnimatedFaqEl
                key={index}
                faq={{ ...faq, image: images[index] }}
              />
            ))
          ) : (
            <>
              <div className="w-full ">No FAQ</div>
            </>
          )}
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
      {/* </XSpacing> */}
    </div>
  );
};

export default Faq;
