import React from "react";
import UserImg from "../../assets/user.png";
import ProductsImg from "../../assets/package.png";
import CreatingImg from "../../assets/rocket.png";

const GetStartedPage = () => {
  return (
    <div className="bg-slate-50 py-20 px-6 font-sans">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Start using premium digital tools in minutes, not hours. 
          Our streamlined process gets you up and running instantly.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Step 01 */}
        <div className="group relative bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
          <span className="absolute top-6 right-6 bg-[#7F3DFF] text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg shadow-purple-200">
            01
          </span>
          <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
            <img src={UserImg} alt="Create Account" className="w-12 h-12 object-contain" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Create Account
          </h3>
          <p className="text-gray-500 leading-relaxed">
            Sign up for free in seconds. No credit card required to explore our premium collection.
          </p>
        </div>

        {/* Step 02 */}
        <div className="group relative bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
          <span className="absolute top-6 right-6 bg-[#7F3DFF] text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg shadow-purple-200">
            02
          </span>
          <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
            <img src={ProductsImg} alt="Choose Products" className="w-12 h-12 object-contain" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Choose Products
          </h3>
          <p className="text-gray-500 leading-relaxed">
            Browse our curated catalog and select the digital tools that perfectly fit your project needs.
          </p>
        </div>

        {/* Step 03 */}
        <div className="group relative bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
          <span className="absolute top-6 right-6 bg-[#7F3DFF] text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg shadow-purple-200">
            03
          </span>
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
            <img src={CreatingImg} alt="Start Creating" className="w-12 h-12 object-contain" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Start Creating
          </h3>
          <p className="text-gray-500 leading-relaxed">
            Gain instant access to your tools. Download and start boosting your productivity immediately.
          </p>
        </div>

      </div>
    </div>
  );
};

export default GetStartedPage;