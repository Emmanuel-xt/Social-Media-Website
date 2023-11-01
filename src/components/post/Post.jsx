import React, { useState } from "react";
import "./post.css";
// import precious from "../../assets/persons/precious.jpg";
import reactImg from "../../assets/persons/reactImg.jpg";
import { MoreVert } from "@mui/icons-material";
import likes from '../../assets/persons/like.png'
import heart from '../../assets/persons/love.png'
import {Users} from '../../../mockdata'


const Post = ({postProp}) => {

    const [like , setLike] = useState(postProp.like)
    const [islike , setIsLike] = useState(false)
    
    const UpdateBoth = () => {
      setLike(islike ? like - 1 : like + 1 )
      setIsLike(!islike)
    }


  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={ Users.filter((user) => user.id === postProp.userId)[0]?.profilePicture} alt="" className="posterProfileImg" />
            <span className="posterUsername">{ Users.filter((user) => user.id === postProp.userId)[0]?.username}</span>
          </div>
          <div className="postTopRight">
            <span className="postDate">{postProp.date}</span>
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{postProp?.postText}</span>
          <img src={postProp?.photo} alt="" className="postImg"/>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src={likes} alt="" className="likeIcon"  onClick={UpdateBoth}  />
            <img src={heart} alt="" className="likeIcon"/>
            <span className="postLikeCounter">{like} {`${postProp.like > 1 ? "likes" : "like"}`}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{postProp.comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
