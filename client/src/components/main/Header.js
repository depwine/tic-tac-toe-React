import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Header = () => {

    const nav = useNavigate()

  return (
    <Container>
        Header
        <button onClick={() => {
            nav("/profile")
        }}>
            Profile
        </button>
        <LoginButton/>
        <LogoutButton/>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 10vh;
  outline: 1px solid orange;
`;
