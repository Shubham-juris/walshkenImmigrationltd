import React from "react";
import PageCourseCards from "./PageCourseCards";

const PageHeroSection = () => {
  const coachingData = [
    {
      title: "IELTS Courses",
      description: "Sit amet conse bestibulume ullamcorper nulla amet",
      image: "/images/ielts.webp",
      icon: "/icons/cap.svg",
      isActive: false,
    },
    {
      title: "Citizenship Test",
      description: "Sit amet conse bestibulume ullamcorper nulla amet",
      image: "/images/citizenship.webp",
      icon: "/icons/citizenship.svg",
      isActive: true,
    },
    {
      title: "TOFEL Coaching",
      description: "Sit amet conse bestibulume ullamcorper nulla amet",
      image: "/images/tofel.webp",
      icon: "/icons/tofel.svg",
      isActive: false,
    },
    {
      title: "OET Coaching",
      description: "Sit amet conse bestibulume ullamcorper nulla amet",
      image: "/images/oet.webp",
      icon: "/icons/oet.svg",
      isActive: false,
    },
  ];

  return (
    <>
      <div
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(/path-to-your-image.webp)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>

        <div className="relative z-10 w-full max-w-7xl flex justify-between items-center px-4 sm:px-8 md:px-20 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Coaching
          </h1>
          <p className="text-sm sm:text-base text-right">
            <span className="font-semibold">Home</span> &nbsp;—&nbsp; Coaching
          </p>
        </div>
      </div>

      <div className="bg-gray-100 py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coachingData.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 text-center shadow-md transition-all duration-300 ${
                item.isActive ? "bg-red-600 text-white" : "bg-white text-black"
              }`}
            >
              <div className="relative w-28 h-28 mx-auto mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-full"
                />
                <div
                  className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center ${
                    item.isActive ? "bg-white" : "bg-red-600"
                  }`}
                >
                  <img src={item.icon} alt="icon" className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <PageCourseCards />
    </>
  );
};

export default PageHeroSection;
