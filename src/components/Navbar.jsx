"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { MdOutlineClose } from "react-icons/md";
import { RiMenu5Line } from "react-icons/ri";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#portfolio" },
  { name: "Testimonials", href: "#" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (href) => {
    // Close mobile menu
    setMobileMenuOpen(false);

    // Smooth scroll to target section
    if (href !== "#") {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav
        aria-label="Global"
        className="flex items-center justify-between py-4 px-6 lg:px-16 bg-white border-b border-[#E5E7EB] shadow-nav"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <h2 className="font-playfair text-[#D4AF37] font-semibold text-2xl">
              Colour <span className="text-[#1E3A8A]">World</span>
            </h2>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#1E3A8A]/90"
          >
            <span className="sr-only">Open main menu</span>
            <RiMenu5Line aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.href);
              }}
              className="text-sm/6 text-[#333333] font-manrope hover:text-[#1E3A8A] transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white py-4 px-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h2 className="font-playfair text-[#D4AF37] font-semibold text-2xl">
                Colour <span className="text-[#1E3A8A]">World</span>
              </h2>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-[#1E3A8A]/90"
            >
              <span className="sr-only">Close menu</span>
              <MdOutlineClose aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-3 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                    className="-mx-3 block px-3 py-1.5 text-base/7 text-[#333333] hover:bg-[#1E3A8A]/5 hover:text-[#1E3A8A] transition-colors duration-200 font-manrope"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
