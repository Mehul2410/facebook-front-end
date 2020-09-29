import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded";
import SupervisedUserCircleSharpIcon from "@material-ui/icons/SupervisedUserCircleSharp";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, IconButton } from "@material-ui/core";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" />
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search facebook" />
      </div>
      <div className="header__center">
        <div className="header__centerOption">
          <HomeIcon />
        </div>
        <div className="header__centerOption">
          <FlagIcon />
        </div>
        <div className="header__centerOption">
          <SubscriptionsIcon />
        </div>
        <div className="header__centerOption">
          <StorefrontRoundedIcon />
        </div>
        <div className="header__centerOption">
          <SupervisedUserCircleSharpIcon />
        </div>
      </div>
      <div className="header__right">
        <div className="header__rightPhoto">
          <Avatar src="https://scontent.fbom5-1.fna.fbcdn.net/v/t31.0-8/17834036_1832954600363224_6501395873116193572_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=vfqdLHUZG_sAX8Z3UlI&_nc_ht=scontent.fbom5-1.fna&oh=3d8f8e8446f96969e7d83ed459e747a6&oe=5F853008" />
          <h3>mehul</h3>
        </div>

        <IconButton>
          <QuestionAnswerIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
