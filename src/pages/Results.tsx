import * as React from "react";
import { connect } from "react-redux";
import colours from "../colours";
import styled from "styled-components";
import Listing from "../components/Listing";
import FilterBox from "../components/FilterBox";
import Layout from "../components/Layout";
import ReactPaginate from "react-paginate";
import { withRouter } from "react-router-dom";
import {
  getSearchResults,
  clearTags,
  removeTag,
  addTag
} from "../store/actions/search";
import { RouteChildrenProps } from "react-router";
import { SearchState, ResultListing } from "../store/reducers/types";
import { AppState } from "../store";
import { SearchActionTypes } from "../store/actions/searchTypes";
import { ThunkDispatch } from "redux-thunk";
import { push } from "connected-react-router";
import { getParsedUrlQuery, parseQueryToObj } from "../util";
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

interface ResultProps {
  removeTag: (p: string) => SearchActionTypes;
  addTag: (tag: string) => SearchActionTypes;
  clearTags: () => SearchActionTypes;
  getSearchResults: () => SearchActionTypes;
  push: (query: any) => any;
}

const Results = (props: RouteChildrenProps & SearchState & ResultProps) => {
  React.useEffect(() => {
    props.getSearchResults();
  }, [props.router.location.search]);

  const results =
    props.status && props.status === "success"
      ? props.results.data.map((res: ResultListing, i: number) => (
          <Listing
            key={res.pk}
            pk={res.pk}
            source={res.url}
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
    props.status && props.status === "success" ? props.results.count : null;
  const currNumPages =
    props.status && props.status === "success" ? props.results.numpages : 0;

  const pageChangeHandler = ({ selected }: { selected: number }) => {
    const pageNum = selected + 1;
    const queryString = props.router.location.search;
    let queryParams: { [index: string]: any } = parseQueryToObj(queryString);
    queryParams.page = pageNum;

    props.push(props.router.location.pathname + getParsedUrlQuery(queryParams));
  };

  const fetchTagData = () => {
    const queryString = props.router.location.search;
    let queryParams: { [index: string]: any } = parseQueryToObj(queryString);

    if (props.tags.length > 0) {
      queryParams.tags = props.tags.join(",");
    }

    if (queryParams.page) {
      delete queryParams.page;
    }

    props.push(props.router.location.pathname + getParsedUrlQuery(queryParams));
  };

  return (
    <Layout>
      {currCount ? (
        <Content>
          <FilterBox
            tags={props.tags}
            searchInput={props.searchInput}
            removeSelectedTag={(tag: string) => props.removeTag(tag)}
          />
          {props.tags.length > 0 ? (
            <>
              <span onClick={() => props.clearTags()}>Clear Tags</span>
              <span onClick={fetchTagData}>Search</span>
            </>
          ) : null}
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

const mapStateToProps = (state: AppState, props: any): SearchState => {
  return {
    searchInput: state.search.searchInput,
    tags: state.search.tags,
    results: state.search.results,
    status: state.search.status,
    router: state.router
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => {
  return {
    getSearchResults: () => dispatch(getSearchResults()),
    clearTags: () => dispatch(clearTags()),
    removeTag: (tag: string) => dispatch(removeTag(tag)),
    push: (query: string) => dispatch(push(query)),
    addTag: (tag: string) => dispatch(addTag(tag))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Results as any)
);
