import React from "react";
import heroBgImage from "../../assets/hero/Studentvisa.jpg";
const courses = [
  {
    title: "IELTS Courses",
    description: "Sit amet conse bestibulume ullamcorper nulla amet",
    image: heroBgImage,
  },
  {
    title: "Citizenship Test",
    description: "Sit amet conse bestibulume ullamcorper nulla amet",
    image: heroBgImage,
  },
  {
    title: "TOFEL Coaching",
    description: "Sit amet conse bestibulume ullamcorper nulla amet",
    image: heroBgImage,
  },
  {
    title: "OET Coaching",
    description: "Sit amet conse bestibulume ullamcorper nulla amet",
    image: heroBgImage,
  },
];
const HomeCoursesSection = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      {courses.map((course, index) => (
        <div
          key={index}
          className="flex items-center p-6 rounded-lg shadow-md bg-white hover:bg-red-600 transition-colors duration-300 group"
        >
          <img
            src={course.image}
            alt={course.title}
            className="w-28 h-28 rounded-full object-cover mr-6"
          />
          <div>
            <h2 className="text-xl font-bold mb-2 group-hover:text-white">
              {course.title}
            </h2>
            <p className="mb-4 group-hover:text-white">{course.description}</p>
            <a
              href="#"
              className="font-semibold flex items-center group-hover:text-white"
            >
              Read More{" "}
              <span className="ml-2 w-6 h-6 rounded-full bg-red-600 group-hover:bg-white text-white group-hover:text-red-600 flex items-center justify-center transition-colors duration-300">
                &gt;
              </span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCoursesSection;
