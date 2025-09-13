import Cards from "./Cards";

const InsuranceType = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center py-8 text-white">
      <h1 className="text-5xl font-bold text-center">
        Types of <br /> insurance we have   
      </h1>
      <Cards />
    </div>
  );
};

export default InsuranceType;
