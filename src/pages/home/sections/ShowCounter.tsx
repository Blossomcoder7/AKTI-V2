import Counter from "../../../components/animated/Counter";
import XSpacing from "../../../components/wrappers/XSpacing";

const ShowCounter = () => {
  return (
    <XSpacing>
      <div id="section2" className="w-full  py-12 rounded-4xl px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white py-3">
          <div>
            <h1 className="text-2xl lg:text-4xl  font-semibold">
              <Counter suffix="+" end={30} />
            </h1>
            <p className="mt-2  text-base ">Years of Experience</p>
          </div>

          <div>
            <h1 className="text-2xl lg:text-4xl  font-semibold">
              <span>$</span>
              <Counter end={1567} />
              <span>B+</span>
            </h1>
            <p className="mt-2 text-base ">Total Claims Paid</p>
          </div>

          <div>
            <h1 className="text-2xl lg:text-4xl   font-semibold">
              <Counter suffix="+" end={500} />
            </h1>
            <p className="mt-2 text-base ">Policies Sold Daily</p>
          </div>

          <div>
            <h1 className="text-2xl lg:text-4xl   font-semibold">
              <span>$</span>
              <Counter end={10} />
              <span>M+</span>
            </h1>
            <p className="mt-2 text-base ">Satisfied Clients</p>
          </div>
        </div>
      </div>
    </XSpacing>
  );
};

export default ShowCounter;
