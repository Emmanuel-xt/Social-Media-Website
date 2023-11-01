import React from "react";
import "./friend.css";

const Friend = ({ userProp }) => {
  return (
    <li className="sidebarFriend">
      <img src={userProp.profilePicture} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendname">{userProp.username}</span>
    </li>
  );
};

export default Friend;
