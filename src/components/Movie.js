import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const LIKE_MOVIE = gql`
  mutation likeMovie($id: Int!, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
  }
`;

export default ({ id, isLiked }) => {
  const [toggleLikeMovie] = useMutation(LIKE_MOVIE, {
    variables: { id: parseInt(id), isLiked },
  });

  return (
    <div>
      <Link to={`/${id}`}>{id}</Link>
      <button onClick={toggleLikeMovie}>{isLiked ? "Unlike" : "Like"}</button>
    </div>
  );
};
