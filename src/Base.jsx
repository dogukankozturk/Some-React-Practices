import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Base = () => {
  return (
    <div className="baseLink">
      <Link to={"/random"}>
        <Button type="primary">App</Button>
      </Link>
      <Link to={"/unsplash"}>
        <Button danger type="primary">
          Axios
        </Button>
      </Link>
      <Link to={"/task"}>
        <Button type="primary">Task</Button>
      </Link>
    </div>
  );
};

export default Base;
