import React from "react";
import HowItWorks from "../components/Homepage/HowItWorks";
import Story from "../components/Homepage/Story";
import Team1 from "../assets/Team1.png";

import Team2 from "../assets/Team2.jpg";
import Team3 from "../assets/Team3.png";
import Team4 from "../assets/Team4.png";

export default function Teams() {
  const teamMembers = [
    {
      name: "Elijah Okojie",
      role: "Founder & CEO",
      image: Team1,
    },
    {
      name: "Tunde Akinola P.",
      role: "Software Engineer",
      image: Team2,
    },
    {
      name: "Chisom Nwabugwu",
      role: "Brand Identity",
      image: Team3,
    },
    {
      name: "Osaron Omoregbe",
      role: "Digital Specialist",
      image: Team4,
    },
  ];

  return (
    <div className="bg-white py-40 ">
      <div className="lg:px-12 px-4 mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet the Builders Behind the Vision
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Our team brings together business acumen, creativity, and execution.
            Each member is dedicated to turning your business goals into
            profitable outcomes.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className=" group">
              {/* Profile Image */}
              <div
                className="relative mb-6 overflow-hidden rounded-lg"
                data-aos="fade-down"
                data-aos-duration="3000"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>

              {/* Member Info */}
              <div className="space-y-1 inline-flex items-center justify-between w-full">
                <h3 className=" font-semibold text-xs text-gray-900 border-2 border-gray-600 rounded-full py-1 px-3">
                  {member.name}
                </h3>
                <p className="text-sm text-[#6d6d6d]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Work with Our Team?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss how our expertise can help transform your business
            vision into reality.
          </p>
          <button className="bg-[#00ead4] text-black px-8 py-3 rounded-lg font-medium hover:bg-cyan-600 transition-colors duration-200">
            Schedule a Strategy Call
          </button>
        </div>
      </div>

      <HowItWorks />
      <Story />
    </div>
  );
}
