// Feedbar.js

import React, { useState, useEffect } from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../../mockdata";
import { ArrowRight } from "@mui/icons-material";
import Sidebar from "../sidebar/Sidebar";

const Feedbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showArrow, setShowArrow] = useState(window.innerWidth < 850);

  const handleCLick = () => {
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowArrow(window.innerWidth < 850);
      // If the screen width is less than 850, close the sidebar
      if (window.innerWidth < 850) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="feedbar">
        <div className="feedWrapper">
          {showArrow && (
            <div className="show">
              <ArrowRight onClick={handleCLick} />
            </div>
          )}

          {!showArrow && isNavOpen && <Sidebar />}

          {!isNavOpen && <Share />}

          <div className={`display ${isNavOpen ? 'disv' : ''}`}>
            {Posts.map((post) => (
              <Post key={post.id} postProp={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedbar;
