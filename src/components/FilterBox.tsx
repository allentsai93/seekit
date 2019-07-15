import * as React from "react";
import styled from "styled-components";
import { AppState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { removeTag, clearTags } from "../store/actions/search";
import Tag from "./Tag";

const Container = styled.div`
  width: 1300px;
  max-width: 100%;
  display: flex;
  flex-flow: column nowrap;
  height: auto;
  padding: 10px;
  box-sizing: border-box;
  align-items: flex-start;
  & * {
    margin: 0;
  }
  p {
    font-weight: lighter;
  }
  span {
    font-weight: bold;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1;
  margin: 5px 0;
`;

const FilterBox = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: AppState) => state.search);

  const tagList = state.tags.map((tag, i) => (
    <Tag key={i} clickHandler={removeTag} tag={tag} fromFilterBox={true} />
  ));

  return (
    <Container>
      <p>
        Filter down your search{" "}
        {state.searchInput ? `for ${state.searchInput}` : ""} by clicking on
        tags
      </p>
      <TagContainer>{tagList}</TagContainer>
      {tagList.length > 0 ? (
        <>
          <span onClick={() => dispatch(clearTags())}>Clear Tags</span>
        </>
      ) : null}
    </Container>
  );
};

export default FilterBox;
