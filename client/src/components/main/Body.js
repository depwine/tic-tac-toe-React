import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../core/UserContext";
import Grid from "../game/Grid";

const Body = () => {

    const {turn} = useContext(UserContext)

    return (
        <Container>
            <div>
                Turn #: {turn}
            </div>
            <div>
                Player: {
                    turn % 2 === 0
                    ? "O"
                    : "X"
                }
            </div>

            <Grid />
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