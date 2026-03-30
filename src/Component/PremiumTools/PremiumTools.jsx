import React, { use } from 'react';
import AiTools from './AiTools';

const PremiumTools = ({dataPromise, carts, setCarts, activeTab, setActiveTab}) => {
   const tools = use(dataPromise);

    return (
        <div className="text-center py-12 px-4 bg-slate-50">
            <div className="mb-10">
                <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
                    Premium Digital Tools
                </h2>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                    Choose from our curated collection of premium digital products designed 
                    to boost your productivity and creativity.
                </p>
            </div>

            {/* Tab Switcher */}
            <div className="tabs tabs-boxed justify-center bg-white w-fit mx-auto p-1 mb-10 shadow-sm border border-gray-100 rounded-full">
                <button
                    className={`tab rounded-full px-8 transition-all ${activeTab === 'premium' ? 'bg-purple-600 text-white font-bold' : ''}`}
                    onClick={() => setActiveTab("premium")}
                >
                    Products
                </button>
                <button
                    className={`tab rounded-full px-8 transition-all ${activeTab === 'cart' ? 'bg-purple-600 text-white font-bold' : ''}`}
                    onClick={() => setActiveTab("cart")}
                >
                    Cart ({carts.length})
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 justify-items-center">
                {tools.map((tool) => (
                    <AiTools 
                        key={tool.id} 
                        tool={tool} 
                        carts={carts} 
                        setCarts={setCarts} 
                        setActiveTab={setActiveTab} 
                    />
                ))}
            </div>
        </div>
    );
};

export default PremiumTools;