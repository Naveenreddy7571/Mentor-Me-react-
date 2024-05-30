import React, { createContext, useState } from 'react';

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const [commentPopupVisible, setCommentPopupVisible] = useState(false);

  return (
    <CommentContext.Provider value={{ commentPopupVisible, setCommentPopupVisible }}>
      {children}
    </CommentContext.Provider>
  );
};

export default CommentContext;
