import React from "react";
import Form from "./Form";

const SearchForm = ({ history, handleSubmit }) => {
  return (
    <div>
      <Form history={history} handleSubmit={handleSubmit} />
    </div>
  );
};

export default SearchForm;