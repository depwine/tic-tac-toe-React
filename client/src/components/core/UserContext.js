import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {

  return (
    <UserContext.Provider 
        value={{}}>{children}
    </UserContext.Provider>
  
  )

};
