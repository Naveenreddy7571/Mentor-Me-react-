import React from 'react';
import './PopUp.css';
import CommentContext from '../../CommentContext.jsx';
import { useContext } from "react";

function PopUp() {
  const { commentPopupVisible, setCommentPopupVisible } = useContext(CommentContext);
  if (!commentPopupVisible) return null;
  function onClose()
  {
    setCommentPopupVisible(false);
  }
  return (

    <div id="comment-popup" >
      <div class="comment-header">
        <h2>Give Suggestion</h2>
        <button id="comment-close-btn"  onClick={onClose}>×</button>
      </div>
      <div class="comment-body">
        <textarea
          id="comment-text"
          placeholder="Give Your Suggestion here Mentor...."
        ></textarea>
      </div>
      <div class="comment-footer">
        <button id="comment-post-btn" onClick={onClose}>Post</button>
      </div>
    </div>
  );
}

export default PopUp;
