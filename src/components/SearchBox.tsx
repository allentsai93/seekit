import * as React from "react";
import { useDispatch } from "react-redux";
import { clearTags } from "../store/actions/search";
import searchIcon from "../assets/outline-search-24px.svg";
import { push } from "connected-react-router";
import { withRouter } from "react-router-dom";
import { RouteChildrenProps } from "react-router";

interface SearchBoxProps {
  className?: string;
}

const SearchBox = (props: RouteChildrenProps & SearchBoxProps) => {
  let input: any;
  const dispatch = useDispatch();

  return (
    <div className={props.className}>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          const query = input.value.split(" ").join(",");
          dispatch(clearTags());
          dispatch(push(`/jobs?q=${query}`));
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
