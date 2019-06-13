import * as React from "react";
import { useSelector } from "react-redux";
import colours from "../colours";
import styled from "styled-components";
import SideBar from "../components/SideBar";
import Listing from "../components/Listing";
import FilterBox from "../components/FilterBox";
interface IListing {
  city: string;
  company: string;
  country: string;
  description: string;
  post_date: string;
  state: string;
  title: string;
  tags: [];
  url: string;
}
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column wrap;
  background-color: ${colours.bg};
  color: ${colours.fc};
`;

const Content = styled.section`
  display: flex;
  flex-flow: column wrap;
  height: 100%;
  width: auto;
  justify-content: flex-start;
  max-width: 100%;
  margin: 20px 0 0;
  background-color: #fff;
  ${colours.boxShadow}
  border-radius: 3px;
  & > p {
    margin: 0;
    padding: 0 10px;
  }
`;

const Results = () => {
  const currState = useSelector((state: any) => state.search);

  const results =
    currState.status && currState.status === "success"
      ? currState.results.data.map((res: IListing, i: number) => (
          <Listing
            key={i}
            city={res.city}
            company={res.company}
            country={res.country}
            description={res.description}
            post_date={res.post_date}
            state={res.state}
            title={res.title}
            tags={res.tags}
            url={res.url}
          />
        ))
      : null;

  const currCount =
    currState.status && currState.status === "success"
      ? currState.results.count
      : null;

  return (
    <Container>
      <SideBar />
      <Content>
        <FilterBox count={currCount} input={currState.searchInput} />
      </Content>
      <Content>{results}</Content>
    </Container>
  );
};

export default Results;
