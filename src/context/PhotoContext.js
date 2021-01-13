import React, { createContext, useState } from "react";
import axios from "axios";
export const PhotoContext = createContext();

const PhotoContextProvider = props => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const runSearch = query => {
console.warn("runsearch query: "+query)
    axios
      .get(
        `https://ypjijw6zj5.execute-api.us-east-1.amazonaws.com/prod/getphotosbytags?tags=${query}&per_page=24`
      )
      .then(response => {
        setImages(response.data);
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
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
