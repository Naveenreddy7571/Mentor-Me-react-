import React, { useState, useContext } from "react";
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import RightSidebar from "./Components/RightSideBar/RightSidebar.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import renderPageConditionally from "./renderComponent.jsx";
import CommentContext from "./CommentContext.jsx";
import PopUp from "./Components/CommentPopup/PopUp.jsx";

function App() {
  const { isCommentPopupVisible } = useContext(CommentContext);
  const [selectedComponent, setSelectedComponent] = useState("Feed");

  return (
    <>
      <div
        id="main-container"
        className={`App ${(isCommentPopupVisible ? " activate-blur" : "")}`}
      >
        <Header />
        
        <div 
          id="down-content" 
          className={`down-content ${selectedComponent === "Feed" ? "feed-activated" : "feed-deactivated"}`}
        >
          <Sidebar
            selectedComponent={selectedComponent}
            setSelectedComponent={setSelectedComponent}
          />
          <div id="selected-component">
            {renderPageConditionally(selectedComponent)}
          </div>
          {selectedComponent === "Feed" && <RightSidebar />}
        </div>
      </div>
      {isCommentPopupVisible && <PopUp />}
    </>
  );
}

export default App;
