import React from "react";
import { img_cdn } from "../../utils/constants";

const MoviesCards = ({ posterPath }) => {
  return (
    <div className="w-38 mr-4 mt-1.5 ">
      <img src={img_cdn + posterPath} alt="" />
    </div>
  );
};

export default MoviesCards;
