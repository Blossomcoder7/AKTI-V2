import { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import image1 from "../../../assets/images/image3.jpg";
import image2 from "../../../assets/images/image2.jpg";
import image3 from "../../../assets/images/image1.jpg";

const steps = [
  {
    id: 1,
    process: "Step 1",
    image: image1,
    text: "Step 1: Report your insurance claim quickly and provide initial details about the incident. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit  Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  },
  {
    id: 2,
    process: "Step 2",
    image: image2,
    text: "Step 2: Submit required documents such as ID proof, policy details, and claim form. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit  Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  },
  {
    id: 3,
    process: "Step 3",
    image: image3,
    text: "Step 3: Our team inspects the damage and verifies your claim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit  Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  },
  {
    id: 4,
    process: "Step 4",
    image: image1,
    text: "Step 4: Claim evaluation and approval process starts. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit  Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit.",
  },
  {
    id: 5,
    process: "Step 5",
    image: image2,
    text: "Step 5: Settlement amount is finalized. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit  Lorem ipsum dolor sit amet, consectetur adipisicing elit adipisicing elit consectetur adipisicing elit.  ",
  },
  {
    id: 6,
    process: "Step 6",
    image: image3,
    text: "Step 6: Claim amount is credited to your account. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit  Lorem ipsum dolor sit amet, consectetur adipisicing elit  adipisicing elit consectetur adipisicing elit.",
  },
];

const InsuranceClamNew = () => {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center rounded-[20px] bg-akti-white p-10">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
        <div className="w-full flex justify-center items-center">
          <img
            src={steps[activeStep].image}
            alt="Insurance Step"
            className="rounded-2xl w-full max-h-80 object-fill object-center"
          />
        </div>

        <div className="w-full flex flex-col gap-4 text-center lg:text-start">
          <h2 className="text-2xl lg:text-5xl font-bold mb-4">
            How to Claim Insurance <br />
            Online with AKTI?
          </h2>
          <p className="text-gray-700 text-base">{steps[activeStep].text}</p>
        </div>
      </div>

      <div className="w-full mt-12 flex flex-col items-center">
        <div className="relative flex items-center justify-between w-full">
          <div className="absolute top-[12px] left-3 right-3  h-[2px] bg-gray-300"></div>

          <div
            className="absolute top-[12px] left-3 h-[2px] bg-akti-burgundy transition-all duration-500"
            style={{
              width: `calc(${(activeStep / (steps.length - 1)) * 100
                }% - 0.75rem)`,
              maxWidth: "calc(100% - 1.5rem)",
            }}
          ></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col text-sm items-center cursor-pointer relative z-10"
              onClick={() => setActiveStep(index)}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center border-2
                    ${index === activeStep
                    ? "bg-black border-black text-white"
                    : index < activeStep
                      ? "bg-akti-burgundy border-akti-burgundy text-white"
                      : "bg-white border-gray-300 text-gray-400"
                  }`}
              ></div>
              <p
                className={`mt-2 text-sm ${index === activeStep
                  ? "font-bold text-black"
                  : "text-gray-600"
                  }`}
              >
                {step.process}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center items-center gap-4 mt-6">
          <button
            onClick={prevStep}
            disabled={activeStep === 0}
            className="w-10 h-10 rounded-full border-2 border-akti-burgundy flex items-center justify-center disabled:opacity-40"
          >
            <MdArrowBack size={20} className="text-akti-burgundy font-bold" />
          </button>
          <button
            onClick={nextStep}
            disabled={activeStep === steps.length - 1}
            className="w-10 h-10 rounded-full border-2 border-akti-burgundy flex items-center justify-center disabled:opacity-40"
          >
            <MdArrowForward
              size={20}
              className="text-akti-burgundy font-bold"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsuranceClamNew;
