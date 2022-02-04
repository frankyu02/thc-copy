import React, { createContext } from 'react';

export const SubscribeFormContext = createContext(null);

export const SubscribeFormProvider = ({ children, data }) => {
  return <SubscribeFormContext.Provider value={data}>{children}</SubscribeFormContext.Provider>
};
