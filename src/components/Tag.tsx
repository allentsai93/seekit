import * as React from "react";
import styled from "styled-components";

const StyledTag = styled.span`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  color: #efefef;
  padding: 5px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.7em;
  margin: 2px;
  border: 2px solid #e7c0d0;
  border-radius: 17px;
  opacity: 0.4;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const Tag = ({ tag }: any) => {
  return <StyledTag>{tag}</StyledTag>;
};

export default Tag;
