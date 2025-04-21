import React from "react";

const VisaServicesBanner = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1600x600')",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-8 md:px-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          Services
        </h1>
      </div>
    </div>
  );
};

export default VisaServicesBanner;
