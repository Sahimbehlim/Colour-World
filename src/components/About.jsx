import React from "react";
import data from "../../data/data.json";

const About = () => {
  return (
    <div
      id="about"
      className="bg-white px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row gap-8 lg:gap-10 justify-between"
    >
      <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[350px] lg:h-[400px] lg:max-w-[600px] shadow-about order-2 lg:order-1">
        <img
          src="/about.jpg"
          alt="about-img"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute -right-3 sm:-right-5 z-10 -bottom-3 sm:-bottom-5 bg-[#D4AF37] text-white shadow-about p-3 sm:p-4 flex flex-col gap-0.5 rounded-lg">
          <h3 className="text-2xl sm:text-3xl">10+</h3>
          <p className="text-xs sm:text-sm">Years of Excellence</p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-2 order-1 lg:order-2">
        <p className="text-[#D4AF37] text-sm sm:text-base">About Us</p>
        <h2 className="text-[#1A1A1A] font-playfair font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Creating Spaces That Inspire
        </h2>
        <p className="text-[#333333] text-base sm:text-lg pt-3 text-justify leading-[22px] sm:leading-[26px]">
          Colour World is a premier construction and interior company dedicated
          to transforming spaces with precision and creativity. We bring
          together expertise in civil work, interior design, and finishing to
          deliver complete solutions.
        </p>
        <p className="text-[#333333] text-base sm:text-lg pt-3 text-justify leading-[22px] sm:leading-[26px]">
          Our team of skilled professionals ensures that every project is
          executed with meticulous attention to detail, from structural
          integrity to aesthetic excellence.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 mt-6">
          {data[0].about.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-row gap-3 sm:gap-4 items-start w-full sm:w-auto"
            >
              <img
                src={item.icon}
                alt="icon"
                className="mt-2 sm:mt-3 w-6 h-6 sm:w-auto sm:h-auto"
              />
              <div className="flex flex-col flex-1">
                <h5 className="text-[#333333] text-base sm:text-lg font-medium">
                  {item.text}
                </h5>
                <p className="text-[#404040] text-sm sm:text-base leading-5 sm:leading-6">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
