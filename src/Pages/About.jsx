// // // import React from 'react'
// // // import Navbar from '../Components/Navbar'

// // // const About = () => {
// // //   return (
// // //     <>
// // //     <Navbar />
// // //     <div>About</div>
// // //     </>
    
// // //   )
// // // }

// // // export default About

// // import React from "react";
// // import Navbar from '../Components/Navbar'
// // const About = () => {
// //   return (
// //     <>
    
    
// //     <Navbar />
// //     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white flex flex-col items-center relative overflow-hidden">
// //       {/* Animated Glowing Background */}
// //       <div className="absolute inset-0 -z-10">
// //         <div className="absolute w-[1000px] h-[1000px] bg-purple-500/20 rounded-full blur-[150px] top-10 left-10 animate-pulse"></div>
// //         <div className="absolute w-[700px] h-[700px] bg-teal-500/25 rounded-full blur-[150px] top-40 right-20"></div>
// //         <div className="absolute w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[150px] bottom-20 left-1/3 animate-pulse"></div>
// //       </div>

// //       {/* Navigation Bar */}
// //       <nav className="w-full bg-gray-800/30 backdrop-blur-xl fixed top-0 z-20 border-b border-gray-700">
// //         <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
// //           <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
// //             PathGenies
// //           </h1>
// //           <ul className="hidden md:flex space-x-8 text-gray-300 font-semibold">
// //             <li className="hover:text-teal-400 transition duration-300">
// //               <a href="/">Home</a>
// //             </li>
// //             <li className="hover:text-teal-400 transition duration-300">
// //               <a href="#about-us">About Us</a>
// //             </li>
// //           </ul>
// //           <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
// //             Logout
// //           </button>
// //         </div>
// //       </nav>

// //       {/* About Us Section */}
// //       <section className="w-full text-center py-32 mt-16">
// //         <div className="max-w-5xl mx-auto px-6">
// //           <h1 className="text-6xl font-extrabold text-gray-100 drop-shadow-md bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-purple-400 to-pink-500 animate-text">
// //             About Us
// //           </h1>
// //           <p className="text-lg md:text-2xl text-gray-300 mt-6 leading-relaxed max-w-4xl mx-auto">
// //             At PathGenies, we strive to redefine the way businesses work by delivering state-of-the-art solutions tailored for success. Our team of passionate experts is committed to building tools that empower businesses, streamline workflows, and drive growth.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Mission Section */}
// //       <section className="py-16 w-full">
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl mx-auto px-8">
// //           {/* Mission Statement */}
// //           <div className="relative bg-gray-800/30 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-gray-700">
// //             <h2 className="text-4xl font-semibold text-gray-200 mb-4">
// //               Our Mission
// //             </h2>
// //             <p className="text-gray-400 leading-relaxed">
// //               Our mission is to empower businesses by offering seamless integration, smart automation, and advanced analytics. We believe in transforming workflows to help companies reach their full potential.
// //             </p>
// //           </div>

// //           {/* Vision Statement */}
// //           <div className="relative bg-gray-800/30 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-gray-700">
// //             <h2 className="text-4xl font-semibold text-gray-200 mb-4">
// //               Our Vision
// //             </h2>
// //             <p className="text-gray-400 leading-relaxed">
// //               Our vision is to lead the industry by delivering cutting-edge technology solutions that foster innovation and growth for businesses worldwide. Together, we shape the future of work.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Team Section */}
// //       <section className="py-24 w-full bg-gray-950">
// //         <div className="max-w-7xl mx-auto px-8">
// //           <h2 className="text-5xl font-semibold text-center text-gray-200 mb-12">
// //             Meet Our Team
// //           </h2>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
// //             {/* Team Member 1 */}
// //             <div className="relative bg-gray-800/30 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-gray-700 text-center group hover:shadow-teal-500/50 transition duration-300">
// //               <div className="w-24 h-24 mx-auto rounded-full bg-teal-600 shadow-lg mb-4"></div>
// //               <h3 className="text-xl font-semibold text-gray-200">
// //                 Jane Doe
// //               </h3>
// //               <p className="text-sm text-gray-400">CEO & Founder</p>
// //               <p className="mt-4 text-gray-400">
// //                 A visionary leader with 10+ years of experience in business strategy and innovation.
// //               </p>
// //             </div>

// //             {/* Team Member 2 */}
// //             <div className="relative bg-gray-800/30 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-gray-700 text-center group hover:shadow-blue-500/50 transition duration-300">
// //               <div className="w-24 h-24 mx-auto rounded-full bg-blue-600 shadow-lg mb-4"></div>
// //               <h3 className="text-xl font-semibold text-gray-200">
// //                 John Smith
// //               </h3>
// //               <p className="text-sm text-gray-400">CTO</p>
// //               <p className="mt-4 text-gray-400">
// //                 An expert in cutting-edge technology, leading our development teams to excellence.
// //               </p>
// //             </div>

