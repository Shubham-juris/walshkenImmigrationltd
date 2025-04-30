import React from "react";
const courseList = [
  {
    title: "IELTS Course",
    description: "We approached with complex project deliver",
    price: "$170",
    image: "/images/ielts-course.webp",
  },
  {
    title: "PTE Course",
    description: "We approached with complex project deliver",
    price: "$170",
    image: "/images/pte-course.webp",
  },
  {
    title: "TOEFL Course",
    description: "We approached with complex project deliver",
    price: "$190",
    image: "/images/toefl-course.webp",
  },
  {
    title: "GRE Course",
    description: "We approached with complex project deliver",
    price: "$190",
    image: "/images/gre-course.webp",
  },
];

const coachingData = [
  {
    title: "IELTS Courses",
    description: "Sit amet conse bestibulume ullamcorper nulla amet",
    image: "/images/ielts.webp",
  },
  {
    title: "Citizenship Test",
    description: "Sit amet conse bestibulume ullamcorper nulla amet",
    image: "/images/citizenship.webp",
  },
  {
    title: "TOFEL Coaching",
    description: "Sit amet conse bestibulume ullamcorper nulla amet",
    image: "/images/tofel.webp",
  },
  {
    title: "OET Coaching",
    description: "Sit amet conse bestibulume ullamcorper nulla amet",
    image: "/images/oet.webp",
  },
];
const PageCourseCards = () => {
  return (
    <>
      <div className="bg-white py-16 px-4 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {courseList.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-red-600 text-white text-sm font-semibold px-4 py-1 rounded-tl-full rounded-br-xl">
                  {course.price}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {course.description}
                </p>
                <a
                  href="#"
                  className="text-red-600 font-semibold flex items-center gap-1"
                >
                  Read More <span className="text-xl">➡️</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {coachingData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white flex items-center rounded-xl shadow-md p-6 space-x-6"
            >
              <div className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <a
                  href="#"
                  className="text-red-600 font-semibold flex items-center"
                >
                  Read More
                  <span className="ml-1 text-lg">➡️</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PageCourseCards;
