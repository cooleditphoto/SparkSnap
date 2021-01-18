import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <h1>SparkSnap</h1>
      </Link>
    </div>
  );
};

export default Header;
