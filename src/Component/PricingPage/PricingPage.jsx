import React from 'react';
import { FaCheck } from "react-icons/fa6";

const PricingPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-24 px-6 font-sans text-slate-900">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Choose the plan that fits your needs. Upgrade or downgrade anytime with no hidden fees.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        
        {/* Starter Plan */}
        <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-bold mb-2 text-slate-800">Starter</h3>
          <p className="text-gray-500 mb-8 font-medium">Perfect for getting started</p>
          <div className="flex items-baseline mb-10">
            <span className="text-5xl font-black text-slate-900">$0</span>
            <span className="text-gray-400 ml-2 font-semibold">/mo</span>
          </div>
          <ul className="space-y-5 mb-12 flex-grow">
            {['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'].map((item, index) => (
              <li key={index} className="flex items-center text-slate-600 font-medium">
                <div className="bg-green-100 p-1 rounded-full mr-3">
                  <FaCheck className='text-green-600 text-xs'/>
                </div>
                {item}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 bg-slate-100 text-slate-800 font-bold rounded-2xl hover:bg-slate-200 transition-all active:scale-95">
            Get Started Free
          </button>
        </div>

        {/* Pro Plan (Highlighted) */}
        <div className="relative bg-[#7F3DFF] p-10 rounded-[2.5rem] text-white shadow-2xl shadow-purple-200 transform md:scale-110 z-10 flex flex-col border-4 border-white/10">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FFD700] text-slate-900 text-[10px] uppercase font-black tracking-widest px-6 py-2 rounded-full shadow-lg border-2 border-white">
            Most Popular
          </div>
          <h3 className="text-2xl font-bold mb-2">Pro</h3>
          <p className="text-white/80 mb-8 font-medium">Best for professionals</p>
          <div className="flex items-baseline mb-10">
            <span className="text-5xl font-black">$29</span>
            <span className="text-white/60 ml-2 font-semibold">/mo</span>
          </div>
          <ul className="space-y-5 mb-12 flex-grow">
            {[
              'Access to all premium tools', 
              'Unlimited templates', 
              'Priority 24/7 support', 
              'Unlimited projects', 
              'Cloud sync & backup'
            ].map((item, index) => (
              <li key={index} className="flex items-center font-medium">
                <div className="bg-white/20 p-1 rounded-full mr-3">
                  <FaCheck className='text-white text-xs'/>
                </div>
                {item}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 bg-white text-[#7F3DFF] font-black rounded-2xl hover:bg-slate-50 transition-all shadow-lg active:scale-95">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-bold mb-2 text-slate-800">Enterprise</h3>
          <p className="text-gray-500 mb-8 font-medium">For teams and businesses</p>
          <div className="flex items-baseline mb-10">
            <span className="text-5xl font-black text-slate-900">$99</span>
            <span className="text-gray-400 ml-2 font-semibold">/mo</span>
          </div>
          <ul className="space-y-5 mb-12 flex-grow">
            {['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated manager'].map((item, index) => (
              <li key={index} className="flex items-center text-slate-600 font-medium">
                <div className="bg-green-100 p-1 rounded-full mr-3">
                  <FaCheck className='text-green-600 text-xs'/>
                </div>
                {item}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 bg-[#7F3DFF] text-white font-bold rounded-2xl hover:opacity-90 transition-all active:scale-95">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};

export default PricingPage;