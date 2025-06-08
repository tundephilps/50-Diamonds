import React from "react";
import {
  FaLock,
  FaEnvelope,
  FaChartPie,
  FaUserShield,
  FaShareAlt,
  FaInfoCircle,
  FaFileAlt,
  FaUserEdit,
} from "react-icons/fa";

export default function Privacy() {
  const privacyItems = [
    {
      icon: <FaLock size={24} className="text-gray-700" />,
      title: "What We Collect",
      content: (
        <>
          • Name, email, and phone number when you book a session or sign up.{" "}
          <br />• Business-related information you provide during consultation
          or onboarding.
        </>
      ),
    },
    {
      icon: <FaInfoCircle size={24} className="text-gray-700" />,
      title: "Why We Collect It",
      content: (
        <>
          • To deliver our services effectively. <br />
          • To communicate project updates and recommendations. <br />
          • To send invoices, receipts, and strategy follow-ups. <br />• To
          improve our platform experience.
        </>
      ),
    },
    {
      icon: <FaUserShield size={24} className="text-gray-700" />,
      title: "Data Protection",
      content:
        "We store all client data on secure, encrypted servers and restrict access to authorized personnel only.",
    },
    {
      icon: <FaShareAlt size={24} className="text-gray-700" />,
      title: "Sharing of Data",
      content:
        "We never sell or rent your information. Data is only shared with essential third-party services (e.g., payment gateways) under strict confidentiality.",
    },
    {
      icon: <FaEnvelope size={24} className="text-gray-700" />,
      title: "Email Communication",
      content:
        "You may receive emails related to your service, updates, or occasional tips. You can opt out anytime.",
    },
    {
      icon: <FaChartPie size={24} className="text-gray-700" />,
      title: "Cookies & Analytics",
      content:
        "Our website uses cookies and analytics tools to understand visitor behavior. This helps us improve user experience. You can disable cookies in your browser settings.",
    },
    {
      icon: <FaUserEdit size={24} className="text-gray-700" />,
      title: "Your Rights",
      content: (
        <>
          You can request to: <br />
          • Access your data <br />
          • Correct or update info <br />
          • Request deletion of your records <br />
          • Opt out of future emails <br />
          To do so, contact: <strong>privacy@50diamonds.com</strong>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white py-40 lg:px-12 px-4">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Your Privacy, Our Priority
            </h1>
            <p className="text-sm text-gray-500">Last updated: May 2025</p>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl">
            We’re committed to protecting your information and being transparent
            about how it’s used.
          </p>
        </div>

        {/* Privacy Tiles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {privacyItems.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 bg-white"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
