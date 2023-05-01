import styled from "styled-components";
import Profile from "./Profile";

const Body = () => {

    return (
        <Container>
            <Profile/>
        </Container>
    )
}

export default Body;

const Container = styled.div`
    height: 89vh;
    outline: 1px solid green;
`;