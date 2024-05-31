import React, { useState } from "react";
import "./Header.css";
import Logo from "../../images/Logo.png";
import profile from "../../images/profile-pic.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import LogoutIcon from "@mui/icons-material/Logout";
import { useMemo } from "react";
function Header() {
  const [isProfileDropDownActivated,setisProfileDropDownActivated] = useState(false);
  return (
    <div>
      <div className="header" id="header">
        <div className="logo" id="logo">
          <img src={Logo} alt="Logo" />
          <h2>Mentor Me</h2>
        </div>

        <div className="feed_header" id="feed_header">
          <form>
            <input type="text" placeholder="Name Email Skills" />
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
        </div>

        <div className="header_items">
          <button>
            <ChatBubbleIcon />
          </button>
          <button>
            <FavoriteIcon />
          </button>
          <button id="arrow_drop_down" onClick={(event) =>{
              event.stopPropagation();
              setisProfileDropDownActivated(prev => !prev);

          } }>

            <ArrowDropDownIcon />
          </button>
          <button id="myButton">
            <img src={profile} alt="Profile" />
          </button>

          <div className={"profile-drop-down-menu" + (isProfileDropDownActivated ? " open-menu" : "")} id="profile_menu">
            <div 
              className="profile-menu"
              >
              <div className="user-info">
                <img src={profile} alt="User" />
                <h3>Naveen Reddy</h3>
              </div>
              <hr />

              <div className="profile-items">
                <a href="#" className="sub-menu-link">
                  <AccountCircleIcon />
                  <h3>Edit Profile</h3>
                </a>

                <a href="#" className="sub-menu-link">
                  <SettingsIcon />
                  <h3>Settings</h3>
                </a>

                <a href="#" className="sub-menu-link">
                  <ContactSupportIcon />
                  <h3>Help and Support</h3>
                </a>

                <a href="#" className="sub-menu-link">
                  <LogoutIcon />
                  <h3>Logout</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default React.memo(Header)
