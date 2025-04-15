import React from "react";
import hero2 from "../../assets/hero/hero2.jpg";
const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${hero2})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <p className="text-lg font-semibold mb-4">
          SOLUTIONS FOR ALL TYPE OF VISAS
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          APPLY FOR VISA <br /> IMMIGRATION
        </h1>
        <button className="mt-6  bg-red-600 hover:bg-green-600 transition px-6 py-3 rounded flex items-center text-white font-semibold">
          Explore Now
        </button>
      </div>
    </div>
  );
};
``
export default Hero;
