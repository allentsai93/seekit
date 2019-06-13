import * as React from "react";
import colours from "../colours";
import styled from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column wrap;
  ${colours.gradientBg}
  color: ${colours.fc};
`;

const Layout = (props: any) => {
  return (
    <Container>
      <NavBar />
      {props.children}
      <Footer />
    </Container>
  );
};

export default Layout;
