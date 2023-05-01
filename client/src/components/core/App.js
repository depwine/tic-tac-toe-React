import Homepage from "../main/Homepage";
import React from "react";

import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import {useAuth0} from "@auth0/auth0-react";

function App() {

  const {isLoading} = useAuth0();

  if (isLoading) return <div>Loading ... </div>

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Container>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

const Container = styled.div`

`;

const GlobalStyle = createGlobalStyle`

    body{
      margin: 0px; 
      padding: 0px;
      height: 100%;
      font-family: 'Inter', sans-serif; 
      background-color: #f7f7f7;
   }

`;


