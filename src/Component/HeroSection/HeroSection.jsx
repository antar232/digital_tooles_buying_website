import React from "react";
import bannerImg from "../../assets/banner.png";
import { HiOutlinePlay } from "react-icons/hi";

const HeroSection = () => {
  return (
    <div className="flex flex-col">
      <div className="hero bg-white min-h-[80vh] px-4 lg:px-20">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12">

          <div className="lg:w-1/2">
            <img 
              src={bannerImg} 
              className="w-full rounded-2xl" 
              alt="Digital Workflow"
            />
          </div>

      
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
              New: AI-Powered Tools Available
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight">
              Supercharge Your <br />
              Digital Workflow
            </h1>

            <p className="py-6 text-gray-500 text-lg max-w-lg leading-relaxed">
              Access premium AI tools, design assets, templates, and productivity
              software—all in one place. Start creating faster today.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="btn bg-purple-600 hover:bg-purple-700 border-none text-white rounded-full px-8 normal-case text-lg">
                Explore Products
              </button>
              <button className="btn btn-outline border-purple-300 text-purple-600 hover:bg-purple-50 hover:border-purple-400 rounded-full px-8 normal-case text-lg gap-2">
                <HiOutlinePlay className="text-xl" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-purple-600 py-12 px-4 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center gap-8 text-white">
         
          <div className="text-center px-8">
            <h2 className="text-5xl font-bold mb-2">50K+</h2>
            <p className="text-purple-200 text-lg">Active Users</p>
          </div>

          <div className="hidden md:block w-px h-16 bg-purple-400 opacity-50"></div>

          <div className="text-center px-8">
            <h2 className="text-5xl font-bold mb-2">200+</h2>
            <p className="text-purple-200 text-lg">Premium Tools</p>
          </div>

          <div className="hidden md:block w-px h-16 bg-purple-400 opacity-50"></div>

          <div className="text-center px-8">
            <h2 className="text-5xl font-bold mb-2">4.9</h2>
            <p className="text-purple-200 text-lg">Rating</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;