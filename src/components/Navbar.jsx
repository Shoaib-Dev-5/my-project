import { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import Cart from "./Cart";
const Navbar = ({open,OpenHandler}) => {
  return (
    <div className="flex items-center  py-8 justify-between">
      {/* logo */}
      <div>
        <svg
          alt="Crown Clothing Home"
          width="50"
          height="39"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              fill="#808282"
              d="M3 14l22 12.5L47 14l-6.145 25H9.085z"
            ></path>
            <path fill-opacity=".263" fill="#101A1A" d="M25 8l15 31H10z"></path>
            <circle fill="#5E6363" cx="2" cy="9" r="2"></circle>
            <circle fill="#5E6363" cx="25" cy="2" r="2"></circle>
            <circle fill="#5E6363" cx="48" cy="9" r="2"></circle>
          </g>
        </svg>
      </div>
      {/* leftside */}
      <div className="space-x-2 flex">
        {/* Links */}
        <ul className="flex space-x-8 text-xl cursor-pointer">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/shop'>Shop</Link></li>
          <li><Link to='/signin'>Sign In</Link></li>
        </ul>
        {/* Actions */}
        <div className="flex">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
          </label>
          <span onClick={OpenHandler}>
            <BiShoppingBag size={28} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
