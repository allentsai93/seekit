import * as React from "react";
import { useDispatch } from "react-redux";
import { RouteChildrenProps } from "react-router";
import { setSearchInput, clearTags } from "../store/actions/search";
import searchIcon from "../assets/outline-search-24px.svg";

interface SearchBoxProps {
  className?: string;
}

const SearchBox = (props: SearchBoxProps) => {
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
          dispatch(setSearchInput(query));
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

export default SearchBox;
