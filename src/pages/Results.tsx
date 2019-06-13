import * as React from "react";
import { useSelector } from "react-redux";
import colours from "../colours";
import styled from "styled-components";
import Listing from "../components/Listing";
import FilterBox from "../components/FilterBox";
import Layout from "../components/Layout";
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

const Content = styled.section`
  display: flex;
  flex-flow: column wrap;
  height: 100%;
  width: auto;
  justify-content: flex-start;
  max-width: 95%;
  margin: 20px 0 0;
  background-color: #212121;
  ${colours.boxShadow}
  border-radius: 15px;
  padding: 10px;
  box-sizing: border-box;
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
    <Layout>
      {currState.searchInput ? (
        <Content>
          <FilterBox count={currCount} input={currState.searchInput} />
        </Content>
      ) : null}
      <Content>{results}</Content>
    </Layout>
  );
};

export default Results;
