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
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-10">
      <div className="lg:px-12 px-4 mx-auto  grid md:grid-cols-4 gap-10 text-sm text-gray-700">
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
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/#" className="hover:underline">
                Video Stories
              </Link>
            </li>
            <li>
              <Link to="/Team" className="hover:underline">
                Our Team
              </Link>
            </li>
            <li>
              <Link to="/Pricing" className="hover:underline">
                Packages
              </Link>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h4 className="font-semibold mb-3">About Us</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/FAQ" className="hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/ContactUs" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/Terms" className="hover:underline">
                Terms of use
              </Link>
            </li>
            <li>
              <Link to="/Privacy" className="hover:underline">
                Privacy Policy
              </Link>
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
