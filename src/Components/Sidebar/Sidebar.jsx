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
  const sideBarItemsList = [
    { icon: <HomeIcon />, name: "Feed" },
    { icon: <ExploreIcon />, name: "Search" },
    { icon: <ContactSupportIcon />, name: "Ask Question" },
    { icon: <NotificationsIcon />, name: "Notification" },
    { icon: <MailIcon />, name: "Message" },
    { icon: <AccountCircleIcon />, name: "My Profile" },
    { icon: <SettingsIcon />, name: "Settings" },
    { icon: <HelpOutlineIcon />, name: "Help & Support" },
  ];

  return (
    <div 
      id="sidebar" 
      className="sidebar"
    >
      {sideBarItemsList.map((value, index) => (
        <div 
          id="sidebar-optn" 
          className="sidebaroption" 
          key={index}
        >
          {value.icon}
          <button
            id="nav-bar-button"
            onClick={() => setSelectedComponent(value.name)}
          >
            <h2 
              className={selectedComponent === value.name ? "active" : ""}>
              {value.name}
            </h2>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
