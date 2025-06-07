import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Soc1 from "../../assets/Soc1.png";
import Soc2 from "../../assets/Soc2.png";
import Soc3 from "../../assets/Soc3.png";
import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-10 text-sm text-gray-700">
        {/* Logo & Socials */}
        <div>
          <img src={Logo} className="mb-6" />
          <div className="flex space-x-4 mb-4 text-xl text-gray-600">
            <FaXTwitter className="cursor-pointer" />
            <img src={Soc1} className="cursor-pointer" />

            <img src={Soc2} className="cursor-pointer" />

            <img src={Soc3} className="cursor-pointer" />
          </div>
          <p className="mb-4 text-xs pt-6">
            Start your journey with a free strategy call.
          </p>
          <button className="px-4 py-2 bg-[#00bbc1] hover:bg-teal-700 text-black font-semibold rounded-md text-sm">
            Book Now
          </button>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Video Stories
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Packages
              </a>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h4 className="font-semibold mb-3">About Us</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-3">Contact Information</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <FaEnvelope className="mt-1 text-teal-600" />
              <span>Contact@5Gdiamonds.com</span>
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-teal-600" />
              <span>Lagos, Nigeria</span>
            </li>
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="mt-1 text-teal-600" />
              <span>+234 912 345 6789</span>
            </li>
            <li className="flex items-start gap-2">
              <FaClock className="mt-1 text-teal-600" />
              <span>Mon–Fri: 9 AM–5 PM (WAT)</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
