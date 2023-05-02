import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../core/UserContext";
import Grid from "../game/Grid";

const Body = () => {

    const {turn, setTurn} = useContext(UserContext)
    const {playPiece, setPlayPiece} = useContext(UserContext)

    const { setGridElements } = useContext(UserContext)

    const {gameOver, setGameOver} = useContext(UserContext)
    const {gameWin, setGameWin} =  useContext(UserContext)

    const [ winner, setWinner] = useState(null)

    useEffect(() => {

        if (gameWin) {
            setWinner(playPiece)
        }

        if (turn > 9 && ! gameWin) {
            setGameOver(true)
        }

        if (turn % 2 === 0 ){
            setPlayPiece("O")
        } else {
            setPlayPiece("X")
        }

    }, [turn])

    const handleReset = () => {

        setGridElements([null, null, null, null, null, null, null, null, null]);
        setTurn(1);
        setGameOver(false)
        setGameWin(false);
    }

    return (
        <Container>
            
            <button onClick = {() => {handleReset()}}>
                Reset
            </button>
            <div>
                Turn #: {turn}
            </div>
            <div>
                Player: { playPiece }
            </div>
            <Grid />
            {
                gameWin &&
                <div>Winner: {winner} </div>
            }
            {
                gameOver &&
                <div>Game Over, Tie</div>
            }


        </Container>
    )
}

export default Body;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 89vh;
    outline: 1px solid green;
`;