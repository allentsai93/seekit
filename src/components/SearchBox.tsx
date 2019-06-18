import * as React from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { setSearchInput, getSearchResults } from "../actions/search";
import searchIcon from "../assets/outline-search-24px.svg";
const qs = require("query-string");

const SearchBox = (props: any) => {
  let input: any;
  const dispatch = useDispatch();

  React.useEffect(() => {
    const queryString = props.location.search;
    const queryParams = qs.parse(queryString);
    let cleanedStr;
    if (queryParams.q) {
      cleanedStr = queryParams.q.split(" ").join(",");
      dispatch(setSearchInput(cleanedStr));
    } else {
      cleanedStr = "";
      dispatch(setSearchInput(""));
    }

    dispatch(getSearchResults(cleanedStr || input.value));
  }, [props.location.search, dispatch]);

  return (
    <div className={props.className}>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          const queryString = props.location.search;
          const queryParams = qs.parse(queryString);
          const query = input.value.split(" ").join("+") || queryParams.q;
          props.history.push(`/jobs?q=${query}`);
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">
          <img src={searchIcon} alt="search" />
        </button>
      </form>
    </div>
  );
};

export default withRouter(SearchBox);
