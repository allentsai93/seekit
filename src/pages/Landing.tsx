import * as React from "react";
import styled from "styled-components";
import colours from "../colours";
import SearchBox from "../components/SearchBox";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  background-color: ${colours.bg};
  color: ${colours.fc};
`;

const Section = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding: 20px;
  background-color: ${colours.section};
  border-radius: 5px;
  ${colours.boxShadow}
  border-bottom: 8px solid #212121;
`;

const StyledSearchBox = styled(SearchBox)`
  display: flex;

  & form {
    display: flex;
  }

  & input {
    width: 300px;
    border-radius: 7px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: none;
    padding: 0.5vw 1vw;
    font-size: 1.5em;
    background-color: #383838;
    color: white;
    font-weight: lighter;
  }

  & button {
    border: none;
    border-radius: 7px;
    border-top-left-radius: 0;
    background-color: #383838;
    color: white;
    border-bottom-left-radius: 0;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.3em;
  }
`;

const Landing = () => {
  return (
    <Container>
      <Section>
        <h1>Landing Page</h1>
        <StyledSearchBox />
      </Section>
    </Container>
  );
};

export default Landing;
