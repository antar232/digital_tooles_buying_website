import React from 'react';

const CTASection = () => {
  return (
    <div className="bg-purple-600 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready To Transform Your Workflow?
        </h2>

        {/* Subtitle */}
        <p className="text-purple-100 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
          Join thousands of professionals who are already using Digitools to work smarter. 
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <button className="btn bg-white hover:bg-gray-100 text-purple-600 border-none rounded-full px-8 normal-case text-lg shadow-lg">
            Explore Products
          </button>
          
          <button className="btn btn-outline border-white text-white hover:bg-white hover:text-purple-600 hover:border-white rounded-full px-8 normal-case text-lg">
            View Pricing
          </button>
        </div>

        {/* Bottom Features/Trust Text */}
        <div className="text-purple-200 text-sm md:text-base font-medium opacity-90">
          14-day free trial • No credit card required • Cancel anytime
        </div>
      </div>
    </div>
  );
};

export default CTASection;