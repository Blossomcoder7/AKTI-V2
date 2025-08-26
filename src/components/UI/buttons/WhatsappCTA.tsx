import GradientButton from "../../Elements/buttons/GradientButton";
import WhatsApp from "../../../assets/icons/WhatsApp.png";
const WhatsappCTA = () => {
  return (
    <a
      dir="ltr"
      target="_blank"
      href="https://api.whatsapp.com/send/?phone=97474080040"
      className="flex items-center justify-center w-fit h-fit"
    >
      <GradientButton className="px-6 py-0 flex whitespace-nowrap flex-nowrap">
        <span className="inline-flex items-center justify-center w-auto min-h-fit ">
          <img
            src={WhatsApp}
            alt="w"
            className="block w-[22px] h-[22px] object-contain mr-1"
          />
        </span>
        <span className="hidden md:inline-flex  font-medium text-base">
          +974 74080040
        </span>
      </GradientButton>
    </a>
  );
};

export default WhatsappCTA;
