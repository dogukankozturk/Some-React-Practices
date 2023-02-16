import React from "react";

const ImageItem = ({ imageItem }) => {
  console.log(imageItem);
  return (
    <div>
      <img src={imageItem.urls.regular} alt={imageItem.alt_description}></img>
    </div>
  );
};

export default ImageItem;
