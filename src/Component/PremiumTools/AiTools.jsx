import React from "react";
import { toast } from "react-toastify";

const AiTools = ({ tool, carts, setCarts, setActiveTab }) => {
  
  const handleBuy = () => {
    const isFound = carts.find((item) => item.id === tool.id);
    
    if (isFound) {
      toast.info("This item is already in your cart!");
    } else {
      setCarts([...carts, tool]);
      toast.success(`${tool.name} added to cart!`);
    }
    //setActiveTab("cart");
  };

  return (
    <div className="group bg-white shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl border border-gray-100 overflow-hidden flex flex-col h-full">
      <div className="p-6 space-y-4 flex-grow text-left">
        <div className="text-4xl bg-purple-50 w-14 h-14 flex items-center justify-center rounded-xl transition-transform group-hover:scale-110 duration-300">
          {tool.icon}
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl font-bold text-slate-800">{tool.name}</h3>
            {tool.tag && (
              <span className="badge badge-sm bg-purple-100 text-purple-600 border-none font-semibold uppercase text-[10px]">
                {tool.tag}
              </span>
            )}
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            {tool.description}
          </p>
        </div>

        <ul className="space-y-2 pt-2">
          {tool.features?.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-green-500 font-bold">✓</span> {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 bg-slate-50 border-t border-gray-100">
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-3xl font-bold text-slate-900">${tool.price}</span>
          <span className="text-gray-500 text-sm font-medium">
            /{tool.period === "monthly" ? "mo" : "yr"}
          </span>
        </div>

        <button
          onClick={handleBuy}
          className="btn w-full rounded-xl border-none text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition-all shadow-md shadow-purple-100 font-bold"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default AiTools;