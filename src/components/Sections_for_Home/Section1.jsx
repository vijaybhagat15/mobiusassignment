import React from 'react';
import { FaBook } from 'react-icons/fa';
const Section1 = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 via-blue-400 to-blue-700 px-4">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between px-40">
        
        {/* Left Side Content */}
        <div className="text-center md:text-left">
          <h1 className=" md:text-6xl text-white mb-6 ont-sora font-semibold text-[80px]">
            Land job interviews <br />
            <span className="text-blue-700">10x</span> faster
          </h1>
          <p className="text-white mb-8 font-dm-sans font-normal text-[18px] mt-4">
            Custom-built resumes that match your goals, keywords, and recruiter expectations.
          </p>
          <button className="  px-6 py-3  shadow-md bg-white text-[#0649E7] font-semibold  rounded-full hover:bg-blue-900 hover:text-white transition">
            Get Started →
          </button>
        </div>
        
        {/* Right Side Content */}
        <div className="relative mt-12 md:mt-0">
          <img 
            src="https://static.wixstatic.com/media/41ecaa_ece949177dc14b438c5b2501ca635540~mv2.png/v1/crop/x_0,y_93,w_1592,h_2061/fill/w_346,h_448,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-10-15%20at%205_26_08%20PM.png" 
            alt="Hiring Trends E-Book" 
            className="w-72 md:w-96 mx-auto"
          />
          <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
            <div className="flex flex-col items-center bottom-0 right-0">
              <div className="w-16 h-16 bg-white bg-opacity-35 border-2 border-gray-100 rounded-full flex items-center justify-center shadow-lg overflow-auto">
              <FaBook />              
              </div>
              <p className="text-white mt-2 text-sm">Download Free E-Book</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section1;
