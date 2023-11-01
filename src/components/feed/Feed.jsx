import React from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import {Posts} from '../../../mockdata'


const Feedbar = () => {
  return (
    <>
      <div className="feedbar">
      <div className="feedWrapper">
        <Share />
        {
          Posts.map(post => (
            <Post key={post.id} postProp={post} />
            
          ))
        }

      </div>
      </div>
    </>
  );
};

export default Feedbar;
