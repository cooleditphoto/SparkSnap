import React from "react";
import CreateSparkSnap from "./CreateDropDown";

const Header = ({ history, handleSubmit }) => {
  return (
    <div>
      <CreateSparkSnap/>
      <h1>SparkSnap</h1>
    </div>
  );
};

export default Header;
