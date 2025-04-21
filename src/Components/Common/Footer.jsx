import { FaFacebookF, FaTwitter, FaVimeoV, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#15161a] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center mb-4">
            <span className="text-red-600 text-3xl mr-2">🌐</span>
            <h1 className="text-2xl font-bold">VISALAND</h1>
          </div>
          <p className="text-gray-400 mb-6">
            Quis autem veumure repreh volu tate velit esse niholestiae conseua
            veillum dolorem eum fugiat voluta.
          </p>
          <div className="flex space-x-4">
            <FaFacebookF className="text-lg bg-gray-800 hover:bg-red-600 p-2 rounded-full w-10 h-10 cursor-pointer" />
            <FaTwitter className="text-lg bg-gray-800 hover:bg-red-600 p-2 rounded-full w-10 h-10 cursor-pointer" />
            <FaVimeoV className="text-lg bg-gray-800 hover:bg-red-600 p-2 rounded-full w-10 h-10 cursor-pointer" />
            <FaLinkedinIn className="text-lg bg-gray-800 hover:bg-red-600 p-2 rounded-full w-10 h-10 cursor-pointer" />
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
                className="flex items-center space-x-2 hover:text-red-600 cursor-pointer"
              >
                <span>»</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Instagram</h2>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((img) => (
              <div key={img} className="w-full h-20 bg-gray-700"></div>
            ))}
          </div>
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
