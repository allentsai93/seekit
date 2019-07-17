import * as React from "react";
import styled from "styled-components";
import { SearchActionTypes } from "../store/actions/searchTypes";

interface StyledTagProps {
  show?: boolean;
  fullOpacity?: boolean;
}

interface TagProps {
  tag: string;
  show?: boolean;
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

const Tag = ({ tag, show, clickHandler, fromFilterBox }: TagProps) => {
  return (
    <StyledTag
      show={!fromFilterBox ? show : true}
      onClick={() => {
        clickHandler(tag);
      }}
      fullOpacity={fromFilterBox}
    >
      {tag}
    </StyledTag>
  );
};

export default Tag;
