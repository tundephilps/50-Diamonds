import React, { useState } from "react";
import { FaCheckCircle, FaCreditCard, FaWallet } from "react-icons/fa";
import { GoCreditCard } from "react-icons/go";
import {
  MdOutlineRadioButtonUnchecked,
  MdRadioButtonChecked,
} from "react-icons/md";
import { Link } from "react-router-dom";

const SelectedPackage = () => {
  const [paymentMethod, setPaymentMethod] = useState("paystack");

  return (
    <div className="lg:px-12 py-40  px-4 mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">
        Secure Your Spot — Pay for the Starter Package
      </h2>
      <div className="bg-[#f0f0f0] space-y-6 p-2">
        {/* Selected Plan */}
        <div className="border rounded-xl p-5 bg-white">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Selected Plan:</h3>
            <div className="inline-flex items-center gap-8">
              <span className="font-medium text-gray-600">
                Starter Package;
              </span>
              <span className="font-bold">₦300,000</span>
            </div>
          </div>
          <ul className="list-disc ml-6 text-sm text-gray-700">
            <li>Business name & Logo Design</li>
            <li>CAC Registration</li>
            <li>1-Hour Strategy Session</li>
          </ul>
          <p className="text-xs mt-2 text-gray-500">
            Need a different plan?{" "}
            <a href="#" className="text-cyan-500 underline">
              Switch Plan
            </a>
          </p>
        </div>

        {/* Your Details */}
        <div className="border rounded-xl p-5 bg-white space-y-4">
          <div className="flex items-center space-x-2 text-yellow-500">
            <FaCheckCircle />
            <span className="font-semibold text-black">Your Details</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-[#ededed]  border-gray-300 rounded px-4 py-2"
            />
            <input
              type="email"
              placeholder="Email Address"
              className=" w-full bg-[#ededed]  border-gray-300 rounded px-4 py-2"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className=" md:col-span-2 w-full bg-[#ededed]  border-gray-300 rounded px-4 py-2"
            />
            <textarea
              placeholder="Business Idea (optional)"
              className="w-full bg-[#ededed]  border-gray-300 rounded px-4 py-2 md:col-span-2"
              rows="3"
            />
          </div>
          <label className="inline-flex items-center text-sm text-gray-700 mt-2">
            <input type="checkbox" className="mr-2 " />I agree to the Terms &
            Privacy Policy.
          </label>
        </div>

        {/* Payment Method */}
        <div className="border rounded-xl p-5 bg-white space-y-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold inline-flex items-center gap-2">
              <GoCreditCard /> Choose Payment Method:
            </h3>
            <span className="font-bold">₦300,000</span>
          </div>
          {["paystack", "flutterwave", "stripe"].map((method) => (
            <label
              key={method}
              className="flex items-center space-x-2 cursor-pointer text-sm text-gray-800"
              onClick={() => setPaymentMethod(method)}
            >
              {paymentMethod === method ? (
                <MdRadioButtonChecked className="text-blue-600" />
              ) : (
                <MdOutlineRadioButtonUnchecked className="text-gray-400" />
              )}
              <span>
                {method === "paystack" && "Paystack"}
                {method === "flutterwave" && "Flutterwave"}
                {method === "stripe" && "Stripe (for international cards)"}
              </span>
            </label>
          ))}
          <Link to="/PaymentSuccess">
            <button className="w-full mt-4 bg-black text-white font-semibold py-3 rounded-xl hover:bg-gray-800 transition">
              Proceed to Secure Payment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Tailwind Input Styling
const inputClass =
  "w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500";

export default SelectedPackage;
