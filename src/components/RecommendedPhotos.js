import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";
const RecommendedPhotos = () => {
  const { images, loading, runSearch } = useContext(PhotoContext);
  useEffect(() => {
    let searchTags = localStorage.getItem("search");
    runSearch(searchTags);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
};

export default RecommendedPhotos;
