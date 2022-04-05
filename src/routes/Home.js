import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Movie from "../components/Movie";

const GET_MOVIEW = gql`
  {
    movies {
      id
      medium_cover_image
      isLiked @client
    }
  }
`;

const Cover = styled.div``;

const Header = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  padding-top: 100px;
  background-color: #ff7979;
  color: #fff;
  text-align: center;
  .title {
    margin: 0;
    font-size: 40px;
    font-weight: 700;
  }
  .sub {
    margin: 24px 0 0;
    font-size: 18px;
  }
`;

const Loading = styled.p`
  text-align: center;
  margin: 24px 0 0;
`;

export default () => {
  const { loading, data } = useQuery(GET_MOVIEW);

  return (
    <Cover>
      <Header>
        <p className="title">Apollo 2020</p>
        <p className="sub">I love GraphQL</p>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      {!loading &&
        data.movies &&
        data.movies.map((m) => (
          <Movie key={m.id} id={m.id} isLiked={m.isLiked} />
        ))}
    </Cover>
  );
};
