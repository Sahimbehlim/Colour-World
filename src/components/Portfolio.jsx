import React from "react";
import data from "../../data/data.json";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="bg-white px-4 sm:px-6 lg:px-16 pt-12 sm:pt-16 pb-8 sm:pb-10 flex flex-col"
    >
      <div className="flex flex-col justify-center items-center text-center gap-2">
        <p className="text-[#D4AF37] text-sm sm:text-base">Our Portfolio</p>
        <h2 className="text-[#1A1A1A] font-playfair font-semibold text-3xl sm:text-4xl lg:text-5xl max-w-screen-md leading-tight px-4">
          Featured Projects
        </h2>
        <p className="text-[#404040] text-base sm:text-lg pt-2 px-4 max-w-2xl">
          Explore our diverse portfolio of completed projects spanning
          residential, commercial, and institutional spaces.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16">
        {data[0].portfolio.map((project, idx) => (
          <div
            key={idx}
            className="h-[250px] sm:h-[300px] lg:h-[350px] w-full rounded-lg overflow-hidden"
          >
            <img
              src={project.img}
              title={project.title}
              alt={project.title}
              className="h-full w-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer"
            />
          </div>
        ))}
      </div>

      <button className="px-4 sm:px-6 py-3 sm:py-4 border-2 rounded-md text-[#1E3A8A] bg-transparent border-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-all duration-300 mt-8 sm:mt-10 w-max mx-auto text-sm sm:text-base font-medium">
        View All Projects
      </button>
    </div>
  );
};

export default Portfolio;
