import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {

    // initialize empty grid
  const [gridElements, setGridElements] = useState([null, null, null, null, null, null, null, null, null])
    // initialize game at turn 1
  const [ turn, setTurn ] = useState(1);



  return (
    <UserContext.Provider 
        value={{
          gridElements, setGridElements,
          turn, setTurn
        }}>{children}
    </UserContext.Provider>
  
  )

};
