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
  ${colours.gradientBg};
  color: ${colours.fc};
`;

const Section = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding: 20px;
  max-width: 100%;
  box-sizing: border-box;
  & h1 {
    font-size: 3em;
  }
  & * {
    margin: 0;
  }
`;

const StyledSearchBox = styled(SearchBox)`
  display: flex;
  max-width: 100%;
  & form {
    display: flex;
    max-width: 100%;
  }

  & input {
    max-width: 100%;
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

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column wrap;
  width: 373px;
  max-width: 100%;
  margin-bottom: 30px;
`;

const Landing = () => {
  return (
    <Container>
      <Section>
        <Content>
          <h1>Joblert</h1>
          <h2>
            A job search engine that allows you to look across all job boards in
            one place
          </h2>
        </Content>

        <StyledSearchBox />
      </Section>
    </Container>
  );
};

export default Landing;
