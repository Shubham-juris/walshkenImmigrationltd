import React from "react";

const VisaContactSection = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-[600px]">
      <div className="relative w-full lg:w-1/2 p-8">
        <div className="max-w-lg mx-auto">
          <p className="uppercase font-semibold tracking-wider text-center lg:text-left">
            Contact Us
          </p>
          <h2 className="text-4xl font-bold mb-8 text-center lg:text-left">
            Get A Call Back
          </h2>

          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 text-black rounded-md border-2 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-md text-black placeholder-gray-500 border-2 focus:outline-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 rounded-md text-black placeholder-gray-500 border-2 focus:outline-none"
              />
              <select className="w-full p-3 rounded-md text-black bg-white border-2 focus:outline-none">
                <option value="">Choose Services</option>
                <option value="tourist">Tourist Visa</option>
                <option value="work">Work Visa</option>
                <option value="student">Student Visa</option>
              </select>
            </div>

            <textarea
              placeholder="Write Your Message"
              rows={4}
              className="w-full p-3 rounded-md text-black placeholder-gray-500 border-2 focus:outline-none"
            />

            <button
              type="submit"
              className="bg-black hover:bg-red-600 transition-colors text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2"
            >
              Send Us Messages <span className="text-xl">→</span>
            </button>
          </form>
        </div>
      </div>

      <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095406!2d144.95373531531586!3d-37.81627997975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57778b2d3ec2a!2sEnvato!5e0!3m2!1sen!2sus!4v1614295254821!5m2!1sen!2sus"
          width="100%"
          height="100%"
          className="w-full h-full min-h-[600px] border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default VisaContactSection;
