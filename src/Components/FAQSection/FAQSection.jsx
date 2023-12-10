import React from "react";
import faqImage from "../../assets/images/faq-img.png";
import FAQList from "../FAQList/FAQList";

const FAQSection = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-0">
          <div className="w-1/2 hidden md:block">
            <img src={faqImage} alt="" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="heading">Most questions by our customers</h2>
            <FAQList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
