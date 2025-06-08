import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="lg:px-12 mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        {/* <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-gray-600 rounded-sm rotate-45"></div>
          <span className="font-semibold text-sm">Consulting</span>
        </div> */}
        <Link to="/">
          <img src={Logo} />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm text-gray-800">
          <Link to="/" className="hover:text-cyan-500 cursor-pointer">
            Home
          </Link>
          <Link to="/Services" className="hover:text-cyan-500 cursor-pointer">
            Services
          </Link>
          <Link to="/Team" className="hover:text-cyan-500 cursor-pointer">
            Team
          </Link>
          <Link to="/Pricing" className="hover:text-cyan-500 cursor-pointer">
            Packages
          </Link>
        </ul>

        {/* Contact Us Button */}
        <Link to="/ContactUs">
          <button className="hidden md:block bg-[#00DAE4] hover:bg-cyan-500 text-[#0C0C0C] font-semibold text-sm px-6 py-2 rounded-md">
            Contact Us
          </button>
        </Link>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-700 text-xl"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow-md">
          <ul className="space-y-2 text-sm text-gray-800">
            <li className="hover:text-cyan-500 cursor-pointer">Home</li>
            <li className="hover:text-cyan-500 cursor-pointer">Services</li>
            <li className="hover:text-cyan-500 cursor-pointer">Team</li>
            <li className="hover:text-cyan-500 cursor-pointer">Packages</li>
          </ul>
          <button className="mt-2 w-full bg-cyan-400 hover:bg-cyan-500 text-white text-sm px-4 py-2 rounded">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
