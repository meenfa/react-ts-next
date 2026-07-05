// pages/Product/Laptop.jsx
import React from "react";
import { Link } from "react-router-dom";

const Laptop = () => {
  return (
    <div>
      <h2>Browse our Laptops</h2>
      <ul>
        <li>
          <Link to="/product/1">MacBook Pro M2</Link>
        </li>
        <li>
          <Link to="/product/2">Dell XPS 15</Link>
        </li>
      </ul>
    </div>
  );
};

export default Laptop;
