import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Pricing() {
  const packages = [
    {
      name: "Starter Package",
      price: "₦300,000",
      features: [
        "Business Name Ideas",
        "Logo Design (2 options)",
        "CAC Company Registration",
        "1-Hour Strategy Call",
      ],
      buttonText: "Choose Starter Plan",
      buttonClass: "bg-black text-white hover:bg-gray-800",
    },
    {
      name: "Growth Package",
      price: "₦500,000",
      features: [
        "Starter Package included",
        "HR Toolkit (templates, staff structure)",
        "2-Month Coaching Check-ins",
        "Pricing Strategy Session",
      ],
      buttonText: "Choose Growth Plan",
      buttonClass: "bg-black text-white hover:bg-gray-800",
    },
    {
      name: "Elite Package",
      price: "₦1,000,000",
      features: [
        "Starter + Growth Packages included",
        "Website (up to 5 pages)",
        "Domain + SEO Setup",
        "3-Month Premium Business Support",
      ],
      buttonText: "Choose Elite Plan",
      buttonClass: "bg-black text-white hover:bg-gray-800",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-40 lg:px-12 px-4">
      <div className=" mx-auto">
        {/* Header Section */}
        <div className="text-start mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose the Right Path for Your Business Journey
          </h1>
          <p className="text-lg text-gray-600  max-w-2xl leading-relaxed">
            Our packages are designed for impact — whether you're launching from
            scratch or scaling your operations. Transparent, flexible, and
            results-focused.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8  mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 relative hover:shadow-xl transition-shadow duration-300"
            >
              {/* Package Name */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {pkg.name}
                </h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {pkg.price}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 mb-6"></div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start space-x-3"
                  >
                    <FaCheck className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link to="/SelectedPackage">
                <button
                  className={`w-full py-3 px-6 text-[#00ead4] rounded-lg font-medium transition-colors duration-200 ${pkg.buttonClass}`}
                >
                  {pkg.buttonText}
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            All packages include consultation and ongoing support. Contact us
            for custom solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
