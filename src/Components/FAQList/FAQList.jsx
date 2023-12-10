import React from "react";
import { faqs } from "../../assets/data/faqs";
import FAQItems from "../FAQItems/FAQItems";
const FAQList = () => {
  return (
    <ul className="mt-[38px]">
      {faqs.map((item, index) => (
        <FAQItems item={item} key={index} />
      ))}
    </ul>
  );
};

export default FAQList;
