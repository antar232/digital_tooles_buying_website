import React from "react";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-8">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>

        {/* Logo Styling - Fixed the "i" coloring */}
        <a className="btn btn-ghost text-3xl font-bold tracking-tighter">
          <span className="text-purple-600">DigiTools</span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-gray-600">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>

      <div className="navbar-end gap-6 items-center">
        {/* Shopping Cart - Scaled up and styled */}
        <a href="" className="text-2xl text-gray-700 hover:text-purple-600 transition-colors">
          <TiShoppingCart />
        </a>

        <a className="hover:text-purple-600 cursor-pointer font-medium text-gray-700">
          Login
        </a>

        <a className="btn bg-gradient-to-r from-blue-600 to-purple-600 border-none text-white rounded-full px-6 hover:opacity-90 normal-case">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Navbar;