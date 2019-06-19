import * as React from "react";
import styled from "styled-components";
import { AppState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { removeTag } from "../store/actions/search";
import Tag from "./Tag";

interface FilterBoxProps {
  count: number;
  input: string;
}

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

const FilterBox = ({ count, input }: FilterBoxProps) => {
  const dispatch = useDispatch();
  const tags = useSelector((state: AppState) => state.search.tags);

  const tagList = tags.map((tag, i) => (
    <Tag key={i} clickHandler={removeTag} tag={tag} fromFilterBox={true} />
  ));

  return (
    <Container>
      <p>
        Filter down your search {input ? `for ${input}` : ""} by clicking on
        tags
      </p>
      <TagContainer>{tagList}</TagContainer>
    </Container>
  );
};

export default FilterBox;
