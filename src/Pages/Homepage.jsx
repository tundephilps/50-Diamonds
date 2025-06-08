import React from "react";
import HeroSection from "../components/Homepage/Hero";
import ServicesHighlight from "../components/Homepage/ServiceHighlights";
import ChooseUs from "../components/Homepage/ChooseUs";
import TestimonialsSection from "../components/Homepage/Testimonial";
import HowItWorks from "../components/Homepage/HowItWorks";
import Story from "../components/Homepage/Story";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesHighlight />
      <ChooseUs />
      <TestimonialsSection />
      <HowItWorks />
      <Story />
    </div>
  );
};

export default Homepage;
