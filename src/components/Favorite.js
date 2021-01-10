import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
const Favorite = ({ searchTerm }) => {
  return (
    <div>
      <div className="like">
        <FavoriteBorderIcon />
      </div>
      <div className="liked" hidden>
        <FavoriteIcon />
      </div>
    </div>
  );
};

export default Favorite;
