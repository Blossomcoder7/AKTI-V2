import AnimatedWheelWrapper from "../../animated/AnimatedWheelWrapper";

const WebsiteLoading = () => {
  return (
    <div className="w-full bg-akti-burgundy fixed z-[9999] inset-0 h-full flex items-center justify-center min-h-screen">
      <AnimatedWheelWrapper keepRunning speed={5}>
        <img
          src={"/akti-logo-white.svg"}
          alt="logo"
          className="w-full h-screen max-h-[500px] p-32 object-contain"
        />
      </AnimatedWheelWrapper>
    </div>
  );
};

export default WebsiteLoading;
