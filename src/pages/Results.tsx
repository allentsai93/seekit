import * as React from "react";
import { connect } from "react-redux";
import colours from "../colours";
import styled from "styled-components";
import SideBar from "../components/SideBar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row wrap;
  background-color: ${colours.bg};
  color: ${colours.fc};
`;

const Results = () => {
  return (
    <Container>
      <SideBar />
    </Container>
  );
};

export default connect()(Results);
