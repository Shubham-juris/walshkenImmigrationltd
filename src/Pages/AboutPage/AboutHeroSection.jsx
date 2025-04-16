import React from "react";
import image from "../../assets/hero/hero2.jpg";
import AboutCompany from "./AboutCompany ";
import AboutSevices from "./AboutSevices";
import AboutConsultants from "./AboutConsultants";
const AboutHeroSection = () => {
  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay */}

        <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16">
          <h1 className="text-6xl md:text-6xl font-bold text-white">About</h1>
        </div>
      </div>
      <AboutCompany />
      <AboutSevices />
      <AboutConsultants />
    </>
  );
};

export default AboutHeroSection;
