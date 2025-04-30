import React from "react";
import heroBgImage from "../../assets/hero/HeroBGImage.webp";
import HomeCoursesSection from "./HomeCoursesSection ";

const Hero = () => {
  return (
    <>
      <div
        className="relative w-full h-108 bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4 sm:px-8 max-w-2xl">
          <p className="text-lg font-semibold mb-4">
            SOLUTIONS FOR ALL TYPE OF VISAS
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            APPLY FOR VISA <br /> IMMIGRATION
          </h1>
          <button className="mt-6 bg-red-600 hover:bg-gray-600 transition-colors duration-300 px-6 py-3 rounded-md text-white font-semibold">
            Explore Now
          </button>
        </div>
      </div>
      <HomeCoursesSection />
    </>
  );
};

export default Hero;
