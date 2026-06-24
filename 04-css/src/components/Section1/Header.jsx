import React from "react";

const header = () => {
  return (
    <div className="flex items-center justify-between py-4 px-18 ">
      <h2 className="bg-black rounded-full text-sm text-gray-200 px-6 py-2 uppercase">
        Target Audience
      </h2>
      <button className="bg-gray-200 px-6 py-2 rounded-full uppercase tracking-wider text-sm">
        Get Started
      </button>
    </div>
  );
};

export default header;
