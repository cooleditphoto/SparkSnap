import React from "react";
import Container from "./Container";

const Search = ({ searchTerm }) => {
  return (
    <div>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Search;
