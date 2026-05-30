import Feature6 from "../Components/Feature6";
function Pricing() {
  return (
    <>
      <div className="flex flex-col items-center justify-center  my-10">
        <h2 className="font-bold text-4xl lg:text-6xl text-center ">Pricing</h2>
        <div className="grid grid-cols-1 mt-10  lg:grid-cols-3  mx-auto mb-15">
          <div className="flex text-center gap-2 flex-col border border-gray-400 p-10 lg:p-20">
            <h2 className="mt-5 text-xl lg:text-4xl hover:text-[#0aa8a7] ">
              Basic Plan
            </h2>
            <p>
              <span className="text-5xl font-bold">$49</span>/month
            </p>
            <p className="text-[#777777] text-xl">Best For Small Individuals</p>
            <p className="text-[#777777] ">Express Service</p>
            <p className="text-[#777777] ">Customs Clearance</p>
            <p className="text-[#777777] ">Time-Critical Services</p>
            <a href="#" className="bg-[#0aa8a7] text-center text-white font-bold w-fit rounded-4xl px-8 py-4 m-auto">
              Get Started
            </a>
          </div>

          <div className="flex flex-col gap-2  p-10 lg:p-20 text-center shadow-2xl">
            <h2 className=" mt-5 text-xl  lg:text-4xl hover:text-[#0aa8a7] ">
              Professional Plan
            </h2>
            <p>
              <span className="text-5xl font-bold">$69</span>/month
            </p>
            <p className="text-[#777777] text-xl">Best For Professionals</p>
            <p className="text-[#777777] ">Express Service</p>
            <p className="text-[#777777] ">Customs Clearance</p>
            <p className="text-[#777777] ">Time-Critical Services</p>
            <p className="text-[#777777] ">Cloud Service</p>
            <p className="text-[#777777] ">Best Dashboard</p>
            <a href="#" className="bg-[#0aa8a7] text-center text-white font-bold w-fit rounded-4xl px-8 py-4 m-auto" >
              Get Started
            </a>
          </div>

          <div className="flex flex-col p-10 lg:p-20 gap-2 text-center border border-gray-400 ">
            <h2 className="mt-5 text-xl lg:text-4xl hover:text-[#0aa8a7] ">
              Business Plan
            </h2>
            <p>
              <span className="text-5xl font-bold">$99</span>/month
            </p>
            <p className="text-[#777777] text-xl">Best For Large Individuals</p>
            <p className="text-[#777777] ">Express Service</p>
            <p className="text-[#777777] ">Customs Clearance</p>
            <p className="text-[#777777] ">Time-Critical Services</p>
            <a href="#" className="bg-[#0aa8a7] text-center text-white font-bold w-fit rounded-4xl px-8 py-4 m-auto" >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <Feature6 />
    </>
  );
}

export default Pricing;
