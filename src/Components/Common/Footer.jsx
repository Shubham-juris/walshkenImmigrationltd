import { FaFacebookF, FaTwitter, FaVimeoV, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#15161a] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-center text-center">
        <div>
          <div className="flex justify-center items-center mb-4">
            <NavLink to="/" className="flex items-center space-x-2">
              <span className="text-red-600 text-2xl">🌐</span>
              <h1 className="text-xl font-bold">
                Walshken<span className="text-red-600">Immigration</span>
              </h1>
            </NavLink>
          </div>
          <p className="text-gray-400 mb-6">
            Your trusted partner for IELTS, TOEFL, PTE coaching & Citizenship
            Test preparation, guiding you every step of the way to global
            success.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-lg bg-gray-800 hover:bg-blue-600 p-2 rounded-full w-10 h-10 cursor-pointer transform hover:scale-110 transition-transform duration-200 ease-in-out" />
            </a>
            <a
              href="https://www.twitter.com "
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-lg bg-gray-800 hover:bg-blue-500 p-2 rounded-full w-10 h-10 cursor-pointer transform hover:scale-110 transition-transform duration-200 ease-in-out" />
            </a>
            <a
              href="https://www.vimeo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaVimeoV className="text-lg bg-gray-800 hover:bg-blue-700 p-2 rounded-full w-10 h-10 cursor-pointer transform hover:scale-110 transition-transform duration-200 ease-in-out" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-lg bg-gray-800 hover:bg-blue-700 p-2 rounded-full w-10 h-10 cursor-pointer transform hover:scale-110 transition-transform duration-200 ease-in-out" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Services</h2>
          <ul className="space-y-3 text-gray-400">
            {[
              "Canada Visa",
              "Japan Visa",
              "Spain Visa",
              "Germany Visa",
              "Italy Visa",
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-center items-center space-x-2 hover:text-red-600 cursor-pointer"
              >
                <span>»</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Contact</h2>
          <p className="text-gray-400 mb-2">
            Phone: <br /> +1 718-904-4450
          </p>
          <p className="text-gray-400 mb-2">
            Email: <br /> info@visaland.com
          </p>
          <p className="text-gray-400">
            Address: <br />
            123 Main St, City, Country
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Newsletters</h2>
          <p className="text-gray-400 mb-4">
            Sign Up For News & Get 30% Off Your Next Course.
          </p>
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full px-4 py-3 rounded bg-gray-100 text-black mb-4 focus:outline-none"
          />
          <button className="w-full py-3 bg-red-600 hover:bg-red-700 rounded font-semibold">
            Subscribe Now
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
