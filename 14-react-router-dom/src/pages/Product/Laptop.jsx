import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../data/product";

const Laptop = () => {
  const laptops = products.filter((p) => p.category === "laptop");
  return (
    <div>
      <h2>Browse our Laptops</h2>
      <ul>
        {laptops.map((laptop) => (
          <li key={laptop.id}>
            <Link to="/product/${laptop.id}">{laptop.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Laptop;
