import React from "react";
import {
  FaCheckCircle,
  FaCog,
  FaCreditCard,
  FaUser,
  FaClock,
  FaBrain,
  FaShieldAlt,
  FaEdit,
} from "react-icons/fa";

export default function Terms() {
  const terms = [
    {
      icon: <FaCheckCircle className="w-8 h-8 text-gray-700" />,
      title: "Acceptance of Terms",
      content:
        "Please read these terms carefully before using our website or services.",
    },
    {
      icon: <FaCog className="w-8 h-8 text-gray-700" />,
      title: "Scope of Service",
      content:
        "SOOzarmonic provides consulting services including strategy, branding, HR setup, and web presence for startups and SMEs.",
    },
    {
      icon: <FaCreditCard className="w-8 h-8 text-gray-700" />,
      title: "Payments & Refunds",
      content:
        "All payments must be made in full via our agreed payment plan before service commencement. Our service is 100% satisfaction guarantee but CAC filing payments are non-refundable.",
    },
    {
      icon: <FaUser className="w-8 h-8 text-gray-700" />,
      title: "Client Responsibilities",
      content:
        "Clients must provide accurate, timely information to ensure smooth service delivery. Delays caused by incomplete information are not the responsibility of SOOzarmonic.",
    },
    {
      icon: <FaClock className="w-8 h-8 text-gray-700" />,
      title: "Service Timelines",
      content:
        "Service timelines are estimates and may shift based on external factors (e.g., CAC delays, third-party dependencies). We'll keep you updated at every step.",
    },
    {
      icon: <FaBrain className="w-8 h-8 text-gray-700" />,
      title: "Intellectual Property",
      content:
        "All creative logos and strategy documents created for clients are owned by the client after full payment. Clients cannot resell or showcase anonymized versions in our portfolio.",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-gray-700" />,
      title: "Limitation of Liability",
      content:
        "We are not liable for business losses, profit declines, or legal issues resulting from client misuse of our materials or services.",
    },
    {
      icon: <FaEdit className="w-8 h-8 text-gray-700" />,
      title: "Changes to Terms",
      content:
        "We may update these terms periodically. Users will be notified of major changes via email or on this website.",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-40 px-4 lg:px-12">
      <div className=" mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Agreement With You
            </h1>
            <div className="text-right">
              <p className="text-sm text-gray-500">Last updated: May 2025</p>
            </div>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Please read these terms carefully before using our website or
            services.
          </p>
        </div>

        {/* Terms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {terms.map((term, index) => (
            <div
              key={index}
              className="border-4 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="mb-4">{term.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-bold text-black mb-3">
                {term.title}
              </h3>

              {/* Content */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {term.content}
              </p>
            </div>
          ))}
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 max-w-4xl mx-auto">
            These terms constitute the entire agreement between you and 50
            Diamonds regarding the use of our services. By engaging our
            services, you acknowledge that you have read, understood, and agree
            to be bound by these terms.
          </p>
        </div>
      </div>
    </div>
  );
}
