import React from "react";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Dr. Wasif Ahmed
          </span>
        </h3>
        <p className="text_para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis
          risus in arcu luctus rutrum. Phasellus purus turpis, rhoncus non
          posuere at, suscipit non libero. Nulla urna quam, semper vel nibh at,
          imperdiet porttitor risus. Aenean tortor est, luctus ut lectus et,
          posuere ullamcorper orci. Aliquam iaculis cursus erat eu imperdiet.
          Curabitur neque turpis, tempor vel purus sit amet, porttitor dictum
          metus. Nam nec dignissim sapien, vel iaculis eros. Nam molestie
          efficitur diam eget volutpat. Praesent pharetra a lorem lacinia
          vestibulum. Etiam vitae magna ullamcorper, fermentum lacus in,
          faucibus turpis. In hac habitasse platea dictumst. Donec sollicitudin
          eu turpis nec fringilla. Praesent commodo, nulla sit amet auctor
          porttitor, magna mauris rutrum nisl, ac posuere nunc nibh nec dolor.
          Aenean id facilisis ante. Curabitur velit mi, semper a est sed,
          molestie vestibulum purus. Integer faucibus nisi vel ipsum tincidunt,
          quis ultricies justo blandit.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold ">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                June 23, 2010
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PhD in Surgery
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Mount Adora Hospital, Sylhet.
            </p>
          </li>

          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                June 23, 2008
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                MBBS
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Mount Adora Hospital, Sylhet.
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold ">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              2015 - Present
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Mount Adora Hospital, Sylhet.
            </p>
          </li>

          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              2010 - 2015
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Mount Adora Hospital, Sylhet.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
