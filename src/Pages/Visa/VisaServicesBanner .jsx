import React from "react";
import VisaBGImage from "../../assets/hero/BlogPageImg.jpg";
const VisaServicesBanner = () => {
  return (
    <div
      className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${VisaBGImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Services</h1>
      </div>
    </div>
  );
};

export default VisaServicesBanner;
