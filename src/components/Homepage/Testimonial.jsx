import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Face1 from "../../assets/Face1.png";

import Face2 from "../../assets/Face2.png";
import Face3 from "../../assets/Face3.png";

const testimonials = [
  {
    name: "Ada O.",
    role: "Fashion Brand Owner",
    message:
      "I had an idea, they gave me a business. Within a month, I was making sales!",
    avatar: Face1,
  },
  {
    name: "David I.",
    role: "Tech Startup Founder",
    message:
      "50Diamonds helped me register my company, design my logo, and create a website — in just two weeks!",
    avatar: Face2,
  },
  {
    name: "Nancy B",
    role: "Bakery Owner",
    message:
      "Their HR templates and advice helped me scale my staff from 1 to 7 in 3 months.",
    avatar: Face3,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="py-16 px-4 bg-cover bg-center text-white"
      style={{ backgroundImage: `url('/Tiles.png')` }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-gray-400 mb-2">
          What Our Clients Are Saying
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Real people. Real businesses. Real results.
        </h2>

        {/* Carousel Nav */}
        <div className="flex justify-center space-x-4 mb-8">
          <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full">
            <FaChevronLeft />
          </button>
          <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full">
            <FaChevronRight />
          </button>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-gray-600 rounded-lg p-6 bg-black/50 backdrop-blur-sm"
            >
              <div className="flex space-x-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sm mb-6 text-start">{t.message}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
