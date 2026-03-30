import React from "react";
import bannerImg from "../../assets/banner.png";
import { HiOutlinePlay } from "react-icons/hi"; // You can use this for the play icon

const HeroSection = () => {
  return (
    <div className="hero bg-white min-h-[80vh] px-4 lg:px-20">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">
        {/* Right Side: Image */}
        <div className="lg:w-1/2">
          <img 
            src={bannerImg} 
            className="w-full rounded-2xl shadow-2xl" 
            alt="Digital Workflow"
          />
        </div>

        {/* Left Side: Content */}
        <div className="lg:w-1/2">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-800 leading-tight">
            Supercharge Your <br />
            <span className="text-slate-800">Digital Workflow</span>
          </h1>

          <p className="py-6 text-gray-500 text-lg max-w-lg leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-wrap gap-4">
            {/* Primary Button */}
            <button className="btn bg-purple-600 hover:bg-purple-700 border-none text-white rounded-full px-8 normal-case text-lg">
              Explore Products
            </button>

            {/* Secondary Button */}
            <button className="btn btn-outline border-purple-300 text-purple-600 hover:bg-purple-50 hover:border-purple-400 rounded-full px-8 normal-case text-lg gap-2">
              <HiOutlinePlay className="text-xl" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;