// //             {/* Team Member 3 */}
// //             <div className="relative bg-gray-800/30 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-gray-700 text-center group hover:shadow-purple-500/50 transition duration-300">
// //               <div className="w-24 h-24 mx-auto rounded-full bg-purple-600 shadow-lg mb-4"></div>
// //               <h3 className="text-xl font-semibold text-gray-200">
// //                 Sarah Lee
// //               </h3>
// //               <p className="text-sm text-gray-400">Head of Marketing</p>
// //               <p className="mt-4 text-gray-400">
// //                 Driving brand awareness and client success through impactful marketing strategies.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="w-full py-10 bg-gray-950 border-t border-gray-800 text-center">
// //         <p className="text-gray-500 text-sm">
// //           © 2025 PathGenies. All rights reserved.
// //         </p>
// //       </footer>
// //     </div></>
// //   );
// // };

// // export default About;

// import React from "react";
// import Navbar from "../Components/Navbar";

// const Abou = () => {
//   return (
//     <>
//     <Navbar />
    
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white flex flex-col items-center relative overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute w-[1000px] h-[1000px] bg-purple-500/20 rounded-full blur-[150px] top-10 left-10 animate-pulse"></div>
//         <div className="absolute w-[700px] h-[700px] bg-teal-500/25 rounded-full blur-[150px] top-40 right-20"></div>
//         <div className="absolute w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[150px] bottom-20 left-1/3 animate-pulse"></div>
//       </div>

     

//       {/* About Us Section */}
//       <section className="w-full text-center py-32 mt-16">
//         <div className="max-w-5xl mx-auto px-6">
//           <h1 className="text-6xl font-extrabold text-gray-100 drop-shadow-md bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-purple-400 to-pink-500 animate-text">
//             About Us
//           </h1>
//           <p className="text-lg md:text-2xl text-gray-300 mt-6 leading-relaxed max-w-4xl mx-auto">
//             At PathGenies, we strive to redefine the way businesses work by delivering state-of-the-art solutions tailored for success. Our mission is to empower teams, innovate processes, and drive excellence in everything we do.
//           </p>
//         </div>
//       </section>

//       {/* Mission and Vision Section */}
//       <section className="py-16 w-full">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl mx-auto px-8">
//           {/* Mission Statement */}
//           <div className="relative bg-gray-800/30 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-gray-700 hover:shadow-teal-500/50 transition duration-300">
//             <h2 className="text-4xl font-semibold text-gray-200 mb-4">
//               Our Mission
//             </h2>
//             <p className="text-gray-400 leading-relaxed">
//               To empower businesses with cutting-edge tools, seamless automation, and data-driven insights that elevate productivity and growth.
//             </p>
//           </div>

//           {/* Vision Statement */}
//           <div className="relative bg-gray-800/30 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-gray-700 hover:shadow-purple-500/50 transition duration-300">
//             <h2 className="text-4xl font-semibold text-gray-200 mb-4">
//               Our Vision
//             </h2>
//             <p className="text-gray-400 leading-relaxed">
//               To revolutionize industries by offering intuitive solutions that make workflows smarter and more effective, shaping the future of innovation.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-24 w-full bg-gray-950">
//         <div className="max-w-7xl mx-auto px-8">
//           <h2 className="text-5xl font-semibold text-center text-gray-200 mb-12">
//             Meet Our Team
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//             {/* Team Member 1 */}
//             <div className="relative bg-gray-800/30 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-gray-700 text-center group hover:shadow-teal-500/50 transition duration-300">
//               <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-teal-500 to-blue-500 shadow-lg mb-4"></div>
//               <h3 className="text-xl font-semibold text-gray-200">Jane Doe</h3>
//               <p className="text-sm text-gray-400">CEO & Founder</p>
//               <p className="mt-4 text-gray-400">
//                 Visionary leader driving innovation and success for 10+ years.
//               </p>
//             </div>

//             {/* Team Member 2 */}
//             <div className="relative bg-gray-800/30 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-gray-700 text-center group hover:shadow-blue-500/50 transition duration-300">
//               <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg mb-4"></div>
//               <h3 className="text-xl font-semibold text-gray-200">John Smith</h3>
//               <p className="text-sm text-gray-400">CTO</p>
//               <p className="mt-4 text-gray-400">
//                 Expert in technology and architecture, leading development teams.
//               </p>
//             </div>

