import {
  Chat,
  NotificationAdd,
  Notifications,
  Person,
  Search,
} from "@mui/icons-material";
import React from "react";
import "./topbar.css";
import topbargirl from "../../assets/persons/topbargirl.jpg";
const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div className="logo">xTrica</div>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input type="text" placeholder="Search for Friend , post or time"  className="searchInput"/>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
          <img src={topbargirl} alt="" className="topbarimg" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
