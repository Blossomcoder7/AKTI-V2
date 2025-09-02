import GradientButton from "../../Elements/buttons/GradientButton";
import { BiMenuAltLeft } from "react-icons/bi";

interface HamMenuButtonProps {
  onClick?: () => void;
}

const HamMenuButton = ({ onClick }: HamMenuButtonProps) => {
  return (
    <GradientButton
      onClick={onClick}
      style={{
        minHeight: "45px",
        minWidth: "45px",
      }}
      className="min-w-[40px] aspect-square min-h-[40px] flex items-center justify-center px-0 py-0 p-[0px] rounded-[100%] w-[40px] h-[40px]"
    >
      <BiMenuAltLeft className="text-2xl font-black" />
    </GradientButton>
  );
};

export default HamMenuButton;