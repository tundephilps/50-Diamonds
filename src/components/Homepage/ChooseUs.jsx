import { FaLock, FaBrain, FaTrophy } from "react-icons/fa";

export default function ChooseUs() {
  return (
    <section className="px-4 py-12 lg:px-12 mx-auto">
      <p className="text-sm text-gray-500 mb-2">Why Choose Us</p>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="md:max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            We Don’t Just Consult. We Co-Create.
          </h2>
          <p className="text-gray-700 text-sm">
            Our clients don’t just get templates — they get tailored solutions,
            deep insight, and a hands-on team invested in their success. You’re
            not a ticket number; you’re a future success story.
          </p>
        </div>
        <button className="mt-6 md:mt-0 bg-cyan-400 hover:bg-cyan-500  text-xs text-black font-semibold px-6 py-2 rounded-md">
          Book Call Now!
        </button>
      </div>

      <div className="mt-10 bg-black text-white rounded-xl px-6 lg:px-32 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="flex flex-col text-start lg:border-b-0 border-b lg:pb-0 pb-8 border-gray-700">
          <FaLock className="text-4xl mb-2" />
          <p className="font-semibold text-4xl">
            Trusted by 100+ early-stage founders
          </p>
        </div>
        <div className="flex flex-col  text-start  lg:border-b-0 border-b lg:pb-0 pb-8 border-t-0 md:border-t-0 lg:border-l  md:border-r border-gray-700 lg:px-4 px-0">
          <FaBrain className="text-4xl mb-2 text-pink-400" />
          <p className="font-semibold text-4xl">
            12+ years of business launch experience
          </p>
        </div>
        <div className="flex flex-col text-start  lg:border-b-0 border-b lg:pb-0 pb-8 border-gray-700">
          <FaTrophy className="text-4xl mb-2 text-yellow-400" />
          <p className="font-semibold text-4xl">
            90% of clients start earning within 4-6 weeks
          </p>
        </div>
      </div>
    </section>
  );
}
