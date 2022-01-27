import React, { createContext } from 'react';

export const PostContentContext = createContext(null);

export const PostContentProvider = ({ children, data }) => {
  return <PostContentContext.Provider value={data}>{children}</PostContentContext.Provider>
};
