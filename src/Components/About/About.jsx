import React from "react";
import aboutImage from "../../assets/images/about.png";
import aboutCardImage from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
        <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
          <img src={aboutImage} alt="about Image" />
          <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22px]">
            <img src={aboutCardImage} alt="about card image" />
          </div>
        </div>

        <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
          <h2 className="heading">Proud to be one of the nations best.</h2>
          <p className="text_para">
            For 30+years in a row, Pakistan news and world report has recognize
            us as one of the best public hospitals in the Nation and #1 in
            Lahore.
          </p>
          <p className="text_para mt-[30px]">
            Our best is something we thrive for each day, caring for our
            patients-not looking back at what we accomplished but toward what we
            can do tommorow. Providing the best of the best in the bussiness.
          </p>
          <Link to="/">
            <button className="btn">Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
