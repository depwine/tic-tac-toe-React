import styled from "styled-components"

import Header from "./Header"
import Body from "./Body"

const Homepage = () => {

    return (
        <Main>
            <Header />
            <Body />
        </Main>
    )

}

export default Homepage

const Main = styled.div`

    height: 100%;
    width: 100%;
    outline: 1px solid red;

`;