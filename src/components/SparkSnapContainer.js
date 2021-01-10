import React, { useContext, useEffect } from "react";
import { SparkSnapContext } from "../context/SparkSnapContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

const SparkSnapContainer = ({ searchTerm }) => {
  const { images, loading, runSearch } = useContext(SparkSnapContext);
  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className=".photo-container">
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
};

export default SparkSnapContainer;