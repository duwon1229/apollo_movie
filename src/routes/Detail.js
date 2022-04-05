import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      medium_cover_image
      language
      rating
      description_intro
    }
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;

export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: +id },
  });
  console.log(data);

  return (
    <>
      <p>title: {data?.movie.title}</p>
      {data && <img src={data?.movie.medium_cover_image} />}
      <p>language: {data?.movie.language}</p>
      <p>rating: {data?.movie.rating}</p>
      <p>description: {data?.movie.description_intro}</p>
    </>
  );
};
