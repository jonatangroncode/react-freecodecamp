import React from "react";
import starFilled from "../../images/star-filled.png";
import starEmpty from "../../images/star-empty.png";

const Star = (props) => {
  let starIcon = props.isFilled ? starFilled : starEmpty;

  return (
    <button
      onClick={props.handleClick}
      aria-pressed={props.isFilled}
      aria-label={props.isFilled ? "Remove from favorites" : "Add to favorites"}
      className="favorite-button"
    >
      <img
        src={starIcon}
        alt={props.isFilled ? "Filled star icon" : "Empty star icon"}
        className="favorite"
      />
    </button>
  );
};

export default Star;
