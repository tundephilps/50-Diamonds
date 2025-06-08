import React from "react";
import { Link } from "react-router-dom";

export default function Story() {
  return (
    <div className=" py-16 lg:px-12 px-4">
      {/* Main Card */}
      <div className="rounded-lg bg-[#f0f0f0] border-2 grid lg:grid-cols-3 border-gray-200 lg:p-12 p-4  relative">
        {/* Contact Label */}
        <div className="flex justify-center">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            CONTACT
          </span>
        </div>

        {/* Main Content */}
        <div className="mt-4 w-full  col-span-2 lg:text-start text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight  ">
            Let's start building your unique story together.
          </h1>

          {/* Subtext */}
          <p className="text-lg text-gray-600 mb-8  mx-auto leading-relaxed">
            Stop waiting. Start building. With our tools, team, and tailored
            support — your business dream is closer than you think.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4  items-center">
            <Link to="/ContactUs">
              <button className="bg-[#00dae4] text-black px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 transition-colors duration-200 text-base">
                Start with a Free Call
              </button>
            </Link>

            <Link to="/Pricing">
              <button className="text-gray-700 px-8 py-4 font-medium hover:text-gray-900 transition-colors duration-200 text-base bg-white rounded-md">
                View Consulting Packages
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
