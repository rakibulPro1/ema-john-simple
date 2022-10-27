import React from "react";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div>
      <div className="top-header text-center mb-4">
        <h3 className="text-5xl font-bold">ema-john</h3>
      </div>
      <nav className="bottom-header bg-black text-white py-2 px-3">
        <ul className="flex justify-center">
          <li className="mx-2 hover:bg-white hover:text-black px-2 py-1 rounded-sm text-xl">
            Home
          </li>
          <li className="mx-2 hover:bg-white hover:text-black px-2 py-1 rounded-sm text-xl">
            Shop
          </li>
          <li className="mx-2 hover:bg-white hover:text-black px-2 py-1 rounded-sm text-xl">
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
