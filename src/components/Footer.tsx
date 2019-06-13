import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 200px;
  display: flex;
  flex-flow: row wrap;
  max-width: 95%;
  width: 1300px;
  box-sizing: border-box;
  padding: 10px;
`;

const Footer = () => {
  return <Container>Footer</Container>;
};

export default Footer;
