import styled from "styled-components";
import { useContext, useState } from "react";
import { UserContext } from "../core/UserContext";

const SingleSquare = ({ element, index }) => {

  const { gridElements, setGridElements } = useContext(UserContext);
  const { turn, setTurn } = useContext(UserContext);

  const [ playPiece, setPlayPiece ] = useState();

//   const [gameOver, setGameOver] = useState(false);
//   const [gameWin, setGameWin] = useState(false);

//   const checkTurn = () => {

//     console.log(turn)

//     if (turn === 9) {
//       setGameOver(true);
//       console.log("game over, tie");
//     }

//     if (
//       // check rows
//       (gridElements[0] === gridElements[1]) === gridElements[2] ||
//       (gridElements[3] === gridElements[4]) === gridElements[5] ||
//       (gridElements[6] === gridElements[7]) === gridElements[8] ||
//       // check columns
//       (gridElements[0] === gridElements[3]) === gridElements[6] ||
//       (gridElements[1] === gridElements[4]) === gridElements[7] ||
//       (gridElements[2] === gridElements[5]) === gridElements[8] ||
//       // check diags
//       (gridElements[0] === gridElements[4]) === gridElements[8] ||
//       (gridElements[6] === gridElements[4]) === gridElements[2]
//     ) {
//       setGameWin(true);
//       console.log("game win!");

//     }

//   };

    const handleTurn = () => {


        // if no element exists, play on.
            // otherwise, skip game loop and wait for click 
                // on another element
        if (!gridElements[index]) {

            // set play piece depending on turn 
                // (if odd, "X")
            if (turn % 2 !== 0) {
                setPlayPiece("X");
            } else {
                setPlayPiece("O");
            }

            // write piece to array
            let tempArr = gridElements;
            tempArr[index] = playPiece;

            setGridElements(tempArr)

            // increment turn
            setTurn(turn + 1);
        }

    } 


  return (
            <Button onClick = {() => {handleTurn()}}>
                {element}
            </Button>

  )
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
