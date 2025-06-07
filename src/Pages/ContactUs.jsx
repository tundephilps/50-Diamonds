import React from "react";
import { FaPaperPlane } from "react-icons/fa";

import { HiMail, HiClock, HiChat, HiLocationMarker } from "react-icons/hi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="lg:px-12 my-40 mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-start mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Ready to Take the Next Step?
        </h2>
        <p className="mt-2 text-gray-600">
          We’re excited to hear about your ideas. Whether you have questions,
          want a strategy call, or just want to connect — we’re here.
        </p>

        <div className="mt-6 flex justify-start gap-4">
          <button className="bg-[#00ead4] hover:bg-cyan-600 text-black font-semibold py-2 px-4 rounded">
            Book Free Call
          </button>
          <button className="bg-[#ededed] hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded">
            Register!
          </button>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mb-20">
        <p className="text-left font-semibold mb-4">— Contact Us</p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full bg-[#ededed]  border-gray-300 rounded px-4 py-2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full bg-[#ededed]  border-gray-300 rounded px-4 py-2"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#ededed]  border-gray-300 rounded px-4 py-2"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-[#ededed]  border-gray-300 rounded px-4 py-2"
            />
          </div>
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full bg-[#ededed]  border-gray-300 rounded px-4 py-2"
          ></textarea>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full bg-black text-[#00ead4] py-3 rounded text-sm font-medium hover:bg-gray-900"
          >
            <FaPaperPlane />
            Send Your Message
          </button>
        </form>
      </div>
      {/* MAp */}

      <div
        className="relative w-full  mx-auto rounded-xl overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('./Map.png')", // Replace with your image path
          //   minHeight: "300px",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 py-8  lg:px-12 px-4 text-white">
          <div className="space-y-6">
            {/* Office Location */}
            <div className="flex items-start space-x-3">
              <HiLocationMarker className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Office Location</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Lagos, Nigeria (Virtual + Physical Sessions Available)
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3">
              <HiMail className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-gray-300 text-sm">hello@davereact.com</p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-start space-x-3">
              <HiClock className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Office Hours</h3>
                <p className="text-gray-300 text-sm">Mon - Fri, 9AM - 5PM</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start space-x-3">
              <HiChat className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-1">WhatsApp</h3>
                <p className="text-gray-300 text-sm">+234 903 240 9760</p>
              </div>
            </div>

            {/* Stay Connected */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 bg-opacity-50 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-4 h-4 text-gray-300 hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 bg-opacity-50 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-4 h-4 text-gray-300 hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 bg-opacity-50 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-4 h-4 text-gray-300 hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 bg-opacity-50 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="w-4 h-4 text-gray-300 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
