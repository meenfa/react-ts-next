import React from "react";

const ImageCard = ({ elem, idx }) => {
  return (
    <div>
      {" "}
      <a href={elem.url}>
        <div
          key={idx}
          className="flex flex-col items-center p-4 rounded-lg justify-center"
        >
          <img
            src={elem.download_url}
            alt={`image ${idx + 1}`}
            className="w-full h-48 rounded-lg object-cover"
          />
          <h2 className="text-black mt-4 text-xl text-center">{elem.author}</h2>
        </div>
      </a>
    </div>
  );
};

export default ImageCard;
