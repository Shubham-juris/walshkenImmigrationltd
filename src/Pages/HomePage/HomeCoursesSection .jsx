import React from "react";
import heroBgImage from "../../assets/hero/Studentvisa.jpg";
import heroBgImage1 from "../../assets/hero/AboutImage1.jpg";
import heroBgImage2 from "../../assets/hero/AboutImage2.jpg";
import heroBgImage3 from "../../assets/hero/AboutImage3.jpg";

const courses = [
  {
    title: "IELTS Courses",
    description: "Sit amet conse bestibulume ullamcorper nulla amet",
    image: heroBgImage,
  },
  {
    title: "Citizenship Test",
    description: "Sit amet conse bestibulume ullamcorper nulla amet",
    image: heroBgImage1,
  },
  {
    title: "TOFEL Coaching",
    description: "Sit amet conse bestibulume ullamcorper nulla amet",
    image: heroBgImage2,
  },
  {
    title: "OET Coaching",
    description: "Sit amet conse bestibulume ullamcorper nulla amet",
    image: heroBgImage3,
  },
];
const HomeCoursesSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-2">
        {courses.map((course, index) => (
          <div
            key={index}
            className=" h-73 flex items-center bg-white p-6 rounded-xl shadow-md hover:bg-red-600 transition-colors duration-300 group"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover mr-6 border-2 border-gray-200"
            />
            <div>
              <h2 className="text-lg sm:text-xl font-bold mb-1 group-hover:text-white">
                {course.title}
              </h2>
              <p className="text-sm text-gray-600 group-hover:text-white">
                {course.description}
              </p>
              <a
                href="#"
                className="mt-3 inline-block text-red-600 font-semibold hover:underline group-hover:text-white"
              >
                Read More <span className="ml-1">➜</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeCoursesSection;
