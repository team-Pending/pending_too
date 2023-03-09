import React, { useState } from "react";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LikeDislike() {
    const [ rating, setRating ] = useState('');
    const [ activeBtn , setActiveBtn ] = useState("none");

    const rateLike = () => {
        if (activeBtn === "none") {
          console.log("rating + 1")
            setRating(rating + 1);
            setActiveBtn("like");
            return;
        }

        if (activeBtn === "dislike") {
          console.log("rating + 1")
            setRating(rating + 1);
            setActiveBtn("like");
        }
    };

    const rateDislike = () => {
        if (activeBtn === "none") {
          console.log("rating - 1")
            setRating(rating - 1);
            setActiveBtn("dislike");
            return;
        }

        if (activeBtn === "like") {
          console.log("rating - 1")
            setRating(rating - 1);
            setActiveBtn("dislike");
        }
    };


    return (
        <div>
          <div className="btnLD-container">
            <button
              className={`btnLD thumb ${activeBtn === 'like' ? 'like-active' : ''}`}
              onClick={rateLike}>
              <FontAwesomeIcon icon={faThumbsUp} style={{ height: "30px"}}/>
            </button>
    
            <button
              className={`btnLD thumb ${activeBtn === 'dislike' ? 'dislike-active' : ''}`}
              onClick={rateDislike}>
              <FontAwesomeIcon icon={faThumbsDown} style={{ height: "30px"}}/>
            </button>

          </div>
        </div>
      );
}

export default LikeDislike;