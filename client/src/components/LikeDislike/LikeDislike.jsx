import React, { useState } from "react";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LikeDislike() {
    const [ like , setLike ] = useState(0);
    const [ dislike , setDislike ] = useState(0);

    const [ activeBtn , setActiveBtn ] = useState("none");

    const likeCount = () => {
        if (activeBtn === "none") {
            setLike(like + 1);
            setActiveBtn("like");
            return;
        }

        if (activeBtn === "like") {
            setLike(like - 1);
            setActiveBtn("none");
            return;
        }

        if (activeBtn === "dislike") {
            setLike(like + 1);
            setDislike(dislike - 1);
            setActiveBtn("like");
        }
    };

    const dislikeCount = () => {
        if (activeBtn === "none") {
            setDislike(dislike + 1);
            setActiveBtn("dislike");
            return;
        }

        if (activeBtn === "dislike") {
            setDislike(dislike - 1);
            setActiveBtn("none");
            return;
        }

        if (activeBtn === "like") {
            setDislike(dislike + 1);
            setLike(like - 1);
            setActiveBtn("dislike");
        }
    };

    
    return (
        <div>
          <div className="btnLD-container">
            <button
              className={`btnLD ${activeBtn === 'like' ? 'like-active' : ''}`}
              onClick={likeCount}>
              <FontAwesomeIcon icon={faThumbsUp}/>
              Like {like}
            </button>
    
            <button
              className={`btnLD ${activeBtn === 'dislike' ? 'dislike-active' : ''}`}
              onClick={dislikeCount}>
              <FontAwesomeIcon icon={faThumbsDown}/>
              Dislike {dislike}
            </button>
          </div>
        </div>
      );
}

export default LikeDislike;