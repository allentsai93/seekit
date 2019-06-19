import * as React from "react";
import styled from "styled-components";
import Tag from "./Tag";
import { addTag } from "../store/actions/search";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 10px;
  width: 1300px;
  font-size: 0.85em;
  max-width: 100%;
  white-space: pre-wrap; /* Webkit */
  white-space: -moz-pre-wrap; /* Firefox */
  white-space: -pre-wrap; /* Opera <7 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* IE */
  box-sizing: border-box;
  /* background-color: #292929;
  border-bottom: 5px solid #212121; */
  margin: 2px 0;
  border-bottom: 3px solid #2d2d2d;
  border-radius: 4px;
`;

const Content = styled.div`
  display: flex;
  flex-flow: column wrap;
  & * {
    margin: 0;
  }
  a {
    margin: 5px 0;
    color: #ffffff;
    font-size: 1.3em;
    font-weight: bold;
    text-decoration: none;
  }
  & > h3 {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.9em;
    color: #777777;
    & > span {
      text-transform: initial;
      font-weight: normal;
    }
  }
  flex: 70%;
`;

const Description = styled.div`
  color: #717171;
`;

const Tags = styled.div`
  flex: 30%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
`;

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

const Listing = ({
  city,
  company,
  country,
  description,
  post_date,
  state,
  title,
  tags,
  url
}: IListing) => {
  return (
    <Container>
      <Content>
        <h3>
          {company}{" "}
          <span>
            - {city}, {state}
          </span>
        </h3>
        <a href={`https://${url}`} rel="noopener noreferrer" target="_blank">
          {title}
        </a>
        {/* <p>Posted on {post_date}</p> */}
        <Description>
          <p>{description}</p>
        </Description>
      </Content>
      <Tags>
        {tags.map((tag, i) => (
          <Tag key={i} tag={tag} clickHandler={addTag} fromFilterBox={false} />
        ))}
      </Tags>
    </Container>
  );
};

export default Listing;
