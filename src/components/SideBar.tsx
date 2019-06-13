import * as React from "react";
import styled from "styled-components";
import colours from "../colours";
import SearchBox from "./SearchBox";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: auto;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  color: black;
  border-bottom: 1px solid #efefef;
  background-color: white;
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

const StyledLink = styled(Link)`
  color: #76707f;
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
    border: 0.3px solid #e0e0e0;
    border-radius: 50px;
    overflow: hidden;
    height: 40px;
    background: #d3cce3; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #e9e4f0,
      #d3cce3
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #e9e4f0,
      #d3cce3
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  & input {
    width: 300px;
    border: none;
    padding: 10px;
    font-size: 1em;
    background: none;
    color: black;
    font-weight: lighter;
  }

  & button {
    border: none;
    font-size: 0.8em;
    background: none;
    color: black;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

const SideBar = () => {
  return (
    <Container>
      <Content>
        <TextContent>
          <h1>Joblert</h1>
        </TextContent>
        <Navigation>
          <StyledLink to={"/jobs"}>Jobs</StyledLink>
          <StyledLink to={"/jobs"}>List</StyledLink>
          <StyledLink to={"/jobs"}>About</StyledLink>
        </Navigation>
        <StyledSearch />
      </Content>
    </Container>
  );
};

export default SideBar;
