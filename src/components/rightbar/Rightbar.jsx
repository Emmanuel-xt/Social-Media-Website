import React from "react";
import "./rightbar.css";
import birthday from "../../assets/persons/birthday.png";
import ad from "../../assets/persons/ad.jpg";
import { Users } from "../../../mockdata";
import Online from "../online/Online";

const Rightbar = () => {
  return (
    <>
      <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdaycontainer">
            <img src={birthday} alt="" className="birthdayImg" />
            <span className="birthdayText">
              PolaFoster and 3 other friend have a birthday today
            </span>
          </div>
          <img src={ad} alt="" className="rightbarAd" />
          <h4 className="rightbarTitle">Active Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map((user) => (
              <Online key={user.id} userProp={user} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Rightbar;
