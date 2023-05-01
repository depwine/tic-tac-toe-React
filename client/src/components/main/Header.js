import styled from "styled-components";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Header = () => {

  return (
    <Container>
        Header
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
