import React from "react";
import PageCourseCards from "./PageCourseCards";

const PageHeroSection = () => {
  const coachingData = [
    {
      title: "IELTS Courses",
      description: "Sit amet conse bestibulume ullamcorper nulla amet",
      image: "/images/ielts.jpg",
      icon: "/icons/cap.svg",
      isActive: false,
    },
    {
      title: "Citizenship Test",
      description: "Sit amet conse bestibulume ullamcorper nulla amet",
      image: "/images/citizenship.jpg",
      icon: "/icons/citizenship.svg",
      isActive: true,
    },
    {
      title: "TOFEL Coaching",
      description: "Sit amet conse bestibulume ullamcorper nulla amet",
      image: "/images/tofel.jpg",
      icon: "/icons/tofel.svg",
      isActive: false,
    },
    {
      title: "OET Coaching",
      description: "Sit amet conse bestibulume ullamcorper nulla amet",
      image: "/images/oet.jpg",
      icon: "/icons/oet.svg",
      isActive: false,
    },
  ];
  return (
    <>
      <h2>
        <div
          className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-between"
          style={{ backgroundImage: "url(/path-to-your-image.jpg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>

          <div className="relative z-10 px-8 md:px-20 text-white">
            <h1 className="text-5xl md:text-6xl font-bold">Coaching</h1>
          </div>

          <div className="relative z-10 px-8 md:px-20 text-white text-right ml-auto">
            <p className="text-sm md:text-base">
              <span className="font-semibold">Home</span> &nbsp;—&nbsp; Coaching
            </p>
          </div>
        </div>
      </h2>
      <div className="bg-gray-100 py-16 px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
                  className="w-28 h-28 object-cover rounded-full"
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
