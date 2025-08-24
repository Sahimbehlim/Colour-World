import React from "react";
import data from "../../data/data.json";

const Footer = () => {
  return (
    <div className="bg-[#1A1A1A] px-4 sm:px-6 lg:px-16 pt-8 sm:pt-12 pb-4 sm:pb-6 flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between flex-wrap gap-8 sm:gap-10">
        <div className="flex flex-col gap-3 w-full sm:w-auto">
          <a href="#">
            <span className="sr-only">Your Company</span>
            <h2 className="font-playfair text-[#D4AF37] font-semibold text-xl sm:text-2xl">
              Colour <span className="text-white">World</span>
            </h2>
          </a>
          <p className="text-[#A3A3A3] text-sm sm:text-base leading-6 max-w-sm">
            Transforming spaces with precision, creativity, and uncompromising
            quality since 2010.
          </p>
          <div className="flex items-center gap-3 sm:gap-4 mt-2">
            {data[0].footer.social.map((item, idx) => (
              <a
                key={idx}
                href={item.path}
                className="bg-[#FFFFFF1A] h-10 w-10 sm:h-12 sm:w-12 rounded-full flex justify-center items-center hover:bg-[#FFFFFF2A] transition-colors duration-200"
              >
                <img
                  src={item.icon}
                  alt="social-icon"
                  className="w-5 h-5 sm:w-auto sm:h-auto"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full sm:w-auto">
          <h4 className="text-base sm:text-lg text-white font-medium">
            Quick Links
          </h4>
          <div className="flex flex-col gap-2 sm:gap-2.5">
            {data[0].footer.quickLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.path}
                className="text-[#A3A3A3] w-max text-sm sm:text-base hover:text-white transition-colors duration-200"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full sm:w-auto">
          <h4 className="text-base sm:text-lg text-white font-medium">
            Services
          </h4>
          <div className="flex flex-col gap-2 sm:gap-2.5">
            {data[0].footer.servicesLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.path}
                className="text-[#A3A3A3] w-max text-sm sm:text-base hover:text-white transition-colors duration-200"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#333333] gap-4 sm:gap-0">
        <p className="text-[#A3A3A3] text-xs sm:text-sm text-center sm:text-left">
          © 2023 Colour World. All rights reserved.
        </p>
        <div className="flex gap-4 sm:gap-6">
          <a
            href=""
            className="text-[#A3A3A3] text-xs sm:text-sm hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href=""
            className="text-[#A3A3A3] text-xs sm:text-sm hover:text-white transition-colors duration-200"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
