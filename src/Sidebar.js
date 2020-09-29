import React from "react";
import Siderbar from "./Siderbar";
import Post from "./Post";
import "./SidebarM.css";
import Feed from "./Feed";

const Sidebar = () => {
  return (
    <div className="sidebarM">
      <div className="sidebar__left">
        <Siderbar />
      </div>
      <div className="sidebar__center">
        <Post />
      </div>
      <div className="sidebar__Right">
        <Feed />
      </div>
    </div>
  );
};

export default Sidebar;
