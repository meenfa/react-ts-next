import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../../data/product";

const ProductDetails = () => {
  // 1 Get the dynamic 'id' from the URL
  const { id } = useParams();

  // 2 Finding specific product in our data
  const product = products.find((p) => p.id === id);

  // 3 case if product isn't found
  if (!product) {
    return (
      <div>
        <h2>Product is Not Found </h2>
        <Link to="/product">Go back to Products</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>
        {product.name}(<span>{product.category}</span>)
      </h1>

      <div>
        <p>
          <strong>ID:</strong> {product.id}
        </p>
        <p>
          <strong>Price:</strong> {product.price}
        </p>
        <p>
          <strong>Description:</strong> This is a high-quality{" "}
          {product.category} with amazing features.
        </p>
      </div>

      <div>
        <Link to="/product">Back to All Products</Link>
      </div>
    </div>
  );
};

export default ProductDetails;
