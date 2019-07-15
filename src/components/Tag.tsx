import * as React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { SearchActionTypes } from "../store/actions/searchTypes";
import { AppState } from "../store";

interface StyledTagProps {
  show?: boolean;
  fullOpacity?: boolean;
}

interface TagProps {
  tag: string;
  clickHandler: (tag: string) => SearchActionTypes;
  fromFilterBox: boolean;
}

const StyledTag = styled.span<StyledTagProps>`
  ${p => (p.show ? "display: flex;" : "display: none;")}
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 5px;
  color: #efefef;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.7em;
  margin: 2px;
  border: 2px solid #e7c0d0;
  border-radius: 17px;
  ${p => (p.fullOpacity ? "opacity: 1" : "opacity: 0.4")}
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  overflow: hidden;
  box-sizing: border-box;
`;

const Tag = ({ tag, clickHandler, fromFilterBox }: TagProps) => {
  const tagState = useSelector((state: AppState) => state.search.tags);
  const dispatch = useDispatch();

  return (
    <StyledTag
      show={!fromFilterBox ? !tagState.includes(tag) : true}
      onClick={() => dispatch(clickHandler(tag))}
      fullOpacity={fromFilterBox}
    >
      {tag}
    </StyledTag>
  );
};

export default Tag;
