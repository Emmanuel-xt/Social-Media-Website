import React, { useState } from "react";
import man4 from "../../assets/profilePictures/man4.jpg";
import "./profileInfo.css";
import {
  HeartBroken,
  LocationCity,
  VideoCameraFront,
  Villa,
} from "@mui/icons-material";
const ProfileInfo = () => {

    const [click , setClick] = useState(false)

    const handleClick = () => {
        setClick(true)
    }

  return (
    <>
      <h4 className="profileAboutTitle">About Emmanuel</h4>
      <div className="aboutInfo">
        <div className="aboutInfoItem">
          <LocationCity htmlColor="grey" />
          <span className="aboutInfoKey">City</span>
          <span className="aboutInfoValue">New York</span>
        </div>
        <div className="aboutInfoItem">
          <Villa htmlColor="blue" />
          <span className="aboutInfoKey">From</span>
          <span className="aboutInfoValue">Oraifite</span>
        </div>
        <div className="aboutInfoItem">
          <HeartBroken htmlColor="red" />
          <span className="aboutInfoKey">Relationship</span>
          <span className="aboutInfoValue">Single</span>
        </div>
        <div className="aboutInfoItem">
          <VideoCameraFront />
          <span className="aboutInfoKey" onClick={handleClick}>Following</span>
          <span className="aboutInfoValue">10</span>
        </div>
      </div>

      <div className={`aboutFollowings  ${click? "show" : " " }`} >
        <div className="aboutFollowing">
          <img src={man4} alt="" className="aboutFollowingImg" />
          <span className="aboutFollowingName">ArinzeChukwu Okeke</span>
        </div>

        <div className="aboutFollowing">
          <img src={man4} alt="" className="aboutFollowingImg" />
          <span className="aboutFollowingName">ArinzeChukwu Okeke</span>
        </div>

        <div className="aboutFollowing">
          <img src={man4} alt="" className="aboutFollowingImg" />
          <span className="aboutFollowingName">ArinzeChukwu Okeke</span>
        </div>
        <div className="aboutFollowing">
          <img src={man4} alt="" className="aboutFollowingImg" />
          <span className="aboutFollowingName">ArinzeChukwu Okeke</span>
        </div>

        <div className="aboutFollowing">
          <img src={man4} alt="" className="aboutFollowingImg" />
          <span className="aboutFollowingName">ArinzeChukwu Okeke</span>
        </div>

        <div className="aboutFollowing">
          <img src={man4} alt="" className="aboutFollowingImg" />
          <span className="aboutFollowingName">ArinzeChukwu Okeke</span>
        </div>

        <div className="aboutFollowing">
          <img src={man4} alt="" className="aboutFollowingImg" />
          <span className="aboutFollowingName">ArinzeChukwu Okeke</span>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
