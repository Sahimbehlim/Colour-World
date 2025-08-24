import React from "react";
import data from "../../data/data.json";

const WhyChooseUs = () => {
  return (
    <div className="bg-[#1E3A8A] px-4 sm:px-6 lg:px-16 pt-12 sm:pt-16 pb-8 sm:pb-12 flex flex-col">
      <div className="flex flex-col justify-center items-center text-center gap-2">
        <p className="text-[#D4AF37] text-sm sm:text-base">Why Choose Us</p>
        <h2 className="text-white font-playfair font-semibold text-3xl sm:text-4xl lg:text-5xl max-w-screen-md leading-tight px-4">
          Our Commitment to Excellence
        </h2>
        <p className="text-white text-base sm:text-lg pt-2 px-4 max-w-2xl">
          We stand apart through our dedication to quality, innovation, and
          client satisfaction.
        </p>
      </div>

      <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {data[0].whyChooseUs.map((item, idx) => (
          <div
            key={idx}
            className="bg-transparent flex flex-col gap-3 sm:gap-4 text-center items-center justify-center p-4"
          >
            <div className="bg-[#FFFFFF1A] h-12 w-12 sm:h-16 sm:w-16 rounded-full flex justify-center items-center">
              <img
                src={item.icon}
                alt={item.title}
                className="w-6 h-6 sm:w-auto sm:h-auto"
              />
            </div>
            <h3 className="text-base sm:text-lg text-white pt-1 sm:pt-2 font-medium">
              {item.title}
            </h3>
            <p className="text-[#FFFFFFCC] text-sm sm:text-base leading-5 sm:leading-6">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
