import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feedbar from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";
import userImg from "../../assets/profilePictures/userImg.jpg";
import userCover from "../../assets/profilePictures/userCover.jpg";
import ProfileInfo from "../../components/profileInfo/ProfileInfo";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src={userCover} alt="" className="profileCoverImage" />
              <img src={userImg} alt="" className="profileUserImage" />
            </div>
            <div className="profileInfo">
              <h3 className="profileName">Emmanuel Okeke</h3>
              <span className="profileInfoAbout">
                Hello , I am a Web Developer ,React to be Precise
              </span>
            </div>
            <ProfileInfo />
          </div>
          <div className="profileRightBottom">
            <Feedbar />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
