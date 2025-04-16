import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // ✅ use NavLink instead of Link
import { FaAngleDown, FaAngleRight, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/", dropdown: true },
    { label: "About", path: "/about" },
    { label: "Visa", path: "/visa", dropdown: true },
    { label: "Pages", path: "/pages", dropdown: true },
    { label: "Blog", path: "/blog", dropdown: true },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <span className="text-red-600 text-2xl">🌐</span>
          <h1 className="text-xl font-bold">
            Walshken<span className="text-red-600">Immigration</span>
          </h1>
        </NavLink>

        {/* Navigation */}
        <nav className="hidden lg:flex space-x-6 items-center">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive ? "text-red-600 font-semibold" : "text-black"
                  } hover:text-red-600`
                }
              >
                {item.label}
                {item.dropdown && (
                  <FaAngleDown className="inline ml-1 text-xs" />
                )}
              </NavLink>
            </div>
          ))}
        </nav>

        {/* Quote Button & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-5 py-3 rounded-md flex items-center space-x-2">
            <span>Get A Quote</span>
            <FaAngleRight />
          </button>
          <button
            className="lg:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md mt-2 px-4 pb-4">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `block py-2 border-b text-sm ${
                  isActive ? "text-red-600 font-semibold" : "text-gray-800"
                } hover:text-red-600`
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
