import React from "react";
import heroImage01 from "../../assets/images/hero-img01.png";
import heroImage02 from "../../assets/images/hero-img02.png";
import heroImage03 from "../../assets/images/hero-img03.png";
export const Hero = () => {
  return (
    <section className="hero_section pt-[60px] 2xl:h-[800px] ">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
          {/* Content */}
          <div>
            <div className="lg:w-[570px]">
              <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                We help patients live a healthy, longer life
              </h1>
              <p className="text_para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                congue sapien vitae sem lacinia pellentesque. Fusce cursus
                dapibus tellus, vitae efficitur enim faucibus eget. In libero
                arcu, consequat dignissim ullamcorper vitae, luctus ac lorem.
              </p>
              <button className="btn">Request an Appointment</button>
            </div>
            {/*Hero counter */}
            <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                  30+
                </h2>
                <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                <p className="text_para">Years of Experience</p>
              </div>

              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                  15+
                </h2>
                <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                <p className="text_para">Clinic Locations</p>
              </div>

              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                  100%
                </h2>
                <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                <p className="text_para">Patient Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="flex gap-[30px] justify-end">
            <div>
              <img src={heroImage01} alt="hero image 01" className="w-full" />
            </div>

            <div className="mt-[30px]">
              <img
                src={heroImage02}
                alt="hero image 02"
                className="w-full mb-[30px]"
              />

              <img src={heroImage03} alt="hero image 03" className="w-full " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
