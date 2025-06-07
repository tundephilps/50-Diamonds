import { FaRocket, FaBuilding, FaUsers, FaGlobe } from "react-icons/fa";
import Vector1 from "../../assets/Vector1.png";

import Vector2 from "../../assets/Vector2.png";
import Vector3 from "../../assets/Vector3.png";
import Vector4 from "../../assets/Vector4.png";

const services = [
  {
    title: "From Idea to Income",
    description:
      "We’ll refine your business concept, build your structure, and get you launch-ready.",
    icon: <img src={Vector1} className="text-white" />,
    bg: "bg-[#f0f0f0]",
    iconBg: "bg-[#00ff85]",
  },
  {
    title: "Register Your Business",
    description:
      "CAC name search, approval, and company incorporation handled from start to finish.",
    icon: <img src={Vector2} className="text-white" />,
    bg: "bg-[#faffba]",
    iconBg: "bg-black",
  },
  {
    title: "HR & Talent Setup",
    description:
      "Clear job roles, vetted hires, and HR policies to grow your business with ease.",
    icon: <img src={Vector3} className="text-white" />,
    bg: "bg-[#ffeeee]",
    iconBg: "bg-black",
  },
  {
    title: "Web Presence & SEO",
    description:
      "Your brand deserves visibility. We create responsive websites and rank you on Google.",
    icon: <img src={Vector4} className="text-white" />,
    bg: "bg-gray-100",
    iconBg: "bg-black",
  },
];

export default function ServicesHighlight() {
  return (
    <section className="px-4 py-12 lg:px-12 mx-auto">
      <p className="text-sm text-gray-500 mb-2">Service Highlights</p>
      <div className="flex justify-between items-start flex-wrap md:flex-nowrap">
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl max-w-2xl font-bold mb-4">
            Need a business boost? These are the power moves we deliver fast —
            from paperwork to presence, we’ve got your back.
          </h2>
        </div>
        <button className="bg-[#ededed] text-black text-xs font-semibold px-6 py-2 rounded-md hover:bg-gray-300">
          Learn More
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {services.map((service, index) => (
          <div key={index} className={`p-6 rounded-lg ${service.bg}`}>
            <div
              className={`p-2 w-12 flex items-center justify-center rounded-md mb-4 ${service.iconBg}`}
            >
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
