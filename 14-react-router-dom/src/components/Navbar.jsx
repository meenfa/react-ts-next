import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-4 flex flex-row items-center justify-between text-black">
      <h1 class="text-3xl font-bold underline">Logo</h1>
      <div className="flex items-center gap-6 font-semibold">
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/product">Product</Link>
      </div>
    </nav>
  );
};

export default Navbar;
