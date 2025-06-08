import React from "react";
import Lappy from "../../assets/Lappy.png";

const Hero = () => {
  return (
    <section className="bg-white  py-40 lg:py-40">
      <div className="  grid md:grid-row-2 gap-10 items-center">
        {/* Text Content */}
        <div className="lg:px-12 px-4 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            We Simplify the Complex Parts of Business
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Whether you're starting from scratch or pivoting to a new direction,
            our consulting helps you move forward with confidence and clarity.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="bg-cyan-400 hover:bg-cyan-500 text-black px-5 py-2 rounded-md font-medium text-sm">
              Book Free Call
            </button>
            <button className="bg-[#EDEDED] border border-gray-300 hover:border-gray-500 text-black px-5 py-2 rounded-md font-medium text-sm">
              Register
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full ">
          <img
            src={Lappy}
            alt="Business Lappy at laptop"
            className="rounded-lg shadow-md  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
