import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../api/config";
export const SparkSnapContext = createContext();

const SparkSnapProvider = props => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = query => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then(response => {
        setImages(response.data.photos.photo);
        setLoading(false);
      })
      .catch(error => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  };
  return (
    <SparkSnapContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </SparkSnapContext.Provider>
  );
};

export default SparkSnapProvider;
