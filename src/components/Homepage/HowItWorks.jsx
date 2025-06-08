import React from "react";
import Card1 from "../../assets/Card1.png";
import Card2 from "../../assets/Card2.png";
import Card3 from "../../assets/Card3.png";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="lg:px-12 mx-auto px-4">
        <p className="text-sm uppercase text-gray-500">How It Works</p>
        <h2 className="text-3xl font-bold mt-2 mb-10">Our Process</h2>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {/* Step 1 */}
          <div className="flex flex-col ">
            <img
              src={Card1}
              alt="Strategy Call"
              className="rounded-lg shadow-lg w-full object-cover h-64"
            />
            <h3 className="text-xl font-semibold mt-6">Book a Strategy Call</h3>
            <p className="text-gray-600 mt-2">
              We understand your vision and tailor our services to fit your
              goals.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col ">
            <img
              src={Card2}
              alt="Get to Work"
              className="rounded-lg shadow-lg w-full object-cover h-64 bg-white"
            />
            <h3 className="text-xl font-semibold mt-6">We Get to Work</h3>
            <p className="text-gray-600 mt-2">
              From name registration to website design — we execute your launch
              roadmap.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col ">
            <img
              src={Card3}
              alt="Launch with Confidence"
              className="rounded-lg shadow-lg w-full object-cover h-64"
            />
            <h3 className="text-xl font-semibold text-start mt-6">
              You Launch with Confidence
            </h3>
            <p className="text-gray-600 mt-2">
              We support your rollout, marketing, and first hires with tools
              that scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
