import React, { useState } from "react";
import { toast } from "react-toastify";

const AiTools = ({ tool, carts, setCarts}) => {
  const [isBuy, setIsBuy] = useState(false);
  const handleBuy = () => {
    setIsBuy(true);
    const isFound = carts.find((item) => item.id === tool.id);
    
    if (isFound) {
      toast.info("This item is already in your cart!");
    } else {
      setCarts([...carts, tool]);
      toast.success(`${tool.name} added to cart!`);
    }
  };

  return (
    <div className="group bg-white shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl border border-gray-100 overflow-hidden flex flex-col h-full relative">
      
      {tool.tag && (
        <div className="absolute top-4 right-4 z-10">
          <span className="badge badge-md bg-green-100 text-green-600 border-none font-bold px-3 py-1 rounded-full text-[12px]">
            {tool.tag}
          </span>
        </div>
      )}

      <div className="p-6 space-y-4 flex-grow text-left">
        {/* Icon Section */}
        <div className="text-4xl bg-purple-50 w-14 h-14 flex items-center justify-center rounded-xl transition-transform group-hover:scale-110 duration-300">
          {tool.icon}
        </div>

        {/* Content Section */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-1">{tool.name}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            {tool.description}
          </p>
        </div>

        {/* Features Section */}
        <ul className="space-y-2 pt-2">
          {tool.features?.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-green-500 font-bold">✓</span> {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Pricing & Button Section */}
      <div className="p-6 bg-slate-50 border-t border-gray-100">
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-3xl font-bold text-slate-900">${tool.price}</span>
          <span className="text-gray-500 text-sm font-medium">
            /{tool.period === "monthly" ? "mo" : "yr"}
          </span>
        </div>

        <button
          onClick={handleBuy}
          className="btn w-full rounded-full border-none text-white bg-[#7F3DFF] hover:bg-[#6A2EE0] transition-all shadow-md font-bold py-3"
        >
          {
            isBuy ? "Buy" : "Buy Now"
          }
        </button>
      </div>
    </div>
  );
};

export default AiTools;