import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts, setActiveTab }) => {

    const handleRemove = (id) => {
        const remaining = carts.filter(item => item.id !== id);
        setCarts(remaining);
        toast.warn("Item removed from cart");
    }

    const handleCheckout = () => {
    if (carts.length > 0) {
        toast.success("Purchase Successful! Thank you.");
        setCarts([]); 
        setActiveTab('premium'); 
    }
}

    const totalPrice = carts.reduce((total, item) => total + item.price, 0);

    return (
        <div className="text-center py-12 px-4 bg-white min-h-screen">
          
            <div className="mb-10">
                <h2 className="text-4xl font-extrabold text-slate-900 mb-2">Premium Digital Tools</h2>
                <p className="text-gray-400 text-lg max-w-xl mx-auto">
                    Choose from our curated collection of premium digital products designed 
                    to boost your productivity and creativity.
                </p>
            </div>

            <div className="flex justify-center items-center gap-2 mb-10 bg-gray-50 w-fit mx-auto p-1 rounded-full">
                <button 
                    onClick={() => setActiveTab('premium')}
                    className="px-8 py-2 rounded-full text-gray-500 font-medium hover:bg-gray-100 transition-all"
                >
                    Products
                </button>
                <button 
                    className="px-8 py-2 rounded-full bg-[#7F3DFF] text-white font-bold shadow-md"
                >
                    Cart ({carts.length})
                </button>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                <h3 className="text-left text-xl font-bold mb-6 text-slate-800">Your Cart</h3>
                
                {carts.length > 0 ? (
                    <div className="space-y-4">
                        {carts.map((item) => (
                            <div key={item.id} className="flex items-center justify-between p-5 bg-gray-50/50 rounded-2xl border border-gray-50">
                                <div className="flex items-center gap-4">
                                    <div className="text-3xl bg-white p-3 rounded-xl shadow-sm">{item.icon}</div>
                                    <div className="text-left">
                                        <h4 className="font-bold text-slate-800">{item.name}</h4>
                                        <p className="text-gray-400 font-semibold">${item.price}</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => handleRemove(item.id)}
                                    className="text-pink-500 font-bold hover:underline text-sm"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}

                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <div className="flex justify-between items-center mb-6 px-2">
                                <span className="text-gray-400 font-medium">Total:</span>
                                <span className="text-2xl font-black text-slate-900">${totalPrice.toFixed(2)}</span>
                            </div>
                            <button 
                                onClick={handleCheckout}
                                className="w-full bg-[#7F3DFF] text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-[#6A2EE0] transition-all active:scale-[0.98]"
                            >
                                Proceed To Checkout
                            </button>
                        </div>
                    </div>
                ) : (
       
                    <div className="py-20">
                        <p className="text-gray-400 text-lg">Your cart is empty!</p>
                        <button 
                            onClick={() => setActiveTab('premium')}
                            className="mt-4 text-[#7F3DFF] font-bold hover:underline"
                        >
                            Explore Products
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;