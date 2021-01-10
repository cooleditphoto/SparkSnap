import React from "react";
import Form from "./Form";
import Tags from "./Tags";
import CreateSparkSnap from "./CreateDropDown";

const Header = ({ history, handleSubmit }) => {
  return (
    <div>
      <CreateSparkSnap/>
      <h1>SparkSnap</h1>
      <Form history={history} handleSubmit={handleSubmit} />
      <Tags />
    </div>
  );
};

export default Header;
