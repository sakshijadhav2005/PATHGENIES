

import React from 'react'
import Navbar from '../Components/Navbar'

const MCQ_P = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white flex flex-col items-center">
        
        {/* Glowing Background Design */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-3xl -top-10 -left-10 animate-pulse"></div>
          <div className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl top-40 right-10 animate-pulse"></div>
        </div>

        {/* MCQ Box */}
        <section className="py-20 w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 w-full max-w-7xl mx-auto px-8">
            <div className="relative bg-gray-800/30 backdrop-blur-lg p-10 rounded-2xl shadow-2xl hover:scale-105 border border-gray-700 group">
              <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-transparent opacity-0 group-hover:opacity-20 rounded-2xl transition-all duration-500"></div>
              <div className="flex items-center justify-center w-20 h-20 bg-teal-600 text-white rounded-full mb-6 mx-auto shadow-lg">
                <i className="fas fa-question-circle text-3xl"></i>
              </div>
              <h2 className="text-3xl font-semibold text-gray-200 mb-4 group-hover:text-white hover:text-teal-400 transition duration-300">
                Take the Quiz
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Test your knowledge with our interactive multiple-choice quiz.
              </p>

              {/* MCQ Form */}
              <div className="bg-gray-700 p-4 rounded-xl">
              <div className="bg-gray-700/60 p-8 rounded-xl shadow-xl backdrop-blur-md">
              <form>
          <div className="mb-6">
            <label className="block text-gray-300 text-xl mb-4">Question 1:</label>
            <div className="flex flex-col space-y-4">
              {/* Option A with Gradient and Reduced Glassmorphism */}
              <label className="bg-gradient-to-r from-teal-500 via-blue-500 p-5 rounded-lg cursor-pointer shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-teal-600 hover:via-blue-600  hover:text-white active:scale-95 focus:outline-none focus:ring-4 focus:ring-teal-500/50">
                <input type="radio" name="q1" value="A" className="mr-3" /> <b>Option A</b>
              </label>
              {/* Option B with Gradient and Reduced Glassmorphism */}
              <label className="bg-gradient-to-r from-teal-500 via-blue-500  p-5 rounded-lg cursor-pointer shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-teal-600 hover:via-blue-600  hover:text-white active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-500/50">
                <input type="radio" name="q1" value="B" className="mr-3" /> <b>Option B</b>
              </label>
              {/* Option C with Gradient and Reduced Glassmorphism */}
              <label className="bg-gradient-to-r from-teal-500 via-blue-500  p-5 rounded-lg cursor-pointer shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-teal-600 hover:via-blue-600  hover:text-white active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-500/50">
                <input type="radio" name="q1" value="C" className="mr-3" /> <b>Option C</b>
              </label>
              {/* Option D with Gradient and Reduced Glassmorphism */}
              <label className="bg-gradient-to-r from-teal-500 via-blue-500  p-5 rounded-lg cursor-pointer shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-teal-600 hover:via-blue-600  hover:text-white active:scale-95 focus:outline-none focus:ring-4 focus:ring-pink-500/50">
                <input type="radio" name="q1" value="D" className="mr-3" />  <b>Option D</b>
              </label>
            </div>
          </div>
          {/* Glassmorphism Submit Button */}
          <button
  type="submit"
  className="mt-8 px-8 py-4 bg-gradient-to-r from-pink-500 via-violet-500 to-purple-700 text-white rounded-full shadow-xl transform hover:scale-105 transition duration-300 focus:outline-none focus:ring-4 focus:ring-violet-300"
>
  <b>Submit</b>
</button>
        </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16 text-center relative">
          <div className="relative z-10 max-w-4xl mx-auto px-8 py-12 bg-gray-700/40 backdrop-blur-lg rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-teal-500/50">
            <h2 className="text-4xl font-extrabold text-teal-400 mb-6 text-shadow-lg">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8 opacity-80 hover:opacity-100 transition duration-300">
              Join thousands of professionals transforming their workflows with PathGenies. Start your journey today.
            </p>
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

export default MCQ_P;

