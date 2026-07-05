import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 className="text-red-600 font-black text-6xl">404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you are looking for doesn't exist or has been moved.</p>

      <Link to="/" className="text-green-600">
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
