import React from "react";
import Term1 from "../assets/Term1.png";

import Term2 from "../assets/Term2.png";
import Term3 from "../assets/Term3.png";
import Term4 from "../assets/Term4.png";
import Term5 from "../assets/Term5.png";
import Term6 from "../assets/Term6.png";
import Term7 from "../assets/Term7.png";
import Term8 from "../assets/Term8.png";

export default function Terms() {
  const terms = [
    {
      icon: <img src={Term1} />,
      title: "Acceptance of Terms",
      content:
        "Please read these terms carefully before using our website or services.",
    },
    {
      icon: <img src={Term2} />,
      title: "Scope of Service",
      content:
        "50Diamonds provides consulting services including strategy, branding, HR setup, and web presence for startups and SMEs.",
    },
    {
      icon: <img src={Term3} />,
      title: "Payments & Refunds",
      content:
        "All payments must be made in full via our agreed payment plan before service commencement. Our service is 100% satisfaction guarantee but CAC filing payments are non-refundable.",
    },
    {
      icon: <img src={Term4} />,
      title: "Client Responsibilities",
      content:
        "Clients must provide accurate, timely information to ensure smooth service delivery. Delays caused by incomplete information are not the responsibility of SOOzarmonic.",
    },
    {
      icon: <img src={Term5} />,
      title: "Service Timelines",
      content:
        "Service timelines are estimates and may shift based on external factors (e.g., CAC delays, third-party dependencies). We'll keep you updated at every step.",
    },
    {
      icon: <img src={Term6} />,
      title: "Intellectual Property",
      content:
        "All creative logos and strategy documents created for clients are owned by the client after full payment. Clients cannot resell or showcase anonymized versions in our portfolio.",
    },
    {
      icon: <img src={Term7} />,
      title: "Limitation of Liability",
      content:
        "We are not liable for business losses, profit declines, or legal issues resulting from client misuse of our materials or services.",
    },
    {
      icon: <img src={Term8} />,
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
              <div className="mb-2">{term.icon}</div>

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
