import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegSmileWink } from "react-icons/fa";

const PaymentSuccess = () => {
  return (
    <div className="max-w-4xl py-40 mx-auto p-6 text-center bg-white rounded-2xl shadow-lg space-y-5">
      {/* Header */}
      <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
        <span role="img" aria-label="party">
          🎉
        </span>{" "}
        Thank You for Your Payment!
      </h2>

      {/* Payment Details */}
      <div className="text-sm text-gray-700 space-y-1">
        <p className="flex items-center justify-center gap-2 text-green-600 font-medium">
          <FaCheckCircle /> Starter Package — ₦300,000
        </p>
        <p>
          Invoice ID: <span className="font-medium">SDD-30201-CLIENTNAME</span>
        </p>
        <p>
          Confirmation sent to:{" "}
          <span className="font-medium">sandra@email.com</span>
        </p>
      </div>

      {/* CTA */}
      <div className="inline-flex items-center gap-8">
        <p className="text-sm text-gray-800">
          Book your kickoff session here →
        </p>
        <a
          href="#"
          className="inline-block bg-[#00ead4] text-black font-medium py-2 px-4 rounded-md hover:bg-cyan-600 transition"
        >
          Schedule Strategy Call
        </a>
      </div>

      {/* Help Info */}
      <div className="text-xs text-gray-500 space-y-1 mt-4">
        <p>Need help?</p>
        <p>
          Email us at{" "}
          <a
            href="mailto:hello@50diamonds.com"
            className="text-gray-700 font-medium underline"
          >
            hello@50diamonds.com
          </a>
        </p>
        <p>
          or{" "}
          <a href="#" className="text-gray-700 font-medium underline">
            WhatsApp us directly
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
