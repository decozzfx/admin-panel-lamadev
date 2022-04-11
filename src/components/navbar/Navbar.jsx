import React from "react";
import { Brightness4Outlined, ChatBubbleOutline, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined, SearchOutlined } from "@material-ui/icons";

import "./navbar.scss";
import avatar from '../../assets/images/orang.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined />
        </div>
        <div className="items">
           <div className="item">
              <LanguageOutlined className="icon"/>
              English
           </div>
           <div className="item">
              <Brightness4Outlined className="icon"/>
           </div>
           <div className="item">
              <FullscreenExitOutlined className="icon"/>
           </div>
           <div className="item">
              <NotificationsNoneOutlined className="icon"/>
              <div className="counter">3</div>
           </div>
           <div className="item">
              <ChatBubbleOutline className="icon"/>
              <div className="counter">1</div>
           </div>
           <div className="item">
              <ListOutlined className="icon"/>
           </div>
           <div className="item">
              <img 
              src={avatar}
              alt="ava"
              className="avatar"
              />
           </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
