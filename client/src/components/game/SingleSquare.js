import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../core/UserContext";

const SingleSquare = ({ element, index, disabled }) => {
  const { gridElements } = useContext(UserContext);
  const { turn, setTurn } = useContext(UserContext);

  const { playPiece } = useContext(UserContext)

  const { setGameOver } = useContext(UserContext);
  const { setGameWin } = useContext(UserContext);

  const checkGameEnd = () => {
    if (
      // check rows, not null
      (gridElements[0] &&
        gridElements[0] === gridElements[1] &&
        gridElements[1] === gridElements[2]) ||
      (gridElements[3] &&
        gridElements[3] === gridElements[4] &&
        gridElements[4] === gridElements[5]) ||
      (gridElements[6] &&
        gridElements[6] === gridElements[7] &&
        gridElements[7] === gridElements[8]) ||
      // check columns not null
      (gridElements[0] &&
        gridElements[0] === gridElements[3] &&
        gridElements[3] === gridElements[6]) ||
      (gridElements[1] &&
        gridElements[1] === gridElements[4] &&
        gridElements[4] === gridElements[7]) ||
      (gridElements[2] &&
        gridElements[2] === gridElements[5] &&
        gridElements[5] === gridElements[8]) ||
      //check diags
      (gridElements[0] &&
        gridElements[0] === gridElements[4] &&
        gridElements[4] === gridElements[8]) ||
      (gridElements[2] &&
        gridElements[2] === gridElements[4] &&
        gridElements[4] === gridElements[6])
    ) {
      setGameWin(true);
      console.log("game win!");
    } else if (turn > 9) {
      setGameOver(true);
      console.log("game over, tie");
    }
  };


  const handleClick = () => {

    let tempArr = gridElements;
    tempArr[index] = playPiece;

    
    // inc turn
    setTurn(turn+1);

    checkGameEnd()

  }



  return (
    <Button
      disabled={disabled}
      onClick={() => {
        handleClick();
      }}
    >
      {element}
    </Button>
  );
};

export default SingleSquare;

const Button = styled.button`
  height: 200px;
  width: 200px;
  border: 1px solid red;
  background-color: white;
  font-size: 150px;

  &:hover {
    background-color: #fdc8c8;
    cursor: pointer;
  }
`;