//             {/* Team Member 3 */}
//             <div className="relative bg-gray-800/30 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-gray-700 text-center group hover:shadow-purple-500/50 transition duration-300">
//               <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg mb-4"></div>
//               <h3 className="text-xl font-semibold text-gray-200">Sarah Lee</h3>
//               <p className="text-sm text-gray-400">Head of Marketing</p>
//               <p className="mt-4 text-gray-400">
//                 Driving impactful campaigns to connect clients with success.
//               </p>
//             </div>

//             {/* Team Member 4 */}
//             <div className="relative bg-gray-800/30 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-gray-700 text-center group hover:shadow-pink-500/50 transition duration-300">
//               <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-pink-500 to-red-500 shadow-lg mb-4"></div>
//               <h3 className="text-xl font-semibold text-gray-200">Michael Brown</h3>
//               <p className="text-sm text-gray-400">Lead Designer</p>
//               <p className="mt-4 text-gray-400">
//                 Creating stunning, user-focused designs that inspire.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="w-full py-10 bg-gray-950 border-t border-gray-800 text-center">
//         <p className="text-gray-500 text-sm">
//           © 2025 PathGenies. All rights reserved.
//         </p>
//       </footer>
//     </div> </>
//   );
// };

// export default About;

import React from "react";
import Navbar from "../Components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white flex flex-col items-center relative overflow-hidden pt-0">
        {/* Animated Background */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-3xl -top-10 -left-10 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl top-40 right-10 animate-pulse"></div>
      </div>
        {/* About Us Section */}
        <section className="w-full text-center py-32 mt-16">
          <div className="max-w-5xl mx-auto px-6">
            <h1 className="text-6xl font-extrabold text-gray-100 drop-shadow-md bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-purple-400 to-pink-500 animate-text">
              About Us
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mt-6 leading-relaxed max-w-4xl mx-auto">
              At PathGenies, we strive to redefine the way businesses work by
              delivering state-of-the-art solutions tailored for success. Our
              mission is to empower teams, innovate processes, and drive
              excellence in everything we do.
            </p>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="py-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl mx-auto px-8">
            {/* Mission Statement */}
            <div className="relative bg-gray-800/30 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-gray-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-teal-800  hover:scale-105 hover:shadow-teal-500/50">
              <h2 className="text-4xl font-semibold text-white-200 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-400 leading-relaxed">
                To empower businesses with cutting-edge tools, seamless
                automation, and data-driven insights that elevate productivity
                and growth.
              </p>
            </div>

            {/* Vision Statement */}
            <div className="relative bg-gray-800/30 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-gray-700 transition-all duration-300 hover:bg-gradient-to-r  hover:from-teal-800  hover:scale-105 hover:shadow-teal-500/50">
              <h2 className="text-4xl font-semibold text-white-200 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-400 leading-relaxed">
                To revolutionize industries by offering intuitive solutions that
                make workflows smarter and more effective, shaping the future of
                innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 w-full bg-gray-950">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-5xl font-semibold text-center text-gray-200 mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Team Member 1 */}
              <div className="relative bg-gray-800/30 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-gray-700 text-center group hover:shadow-teal-500/50 transition duration-300">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-teal-500 to-blue-500 shadow-lg mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-200">Jane Doe</h3>
                <p className="text-sm text-gray-400">CEO & Founder</p>
                <p className="mt-4 text-gray-400">
                  Visionary leader driving innovation and success for 10+ years.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="relative bg-gray-800/30 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-gray-700 text-center group hover:shadow-blue-500/50 transition duration-300">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-200">
                  John Smith
                </h3>
                <p className="text-sm text-gray-400">CTO</p>
                <p className="mt-4 text-gray-400">
                  Expert in technology and architecture, leading development
                  teams.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="relative bg-gray-800/30 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-gray-700 text-center group hover:shadow-purple-500/50 transition duration-300">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-200">
                  Sarah Lee
                </h3>
                <p className="text-sm text-gray-400">Head of Marketing</p>
                <p className="mt-4 text-gray-400">
                  Driving impactful campaigns to connect clients with success.
                </p>
              </div>

              {/* Team Member 4 */}
              <div className="relative bg-gray-800/30 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-gray-700 text-center group hover:shadow-pink-500/50 transition duration-300">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-pink-500 to-red-500 shadow-lg mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-200">
                  Michael Brown
                </h3>
                <p className="text-sm text-gray-400">Lead Designer</p>
                <p className="mt-4 text-gray-400">
                  Creating stunning, user-focused designs that inspire.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-10 bg-gray-950 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 PathGenies. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default About;
