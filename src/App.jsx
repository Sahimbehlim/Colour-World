import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="font-manrope bg-white">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default App;
