import React from "react";
import About from "../../Components/About/About";
import { Hero } from "../../Components/Hero/Hero";
import MidHome from "../../Components/Midhome/MidHome";
import ServiceSection from "../../Components/ServiceSection/ServiceSection";
import Feature from "../../Components/Feature/Feature";
import DoctorsSection from "../../Components/DoctorsSection/DoctorsSection";
import FAQSection from "../../Components/FAQSection/FAQSection";
import Testimonial from "../../Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <MidHome />
      <About />
      <ServiceSection />
      <Feature />
      <DoctorsSection />
      <FAQSection />
      <Testimonial />
    </>
  );
};

export default Home;
