import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1300px;
  max-width: 100%;
  display: flex;
  flex-flow: row wrap;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
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

interface FilterBoxProps {
  count: number;
  input: string;
}

const FilterBox = ({ count, input }: FilterBoxProps) => {
  return (
    <Container>
      <p>
        Found <span>{count}</span> listings for <span>{input}</span>
      </p>
    </Container>
  );
};

export default FilterBox;
