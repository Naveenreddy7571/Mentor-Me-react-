// App.jsx
import React, { useState } from 'react';
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import RightSidebar from "./Components/RightSideBar/RightSidebar.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import renderPageConditionally from "./renderComponent.jsx";
import CommentContext from './CommentContext.jsx';
import { useContext } from "react";
import { CommentProvider } from './CommentContext.jsx';
import PopUp from './Components/CommentPopup/PopUp.jsx';
function App() {
  return (
    <CommentProvider>
      <AppContent />
    </CommentProvider>
  );
}

function AppContent() {
  const { commentPopupVisible, setCommentPopupVisible } = useContext(CommentContext);
  const [selectedComponent,setSelectedComponent] = useState("Feed");
  return (
    <>
    <div id="main-container" className={"App" + (commentPopupVisible ? " activate-blur" : "")}>
      <Header />
      <div id="down-content" className="down-content">
        <Sidebar 
        selectedComponent={selectedComponent}
        setSelectedComponent={setSelectedComponent}
        />
        <div id="selected component">{renderPageConditionally(selectedComponent)}</div>
        <RightSidebar />
      </div>
      
    </div>
    {commentPopupVisible &&  <PopUp /> }
    </>
    
  );
}

export default App;
