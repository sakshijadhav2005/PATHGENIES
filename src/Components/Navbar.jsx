import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
       <nav className="glass backdrop-blur-md bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 shadow-lg sticky top-0 z-50 p-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white text-2xl font-extrabold tracking-wide">
          <Link to="/" className="hover:scale-105 transform duration-200 hover:text-pink-400">
            Pathgenies
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <Link
            to="/"
            className="text-white text-lg font-medium hover:text-pink-400 hover:underline transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-lg font-medium hover:text-green-400 hover:underline transition duration-300"
          >
            About Us
          </Link>
         
          <button
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:shadow-lg hover:scale-105 transform transition duration-300"
          >
            Logout
          </button>
        </div>
      </nav>

     
    </>
  );
};

export default Navbar;
