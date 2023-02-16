import React from "react";
import SearchHeader from "./SearchHeader";
import searchImages from "./Api";
import ImageList from "./images/ImageList";
import { useState } from "react";

const Axios = () => {
  const [images, setImages] = useState([]);

  const handleSearch = async (search) => {
    const result = await searchImages(search);
    setImages(result);
  };

  return (
    <div className="axiosClass">
      <SearchHeader search={handleSearch}></SearchHeader>
      <ImageList imageList={images}></ImageList>
    </div>
  );
};

export default Axios;
