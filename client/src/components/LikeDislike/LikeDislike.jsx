import React, { useState } from "react";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LikeDislike() {
    const [ like , setLike ] = useState('');
    const [ dislike , setDislike ] = useState('');

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
              className={`btnLD thumb ${activeBtn === 'like' ? 'like-active' : ''}`}
              onClick={likeCount}>
              <FontAwesomeIcon icon={faThumbsUp} style={{ height: "30px"}}/>
              {/* {like} */}
            </button>
    
            <button
              className={`btnLD thumb ${activeBtn === 'dislike' ? 'dislike-active' : ''}`}
              onClick={dislikeCount}>
              <FontAwesomeIcon icon={faThumbsDown} style={{ height: "30px"}}/>
              {/* {dislike} */}
            </button>
          </div>
        </div>
      );
}

export default LikeDislike;