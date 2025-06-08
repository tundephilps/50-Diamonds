import React, { useState } from "react";
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";

export default function FAQPage() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const faqs = [
    {
      id: 1,
      question:
        "How long does it take to launch my business with your Starter package?",
      answer:
        "Most clients are fully registered and ready to operate within 7-10 working days, depending on CAC approval speed",
    },
    {
      id: 2,
      question: "Can I pay in installments?",
      answer:
        "Yes, Our Growth and Elite packages allow flexible payment plans. Speak with us to arrange a custome schedule.",
    },
    {
      id: 3,
      question: "What if I don't have a business name yet?",
      answer:
        "No problem! We help you brainstorm and validate strong, avaliable names as part of our services.",
    },
    {
      id: 4,
      question: "What does the HR & Hiring Setup include?",
      answer:
        "Job Description, hiring templates, onboarding guides and advice on growing a lean but productive team.",
    },
    {
      id: 5,
      question: "Do you only work with Nigerian businesses?",
      answer:
        "While we specialize in Nigerian business registration and compliance, we work with entrepreneurs globally who want to establish their business presence in Nigeria. We also provide general business consulting services for international clients. However, our CAC registration and local compliance services are specifically for Nigerian business formation.",
    },
    {
      id: 6,
      question: "Is my information safe?",
      answer:
        "Absolutely. We take data privacy and security very seriously. All client information is kept strictly confidential and is protected by industry-standard security measures. We never share your business ideas, personal information, or proprietary details with third parties. We're also compliant with Nigerian data protection regulations.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white py-40 lg:px-12 px-4">
      <div className=" mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Find clarity on the most common inquiries. Still need help? Reach
            out to us directly.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-inset"
              >
                <div className="flex items-center space-x-4">
                  <BsQuestionCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-900 font-medium text-base md:text-lg pr-4">
                    {faq.question}
                  </span>
                </div>
                <div className="flex-shrink-0">
                  {openAccordion === faq.id ? (
                    <FaChevronUp className="w-4 h-4 text-gray-500" />
                  ) : (
                    <FaChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                </div>
              </button>

              {/* Accordion Content */}
              {openAccordion === faq.id && (
                <div className="px-6 pb-5">
                  <div className="pl-9">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-white rounded-lg p-8 shadow-sm ">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Didnt find your question?
          </h3>
          <p className="text-gray-600 mb-4">
            We're here to help! Get in touch with our team for personalized
            assistance.
          </p>
          <button className="bg-[#00dae4] text-black px-6 py-3 rounded-lg font-medium hover:bg-cyan-600 transition-colors duration-200">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
