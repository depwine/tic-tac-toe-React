import styled from "styled-components";
import SingleSquare from "./SingleSquare";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../core/UserContext";


const Grid = () => {

    const { gridElements, setGridElements} = useContext(UserContext);
    const { turn } = useContext(UserContext)

    const {gameOver } = useContext(UserContext)
    const {gameWin } =  useContext(UserContext)

    /*

        create a grid equal to 9 array elements
        each time one is clicked, update array and display
        if turn even, X
        if turn odd, O

        check win condition after turn 3

    */

    useEffect(() => {

        console.log(gridElements)         

    }, [turn])

    return (
        <Container>
            {
                gridElements.map((elem, index) => {

                    return (

                        gameOver || gameWin
                        ? <SingleSquare key = {index} element = {elem} turn = {turn} index = {index} disabled={true}/>
                        : <SingleSquare key = {index} element = {elem} turn = {turn} index = {index} disabled={false}/>
                    )

                })
            }
        </Container>
    )


}

export default Grid;

const Container = styled.div`
    width: 615px;
    height: 615px;
    column-gap: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    outline: 2px solid red;

`;

