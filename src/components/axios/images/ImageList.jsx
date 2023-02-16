import React from "react";
import ImageItem from "./ImageItem";
import "../../random/App.css"

const ImageList = ({ imageList }) => {
  return (
    <div className="imageList">
      {imageList.map((image, index) => {
        return <ImageItem key={image.id} imageItem={image} />;
      })}
    </div>
  );
};

export default ImageList;
