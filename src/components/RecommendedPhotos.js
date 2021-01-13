import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

const RecommendedPhotos = () => {
  const { images, loading, runSearch } = useContext(PhotoContext);
  useEffect(() => {
   let sparkText =  localStorage.getItem("sparkText");
    var pos = require("pos");
    var words = new pos.Lexer().lex(
     sparkText
    );
    var tagger = new pos.Tagger();
    var taggedWords = tagger.tag(words);
    let searchTags = [];

    for (const i in taggedWords) {
      var taggedWord = taggedWords[i];
      var word = taggedWord[0];
      var tag = taggedWord[1];
      if (tag === "NN" || tag === "NNS" || tag === "JJ") {
        searchTags.push(word);
      }
    }
    let searchTagsString = searchTags.toString();
    console.warn("recommendedphotos searchtags: "+searchTagsString)
    if(searchTagsString === ''){
      searchTagsString = "default";
    }
    runSearch(searchTagsString);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
};

export default RecommendedPhotos;