import * as React from "react";
import styled from "styled-components";
import Tag from "./Tag";
import { SearchActionTypes } from "../store/actions/searchTypes";

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

interface FilterBoxProps {
  tags: string[];
  searchInput: string;
  removeSelectedTag: (tag: string) => SearchActionTypes;
}

const FilterBox = ({
  tags,
  searchInput,
  removeSelectedTag
}: FilterBoxProps) => {
  const [selectedTags, setSelectedTags] = React.useState([""]);

  React.useEffect(() => {
    setSelectedTags(tags);
  }, [tags]);

  const tagList = selectedTags.map((tag, i) => (
    <Tag
      key={i}
      clickHandler={removeSelectedTag}
      tag={tag}
      fromFilterBox={true}
      show={true}
    />
  ));

  return (
    <Container>
      <p>
        Filter down your search {searchInput ? `for ${searchInput}` : ""} by
        clicking on tags
      </p>
      <TagContainer>{tagList}</TagContainer>
    </Container>
  );
};

export default FilterBox;
