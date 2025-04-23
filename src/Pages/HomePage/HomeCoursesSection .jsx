import React from "react";
import heroBgImage from "../../assets/hero/studentVisa.jpg";
import heroBgImage1 from "../../assets/hero/AboutImage1.jpg";
import heroBgImage2 from "../../assets/hero/AboutImage2.jpg";
import heroBgImage3 from "../../assets/hero/AboutImage3.jpg";
import { FaCheckCircle } from "react-icons/fa";
import mainImage from "../../assets/hero/TouristVisa.jpg";
import smallImage from "../../assets/hero/home3.jpg";
const courses = [
  {
    title: "IELTS Courses",
    description:
      "Our IELTS coaching is designed to help students achieve their desired band scores through expert-led training, flexible schedules, and a focus on all four modules—listening, reading, writing, and speaking. We provide updated study materials, mock tests, and personalized feedback to boost your confidence and performance., with flexible schedules, expert instructors, and personalized practice materials to ensure high band scores.",
    image: heroBgImage,
  },
  {
    title: "Citizenship Test",
    description:
      "Prepare for your Citizenship Test with our structured coaching that covers essential topics like government systems, civic responsibilities, and national history. Our experienced instructors guide you through practice tests and key concepts to ensure you're ready with knowledge and confidence on exam day.",
    image: heroBgImage1,
  },
  {
    title: "TOFEL Coaching",
    description:
      "Our TOEFL coaching program is designed to strengthen your skills in reading, listening, speaking, and writing. With focused practice tests, expert strategies, and individual guidance, we help you meet your academic or immigration goals with a higher score and improved confidence",
    image: heroBgImage2,
  },
  {
    title: "OET Coaching",
    description:
      "Our OET coaching is tailored for healthcare professionals, focusing on the language skills needed for success in real workplace scenarios, with expert trainers, role-play practice, and test-specific strategies for all four sub-tests.",
    image: heroBgImage3,
  },
];
const HomeCoursesSection = () => {
  return (
    <>
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="relative w-full md:w-1/2">
            <img
              src={mainImage}
              alt="Main"
              className="rounded-md w-full h-auto object-cover"
            />
            <img
              src={smallImage}
              alt="Small"
              className="absolute -bottom-10 left-10 w-2/3 rounded-md shadow-xl border-4 border-white"
            />
          </div>

          <div className="w-full md:w-1/2">
            <p className="text-LG text-red-600 font-semibold uppercase mb-2">
              About Company
            </p>
            <h2 className="text-4xl font-bold leading-tight mb-4">
              Welcome To Experience <br />
              Visa Consulting Firm
            </h2>
            <p className="text-gray-600 mb-6">
              Transmds is the world’s driving worldwide coordinations supplier —
              we uphold industry and exchange the worldwide trade of merchandi
            </p>

            <div className="flex gap-10 mb-6">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full border-4 border-red-500 flex items-center justify-center text-2xl font-bold text-black">
                  100%
                </div>
                <p className="mt-2 font-semibold">Business Strategy</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full border-4 border-red-500 flex items-center justify-center text-2xl font-bold text-black">
                  99%
                </div>
                <p className="mt-2 font-semibold">Real Technology Solutions</p>
              </div>
            </div>

            <ul className="space-y-3 mb-6 text-gray-800 font-medium">
              <li className="flex items-center">
                <FaCheckCircle className="text-red-500 mr-2" />
                Immigration & Visa Consulting
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-red-500 mr-2" />
                Direct Online Interview
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-red-500 mr-2" />
                99% Visa Approvals
              </li>
            </ul>

            <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded hover:bg-gray-700 transition duration-200">
              About Us →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCoursesSection;
