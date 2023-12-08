import React from "react";
import ServicesList from "../../Components/ServicesList/ServicesList";
const ServiceSection = () => {
  return (
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center ">Our Medical Services</h2>
          <p className="text_para text-center">
            World-class care for everyone. Our health system offers unmatched,
            expert health care.
          </p>
        </div>
        <ServicesList />
      </div>
    </section>
  );
};

export default ServiceSection;
