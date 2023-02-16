import React from "react";
import "../random/App.css";
import { useState } from "react";

const SearchHeader = ({ search }) => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (event) => {
    search(searchText);
    event.preventDefault();
  };

  const handleTextChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="searchDiv">
      <form className="searchForm" onSubmit={handleSubmit}>
        <label> Ne Arıyorsunuz ?</label>
        <input type="text" value={searchText} onChange={handleTextChange} />
      </form>
    </div>
  );
};

export default SearchHeader;
