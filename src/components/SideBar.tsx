import * as React from "react";
import styled from "styled-components";
import colours from "../colours";

const Container = styled.div`
  width: 15vw;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  padding: 10px;
  background-color: ${colours.section};
  ${colours.boxShadow}
`;

const SideBar = () => {
  return <Container>SideBar</Container>;
};

export default SideBar;
