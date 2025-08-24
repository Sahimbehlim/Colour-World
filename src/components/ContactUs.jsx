import React from "react";
import data from "../../data/data.json";

const ContactUs = () => {
  return (
    <div
      id="contact"
      className="bg-white px-4 sm:px-6 lg:px-16 pt-12 sm:pt-16 pb-8 sm:pb-12 flex flex-col lg:flex-row justify-between gap-8 lg:gap-10"
    >
      <div className="w-full lg:w-1/2 flex flex-col gap-2 items-start order-2 lg:order-1">
        <p className="text-[#D4AF37] text-sm sm:text-base">Contact Us</p>
        <h2 className="text-[#1A1A1A] font-playfair font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Let's Discuss Your Project
        </h2>
        <p className="text-[#404040] text-base sm:text-lg pt-2 max-w-lg leading-6">
          Ready to transform your space? Get in touch with our team to discuss
          your vision and how we can bring it to life.
        </p>

        <div className="flex flex-col gap-4 sm:gap-6 mt-6 items-start w-full">
          {data[0].contactUs.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-row gap-3 sm:gap-4 items-center justify-start w-full"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1E3A8A1A] border border-[#E5E7EB] rounded-full flex justify-center items-center flex-shrink-0">
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-5 h-5 sm:w-auto sm:h-auto"
                />
              </div>
              <div className="flex flex-col flex-1">
                <h4 className="text-[#333333] text-base sm:text-lg font-medium">
                  {item.title}
                </h4>
                <p className="text-[#404040] text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <form className="w-full lg:w-1/2 bg-[#F9F9F9] border border-[#E5E7EB] rounded-lg px-4 sm:px-6 py-6 sm:py-7 flex flex-col gap-4 sm:gap-6 order-1 lg:order-2">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-3">
          <div className="flex flex-col gap-1.5 flex-1">
            <label
              htmlFor="name"
              className="text-[#333333] text-sm sm:text-base font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-white border border-[#DADADA] rounded-md focus:outline-none focus:border-[#1E3A8A] px-3 py-2.5 sm:py-2 text-sm sm:text-base"
            />
          </div>
          <div className="flex flex-col gap-1.5 flex-1">
            <label
              htmlFor="email"
              className="text-[#333333] text-sm sm:text-base font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-white border border-[#DADADA] rounded-md focus:outline-none focus:border-[#1E3A8A] px-3 py-2.5 sm:py-2 text-sm sm:text-base"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="phone"
            className="text-[#333333] text-sm sm:text-base font-medium"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className="bg-white border border-[#DADADA] rounded-md focus:outline-none focus:border-[#1E3A8A] px-3 py-2.5 sm:py-2 text-sm sm:text-base"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="service"
            className="text-[#333333] text-sm sm:text-base font-medium"
          >
            Service
          </label>
          <select
            id="service"
            className="bg-white border border-[#DADADA] rounded-md focus:outline-none focus:border-[#1E3A8A] px-3 py-2.5 sm:py-2 text-sm sm:text-base"
          >
            <option value="">Select a service</option>
            <option value="painting">Painting</option>
            <option value="waterproofing">Water Proofing</option>
            <option value="polishing">Polishing</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="message"
            className="text-[#333333] text-sm sm:text-base font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="bg-white border border-[#DADADA] rounded-md focus:outline-none focus:border-[#1E3A8A] px-3 py-2.5 sm:py-2 text-sm sm:text-base resize-none"
            placeholder="Tell us about your project..."
          />
        </div>
        <button className="bg-[#1E3A8A] border border-[#E5E7EB] text-white rounded-md py-3 sm:py-4 px-4 sm:px-6 hover:bg-transparent hover:border-[#1E3A8A] hover:text-[#1E3A8A] transition-all duration-300 text-sm sm:text-base font-medium">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
