import React from "react";

import Angular from "./images/angular.jpg";
import BootStrap from "./images/bootstrap5.png";
import CSharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

//Stringleri küçük harfle ve boşluksuz yazarak eşleştirme
const courseMap = {
  angular: Angular,
  bootstrap: BootStrap,
  csharp: CSharp,
  kompleweb: KompleWeb,
};

const removeSpaces = (str) => {
  return str.replace(/\s/g, "").toLowerCase();
};

const Course = ({ courseName }) => {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={courseMap[removeSpaces(courseName.name)]}
              alt={courseMap[removeSpaces(courseName.name)]}
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{removeSpaces(courseName.name)}</p>
            </div>
          </div>
          <div className="content">{courseName.desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Course;
