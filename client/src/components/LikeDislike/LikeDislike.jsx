import React, { useState } from "react";

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

    // copied for testing purposes
    return (
        <div className="container">
          <div className="btn-container">
            <button
              className={`btn ${activeBtn === 'like' ? 'like-active' : ''}`}
              onClick={likeCount}
            >
              <span className="material-symbols-rounded">thumb_up</span>
              Like {like}
            </button>
    
            <button
              className={`btn ${activeBtn === 'dislike' ? 'dislike-active' : ''}`}
              onClick={dislikeCount}
            >
              <span className="material-symbols-rounded">thumb_down</span>
              Dislike {dislike}
            </button>
          </div>
        </div>
      );
}

export default LikeDislike;