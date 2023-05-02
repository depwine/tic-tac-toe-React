import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {

    // initialize empty grid
  const [gridElements, setGridElements] = useState([null, null, null, null, null, null, null, null, null])
  const [playPiece, setPlayPiece] = useState("X")
    // initialize game at turn 1
  const [ turn, setTurn ] = useState(1);

  const [gameOver, setGameOver] = useState(false);
  const [gameWin, setGameWin] = useState(false);



  return (
    <UserContext.Provider 
        value={{

          gridElements, setGridElements,

          turn, setTurn,

          gameOver, setGameOver,

          gameWin, setGameWin,

          playPiece, setPlayPiece

        }}>{children}
    </UserContext.Provider>
  
  )

};
