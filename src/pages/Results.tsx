import * as React from "react";
import { useSelector } from "react-redux";
import colours from "../colours";
import styled from "styled-components";
import Listing from "../components/Listing";
import FilterBox from "../components/FilterBox";
import Layout from "../components/Layout";
import ReactPaginate from "react-paginate";
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
interface PaginationProps {
  pageCount: number;
}

const Pagination = styled.div<PaginationProps>`
  display: ${p => (p.pageCount === 1 ? "none" : "block")};

  & ul {
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    justify-content: space-evenly;
    padding: 0 10px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.8em;
  }
  .disabled,
  .selected {
    color: #615f5f;
  }
  & li {
    cursor: pointer;
  }
`;

const Count = styled.span`
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8em;
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
  const currNumPages =
    currState.status && currState.status === "success"
      ? currState.results.numpages
      : 0;

  const pageChangeHandler = ({ selected }: { selected: number }) => {
    const pageNum = selected + 1;
    const query = `?tags=${currState.searchInput}&page=${pageNum}`;
    console.log(query);
  };

  return (
    <Layout>
      {currState.searchInput ? (
        <Content>
          <FilterBox count={currCount} input={currState.searchInput} />
        </Content>
      ) : null}
      <Content>
        <Count>Found {currCount} job posts(s)</Count>
        {results}
        <Pagination pageCount={currNumPages}>
          <ReactPaginate
            pageCount={currNumPages}
            marginPagesDisplayed={1}
            pageRangeDisplayed={5}
            onPageChange={pageChangeHandler}
          />
        </Pagination>
      </Content>
    </Layout>
  );
};

export default Results;
