import React from "react";
import "./online.css";

const Online = ({userProp}) => {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <div className="">

        <img src={userProp.profilePicture} alt="" className="profileImg" />
        <span className="rightbarActive"></span>
        </div>
        <span className="rightbarName">{userProp.username}</span>
      </div>
    </li>
  );
};

export default Online;
