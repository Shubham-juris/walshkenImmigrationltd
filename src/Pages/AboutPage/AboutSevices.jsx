import React from "react";
// import businessVisa from "../../assets/services/business.jpg"; // Replace with your image paths
// import studentVisa from "../../assets/services/student.jpg";
// import workVisa from "../../assets/services/work.jpg";
// import touristVisa from "../../assets/services/tourist.jpg";
import image from "../../Pages/../assets/hero/hero2.jpg";
import image2 from "../../assets/hero/home3.jpg";
const services = [
  {
    title: "Business Visa",
    description:
      "Sit amet consectetur bestibulu ullamcorer arcustulla amet dolor tortor elementum",
    image: image2,
  },
  {
    title: "Student Visa",
    description:
      "Sit amet consectetur bestibulu ullamcorer arcustulla amet dolor tortor elementum",
    image: image2,
  },
  {
    title: "Work Visa",
    description:
      "Sit amet consectetur bestibulu ullamcorer arcustulla amet dolor tortor elementum",
    image: image2,
  },
  {
    title: "Tourist Visa",
    description:
      "Sit amet consectetur bestibulu ullamcorer arcustulla amet dolor tortor elementum",
    image: image,
  },
];

const AboutSevices = () => {
  return (
    <>
      <section className="py-16 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Heading */}
          <p className="text-red-600 font-semibold text-sm uppercase mb-2">
            Service We Provide
          </p>
          <h2 className="text-4xl font-bold mb-10">
            Explore Our Visa Citizenship <br />& Immigration Services
          </h2>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {services.map((service, index) => (
              <div
                key={index}
                className=" p-6 flex flex-col justify-between shadow-sm hover:bg-red-600 hover:shadow-lg transition-all duration-300 rounded-lg"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-black-600 mb-4">
                    {service.description}
                  </p>
                </div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-md mt-4 bg-[#e4003a]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#e4003a] text-white py-26 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <p className="uppercase font-semibold tracking-widest text-sm">
              5M+ Trusted Our Clients
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-2 leading-tight">
              Most Experienced <br /> Our Services
            </h2>
            <p className="text-base mt-4 mb-8 max-w-md">
              Transmds is the world’s driving worldwide exchange the worldwide
              trade of
            </p>
            <button className="bg-white text-black font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition">
              Explore Our Service →
            </button>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-white text-[#e4003a] rounded-full p-4 mb-4 text-2xl"></div>
              <h3 className="text-3xl font-bold">35+</h3>
              <p className="mt-1 text-sm">Countries Represented</p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center bg-[#d1002f] py-6 px-4 rounded-lg shadow">
              <div className="bg-white text-[#e4003a] rounded-full p-4 mb-4 text-2xl"></div>
              <h3 className="text-3xl font-bold">25K+</h3>
              <p className="mt-1 text-sm">Visa Delivery</p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-white text-[#e4003a] rounded-full p-4 mb-4 text-2xl"></div>
              <h3 className="text-3xl font-bold">99%</h3>
              <p className="mt-1 text-sm">Success Rate</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSevices;
