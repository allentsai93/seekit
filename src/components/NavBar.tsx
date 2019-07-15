import * as React from "react";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: auto;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  color: white;
  padding-top: 10px;
`;
const TextContent = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  & * {
    margin: 0;
  }
`;
const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 1300px;
  padding: 10px;
  box-sizing: border-box;
  justify-content: space-between;
  max-width: 100%;
`;
const Navigation = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;
const HeadLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 2em;
`;

const StyledLink = styled(Link)`
  color: #dedede;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.7px;
  font-size: 0.9em;
  margin: 0 10px;
`;

const StyledSearch = styled(SearchBox)`
  display: flex;
  align-items: center;
  max-width: 70vw;
  & form {
    display: flex;
    border: 2px solid #fff;
    border-radius: 50px;
    overflow: hidden;
    height: 40px;
    box-sizing: border-box;
    background: none;
  }

  & input {
    width: 300px;
    border: none;
    padding: 10px 20px;
    box-sizing: border-box;
    font-size: 1em;
    background: none;
    color: white;
    font-weight: bold;
  }

  & button {
    border: none;
    font-size: 0.8em;
    background: none;
    color: black;
    display: flex;
    justify-content: center;
    font-weight: bold;
    text-transform: uppercase;
    align-items: center;
  }
`;

const SideBar = (props: RouteComponentProps) => {
  return (
    <Container>
      <Content>
        <TextContent>
          <HeadLink to={"/jobs"}>Joblert</HeadLink>
        </TextContent>
        <Navigation>
          <StyledLink to={"/jobs"}>Jobs</StyledLink>
          <StyledLink to={"/saved"}>Saved</StyledLink>
          <StyledLink to={"/jobs"}>About</StyledLink>
        </Navigation>
        <StyledSearch />
      </Content>
    </Container>
  );
};

export default withRouter(SideBar);
