import React, { useState } from "react";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LikeDislike() {
    const [ rating, setRating ] = useState('');
    const [ activeBtn , setActiveBtn ] = useState("none");

    const likeCount = () => {
        if (activeBtn === "none") {
            setRating(rating + 1);
            setActiveBtn("like");
            return;
        }

        if (activeBtn === "dislike") {
            setRating(rating + 1);
            setActiveBtn("like");
        }
    };

    const dislikeCount = () => {
        if (activeBtn === "none") {
            setRating(rating - 1);
            setActiveBtn("dislike");
            return;
        }

        if (activeBtn === "like") {
            setRating(rating - 1);
            setActiveBtn("dislike");
        }
    };


    return (
        <div>
          <div className="btnLD-container">
            <button
              className={`btnLD thumb ${activeBtn === 'like' ? 'like-active' : ''}`}
              onClick={likeCount}>
              <FontAwesomeIcon icon={faThumbsUp} style={{ height: "30px"}}/>
            </button>
    
            <button
              className={`btnLD thumb ${activeBtn === 'dislike' ? 'dislike-active' : ''}`}
              onClick={dislikeCount}>
              <FontAwesomeIcon icon={faThumbsDown} style={{ height: "30px"}}/>
            </button>
            {rating}
          </div>
        </div>
      );
}

export default LikeDislike;