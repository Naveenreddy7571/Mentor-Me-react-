import React from "react";
import "./sidebar.css";
import {
  Home as HomeIcon,
  Explore as ExploreIcon,
  ContactSupport as ContactSupportIcon,
  Notifications as NotificationsIcon,
  Mail as MailIcon,
  AccountCircle as AccountCircleIcon,
  Settings as SettingsIcon,
  HelpOutline as HelpOutlineIcon,
} from "@mui/icons-material";

function Sidebar({ selectedComponent, setSelectedComponent }) {
  const sideBarDetails = [
    { icon: <HomeIcon />, name: "Feed" },
    { icon: <ExploreIcon />, name: "Search" },
    { icon: <ContactSupportIcon />, name: "Ask Question" },
    { icon: <NotificationsIcon />, name: "Notification" },
    { icon: <MailIcon />, name: "Message" },
    { icon: <AccountCircleIcon />, name: "My Profile" },
    { icon: <SettingsIcon />, name: "Settings" },
    { icon: <HelpOutlineIcon />, name: "Help & Support" },
  ];

  const handleClick = (nameOfOption) => {
    setSelectedComponent(nameOfOption);
  };

  return (
    <div id="sidebar" className="sidebar">
      {sideBarDetails.map((value, index) => (
        <div id="sidebar-optn" className="sidebaroption" key={index}>
          {value.icon}
          <button id="nav-bar-button" onClick={() => handleClick(value.name)}>
            <h2>{value.name}</h2>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
