import {
  FaPaintBrush,
  FaBuilding,
  FaDollarSign,
  FaUsers,
  FaLaptop,
} from "react-icons/fa";
import Vector1 from "../../assets/Vector1.png";

import Vector2 from "../../assets/Vector2.png";
import Vector3 from "../../assets/Vector3.png";
import Vector4 from "../../assets/Vector4.png";
import HowItWorks from "../Homepage/HowItWorks";

const services = [
  {
    icon: <FaPaintBrush className="w-6 h-6 text-white" />,
    title: "Brand Identity & Logo Creation",
    features: [
      "2-3 logo concepts",
      "Brand guide with fonts, icons, and palette",
      "High-res files (SVG, PNG, PDF)",
    ],
  },
  {
    icon: <FaBuilding className="w-6 h-6 text-white" />,
    title: "Business Formation & Strategy",
    features: [
      "Business plan development",
      "CAC registration & legal docs",
      "Strategic business planning",
    ],
  },
  {
    icon: <FaDollarSign className="w-6 h-6 text-white" />,
    title: "Winning Pricing Models",
    features: [
      "Competitive market analysis",
      "Cost-value mapping",
      "Smart pricing templates",
    ],
  },
  {
    icon: <FaUsers className="w-6 h-6 text-white" />,
    title: "Human Resource Setup",
    features: [
      "Job description toolkit",
      "Recruitment pipeline advice",
      "Legal contracts and onboarding docs",
    ],
  },
  {
    icon: <FaLaptop className="w-6 h-6 text-white" />,
    title: "Digital Presence Package",
    features: [
      "Website (1—5 responsive pages)",
      "Custom domain + setup",
      "SEO starter package + Google indexing",
    ],
  },
];

export default function Results() {
  return (
    <section className="px-4 py-12 lg:px-12 mx-auto">
      <p className="text-sm text-gray-500 mb-2">Clarity, Structure, Results.</p>
      <div className="flex justify-between items-start flex-wrap md:flex-nowrap">
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl max-w-2xl font-bold mb-4">
            At 50Diamonds Consulting, we take the guesswork out of starting and
            scaling a business. Our services are tailored for ambitious
            entrepreneurs ready to transform ideas into sustainable income.
          </h2>
        </div>
        <button className="bg-[#ededed] text-black text-xs font-semibold px-6 py-2 rounded-md hover:bg-gray-300">
          Book Call Here
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {services.slice(0, 3).map((service, index) => (
          <div
            key={index}
            className="bg-[#f8f8f8] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Icon Container */}
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight">
              {service.title}
            </h3>

            {/* Features List */}
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="flex items-start text-sm text-gray-700"
                >
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Row - 2 Cards */}
      <div className="grid md:grid-cols-2 gap-6  mx-auto">
        {services.slice(3, 5).map((service, index) => (
          <div
            key={index + 3}
            className="bg-[#f0f0f0] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Icon Container */}
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight">
              {service.title}
            </h3>

            {/* Features List */}
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="flex items-start text-sm text-gray-700"
                >
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
