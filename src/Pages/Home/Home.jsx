import React from "react";
import About from "../../Components/About/About";
import { Hero } from "../../Components/Hero/Hero";
import MidHome from "../../Components/Midhome/MidHome";
import ServiceSection from "../../Components/ServiceSection/ServiceSection";

const Home = () => {
  return (
    <>
      <Hero />
      <MidHome />
      <About />
      <ServiceSection />
    </>
  );
};

export default Home;
