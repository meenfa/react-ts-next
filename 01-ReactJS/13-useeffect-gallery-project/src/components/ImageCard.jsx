import React, { useState } from "react";

const ImageCard = ({ elem }) => {
  const [isLoaded, setisLoaded] = useState(false);

  const imageUrl = `https://picsum.photos/id/${elem.id}/400/300`;

  return (
    <div>
      <a href={elem.url}>
        <div className="relative ovewrflow-hidden flex flex-col items-center p-4 rounded-lg justify-center">
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-400 animate-pulse" />
          )}
          {/* optimized image */}
          <img
            src={imageUrl}
            alt={`Photo by ${elem.author}`}
            loading="lazy"
            onLoad={() => setisLoaded(true)}
            width="400"
            height="300"
            className={`w-full h-48 rounded-lg object-cover transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
          <h2 className="text-black mt-4 text-xl text-center">{elem.author}</h2>
        </div>
      </a>
    </div>
  );
};

export default ImageCard;
