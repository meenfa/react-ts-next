import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Laptop from "./pages/Product/Laptop";
import Mobile from "./pages/Product/Mobile";
import ProductDetails from "./pages/Product/ProductDetails";
const App = () => {
  return (
    <div className="px-8">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* parent route */}

        <Route path="/product" element={<Product />}>
          <Route path="laptop" element={<Laptop />} />
          <Route path="mobile" element={<Mobile />} />
        </Route>
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;
