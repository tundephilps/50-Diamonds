import React from "react";
import Woman from "../../assets/Woman.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-white  py-40 lg:py-40">
      <div className="  grid md:grid-row-2 gap-10 items-center">
        {/* Text Content */}
        <div className="lg:px-12 px-4 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Turn Your Business Dreams into Reality
          </h1>
          <p className="mt-4 text-gray-600">
            Helping everyday people launch successful ventures — from idea to
            execution.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link to="/ContactUs">
              <button className="bg-cyan-400 hover:bg-cyan-500 text-black px-5 py-2 rounded-md font-medium text-sm">
                Book Free Call
              </button>
            </Link>
            <Link to="/Services">
              <button className="bg-[#EDEDED] border border-gray-300 hover:border-gray-500 text-black px-5 py-2 rounded-md font-medium text-sm">
                Discover Our Services
              </button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="w-full ">
          <img
            src={Woman}
            alt="Business woman at laptop"
            className="rounded-lg shadow-md  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
