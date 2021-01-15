import React, { createContext, useState } from "react";
import axios from "axios";
export const PhotoContext = createContext();

const PhotoContextProvider = props => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
       /* `https://ypjijw6zj5.execute-api.us-east-1.amazonaws.com/prod/getphotosbytags?tags=${query}&per_page=24*/

  const runSearch = query => {
console.warn("runsearch query: "+query)
    axios
      .get(
       `https://api.pexels.com/v1/search?query=${query}&per_page=48&orientation=square`,
       { headers: { Authorization:'563492ad6f917000010000015174f746dcbe49d3924171700d3225fc' } }     
       )
      .then(response => {
        setImages(response.data.photos);
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
