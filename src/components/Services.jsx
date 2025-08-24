import React from "react";
import data from "../../data/data.json";

const Services = () => {
  return (
    <div
      id="services"
      className="bg-[#F9F9F9] px-4 sm:px-6 lg:px-16 pt-12 sm:pt-16 pb-8 sm:pb-10 flex flex-col"
    >
      <div className="flex flex-col justify-center items-center text-center gap-2">
        <p className="text-[#D4AF37] text-sm sm:text-base">Our Services</p>
        <h2 className="text-[#1A1A1A] font-playfair font-semibold text-3xl sm:text-4xl lg:text-5xl max-w-screen-md leading-tight px-4">
          Comprehensive Construction & Interior Solutions
        </h2>
        <p className="text-[#404040] text-base sm:text-lg pt-2 px-4 max-w-2xl">
          We offer a wide range of services to meet all your construction and
          interior needs, all under one roof.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16">
        {data[0].services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg border border-[#E5E7EB] shadow-serviceBox flex flex-col gap-3 sm:gap-2 p-4 sm:p-6"
          >
            <div className="bg-[#1E3A8A1A] rounded-lg border border-[#E5E7EB] w-12 h-12 sm:w-16 sm:h-16 flex justify-center items-center">
              <img
                src={service.icon}
                alt="service-icon"
                className="w-6 h-6 sm:w-auto sm:h-auto"
              />
            </div>
            <p className="text-[#333333] text-base sm:text-lg font-medium">
              {service.type}
            </p>
            <p className="text-[#404040] text-sm sm:text-base leading-5 sm:leading-6">
              {service.desc}
            </p>
            <a href="#" className="flex gap-2 w-max mt-auto pt-2">
              <p className="text-[#1E3A8A] text-sm sm:text-base font-medium">
                Learn more
              </p>
              <img
                src="/arrow.svg"
                alt="arrow-logo"
                className="w-4 h-4 sm:w-auto sm:h-auto"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
