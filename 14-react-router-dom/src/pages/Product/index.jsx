import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1>Our Products</h1>
      <nav>
        <Link to="laptop">Laptop</Link> <br />
        <Link to="mobile">Mobile</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Product;
