import React from "react";
import "./sidebar.css";
import { Bookmark, Chat, Event, Groups, Luggage, QuestionAnswerRounded, RssFeed, School, VideoCallRounded } from "@mui/icons-material";
import { Users } from "../../../mockdata";
import Friend from "../Friends/Friend";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeed />
              <span className="sidebarListItemText">Feed</span>
            </li>

            <li className="sidebarListItem">
              <Chat />
              <span className="sidebarListItemText">Chats</span>
            </li>

            <li className="sidebarListItem">
              <VideoCallRounded />
              <span className="sidebarListItemText">Videos</span>
            </li>

            <li className="sidebarListItem">
              <Groups />
              <span className="sidebarListItemText">Groups</span>
            </li>

            <li className="sidebarListItem">
              <Bookmark />
              <span className="sidebarListItemText">Bookmarks</span>
            </li>

            <li className="sidebarListItem">
              <QuestionAnswerRounded />
              <span className="sidebarListItemText">Question</span>
            </li>

            <li className="sidebarListItem">
              <Luggage />
              <span className="sidebarListItemText">Jobs</span>
            </li>

            <li className="sidebarListItem">
              <Event />
              <span className="sidebarListItemText">Events</span>
            </li>

            <li className="sidebarListItem">
              < School/>
              <span className="sidebarListItemText">Courses</span>
            </li>
          </ul>
          <button className="sidebarButton">Show More</button>
          <hr />
          <ul className="sidebarFriendList">
          {
            Users.map((user) => (
              <Friend  key={user.id}  userProp={user}/>
            ))
          }
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
