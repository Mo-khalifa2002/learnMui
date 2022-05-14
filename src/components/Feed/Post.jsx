import React from "react";
import "./FeedCss.css";
import Container from "@mui/material/Container";
import { Avatar } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import face from "../../assets/1.jpeg";
import Street from "../../assets/1 (1).jpeg";
import heart from "../../assets/heart.png";
import like from "../../assets/like.png";
import { users } from "../DummyData";
import { useState } from "react";
import { Link } from "react-router-dom";

const Post = ({ posts }) => {
  const [likee, setLikee] = useState(posts.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLikee(isLiked ? likee - 1 : likee + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route to="profile" element={<Profiles />} />
        </Routes>
      </BrowserRouter> */}
      <div className="post">
        <div className="topPost">
          <div className="topPostRight">
            <div className="rightt">
              <Link to="profile">
                <Avatar alt="Mo-khalifa" src={face} />
              </Link>
              <div className="name">Mickey</div>
            </div>
            <div className="time">{posts.date}</div>
          </div>
          <div className="topPostLeft">
            <MoreVertIcon />
          </div>
        </div>
        {/* middle post */}
        <h2 className="postHeader">
          {posts?.desc ? posts?.desc : <div>no description for this post</div>}
        </h2>
        <div>
          <img className="image" src={Street} alt="post image" />
        </div>
        {/* the post footer */}
        <div className="postFooter">
          <div className="postFooterRight">
            <div className="likeButton">
              <img src={like} alt="like" onClick={likeHandler} />
            </div>
            <div className="loveButton">
              <img src={heart} alt="love" onClick={likeHandler} />
            </div>
            <h4 className="footerTes">{likee} people like it</h4>
          </div>
          <div className="comments">{posts?.comment} Comments</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
