import React from "react";
import image from "../../assets/hero/WorkVisa.jpg";
import AboutCompany from "./AboutCompany ";
import AboutSevices from "./AboutSevices";
import AboutConsultants from "./AboutConsultants";
const AboutHeroSection = () => {
  return (
    <>
      <div
        className="relative w-full h-94 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${image})`,
        }}
      >
        <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16">
          <h1 className="text-6xl md:text-7xl font-bold text-white text-center">
            About
          </h1>
        </div>
      </div>

      <AboutCompany />
      <AboutSevices />
      <AboutConsultants />
    </>
  );
};

export default AboutHeroSection;
