import React from "react";
import DoctorsList from "../DoctorsList/DoctorsList";
const DoctorsSection = () => {
  return (
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center ">Our great doctors</h2>
          <p className="text_para text-center">
            World-class care for everyone. Our health system offers unmatched,
            expert health care.
          </p>
        </div>
        <DoctorsList />
      </div>
    </section>
  );
};

export default DoctorsSection;
