import { useNavigate } from 'react-router-dom';

import React from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
const navigate = useNavigate();

const goToNextPage = () => {
  navigate('/MCQ_P'); }

  return (
    <> 
    <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white flex flex-col items-center">
      {/* Header Section */}
      <header className="w-full text-center py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500 animate-pulse">
            Welcome to PathGenies
          </h1>
          <p className="text-xl text-gray-300 mt-6 leading-relaxed">
            <b>Revolutionize your workflows with intelligent, seamless, and cutting-edge tools. Your journey to excellence starts here.
            </b></p>
          <div className="mt-10">
            <button className="px-12 py-4 bg-gradient-to-r from-teal-500 to-purple-500 text-white font-semibold rounded-full shadow-xl hover:shadow-teal-500/50 transform hover:scale-110 transition duration-500" 
            onClick={goToNextPage}>
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Glowing Background Design */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-3xl -top-10 -left-10 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl top-40 right-10 animate-pulse"></div>
      </div>

      {/* Features Section */}
      <section className="py-20 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-7xl mx-auto px-8">
          {/* Feature Box 1 */}
          <div className="relative bg-gray-800/30 backdrop-blur-lg p-10 rounded-2xl shadow-2xl hover:shadow-teal-500/50 transform transition-all duration-300 hover:scale-105 border border-gray-700 group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-transparent opacity-0 group-hover:opacity-20 rounded-2xl transition-all duration-500"></div>
            <div className="flex items-center justify-center w-20 h-20 bg-teal-600 text-white rounded-full mb-6 mx-auto shadow-lg">
              <i className="fas fa-cogs text-3xl"></i>
            </div>
            <h2 className="text-3xl font-semibold text-gray-200 mb-4 group-hover:text-teal-400 transition duration-300">
              Smart Solutions
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Empower your workflows with solutions built for speed, reliability, and scalability.
            </p>
            {/* Progress Bar */}
            <div className="relative w-full bg-gray-700 rounded-full h-3 mb-4">
              <div
                className="bg-teal-500 h-3 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
            <p className="text-sm text-teal-400">Progress: 80%</p>
            <button className="mt-6 px-6 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              View
            </button>
          </div>

          {/* Feature Box 2 */}
          <div className="relative bg-gray-800/30 backdrop-blur-lg p-10 rounded-2xl shadow-2xl hover:shadow-blue-500/50 transform transition-all duration-300 hover:scale-105 border border-gray-700 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-transparent opacity-0 group-hover:opacity-20 rounded-2xl transition-all duration-500"></div>
            <div className="flex items-center justify-center w-20 h-20 bg-blue-600 text-white rounded-full mb-6 mx-auto shadow-lg">
              <i className="fas fa-sync-alt text-3xl"></i>
            </div>
            <h2 className="text-3xl font-semibold text-gray-200 mb-4 group-hover:text-blue-400 transition duration-300">
              Seamless Integration
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Simplify operations with effortless integrations for your tools.
            </p>
            {/* Progress Bar */}
            <div className="relative w-full bg-gray-700 rounded-full h-3 mb-4">
              <div
                className="bg-blue-500 h-3 rounded-full"
                style={{ width: "65%" }}
              ></div>
            </div>
            <p className="text-sm text-blue-400">Progress: 65%</p>
            <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              View
            </button>
          </div>

          {/* Feature Box 3 */}
          <div className="relative bg-gray-800/30 backdrop-blur-lg p-10 rounded-2xl shadow-2xl hover:shadow-purple-500/50 transform transition-all duration-300 hover:scale-105 border border-gray-700 group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-transparent opacity-0 group-hover:opacity-20 rounded-2xl transition-all duration-500"></div>
            <div className="flex items-center justify-center w-20 h-20 bg-purple-600 text-white rounded-full mb-6 mx-auto shadow-lg">
              <i className="fas fa-chart-line text-3xl"></i>
            </div>
            <h2 className="text-3xl font-semibold text-gray-200 mb-4 group-hover:text-purple-400 transition duration-300">
              Advanced Analytics
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Leverage data-driven insights to optimize your strategies.
            </p>
            {/* Progress Bar */}
            <div className="relative w-full bg-gray-700 rounded-full h-3 mb-4">
              <div
                className="bg-purple-500 h-3 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
            <p className="text-sm text-purple-400">Progress: 90%</p>
            <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              View
            </button>
          </div>
        </div>
      </section>


{/* Call-to-Action Section */}
<section className="py-16 text-center relative">
  {/* Glassmorphism Effect Box */}
  <div className="relative z-10 max-w-4xl mx-auto px-8 py-12 bg-gray-700/40 backdrop-blur-lg rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-teal-500/50">
    
    {/* Title */}
    <h2 className="text-4xl font-extrabold text-teal-400 mb-6 text-shadow-lg">
      Ready to Get Started?
    </h2>

    {/* Description */}
    <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8 opacity-80 hover:opacity-100 transition duration-300">
      Join thousands of professionals transforming their workflows with PathGenies. Start your journey today.
    </p>

    {/* Neumorphism Styled Button */}
    <button className="px-12 py-4 bg-gray-800 text-teal-400 rounded-full shadow-xl transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/50">
      Join Now
    </button>
  </div>
</section>




      {/* Footer Section */}
      <footer className="w-full py-8 bg-gray-950 text-center border-t border-gray-800 relative z-10">
        <p className="text-sm text-gray-500 mb-4">
          © 2025 PathGenies. All rights reserved.
        </p>
        <div className="flex items-center justify-center space-x-6">
          <a
            href="#"
            className="text-gray-500 hover:text-teal-400 transition duration-300"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-blue-400 transition duration-300"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-purple-400 transition duration-300"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Home;
