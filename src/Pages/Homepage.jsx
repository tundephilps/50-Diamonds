import React from "react";
import HeroSection from "../components/Homepage/Hero";
import ServicesHighlight from "../components/Homepage/ServiceHighlights";
import ChooseUs from "../components/Homepage/ChooseUs";
import TestimonialsSection from "../components/Homepage/Testimonial";
import HowItWorks from "../components/Homepage/HowItWorks";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesHighlight />
      <ChooseUs />
      <TestimonialsSection />
      <HowItWorks />
    </div>
  );
};

export default Homepage;
