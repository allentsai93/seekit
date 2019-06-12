import * as React from "react";
import styled from "styled-components";
import colours from "../colours";
import SearchBox from "./SearchBox";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  height: auto;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  background-color: ${colours.section};
  ${colours.boxShadow}
  color: white;
`;

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 90vw;
  padding: 10px;
  box-sizing: border-box;
  max-width: 100%;
`;

const StyledSearch = styled(SearchBox)`
  display: flex;
  align-items: center;
  margin: 0 10px;
  max-width: 70vw;
  & form {
    display: flex;
    border-radius: 50px;
    overflow: hidden;
    height: 40px;
  }

  & input {
    width: 300px;
    border-radius: 7px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: none;
    padding: 10px;
    font-size: 1em;
    background-color: #ffffff;
    color: black;
    font-weight: lighter;
  }

  & button {
    border: none;
    font-size: 0.8em;
    background-color: #ffffff;
    color: black;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

const SideBar = () => {
  const currInput = useSelector((state: any) => state.search.searchInput);

  return (
    <Container>
      <Content>
        <h2>{currInput}</h2>
        <StyledSearch />
      </Content>
    </Container>
  );
};

export default SideBar;
