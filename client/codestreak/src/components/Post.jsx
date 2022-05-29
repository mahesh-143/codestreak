import React from "react";
import { PostStyle } from "./styles/Post.styled";

export const Post = (props) => {
  
  return (
    <PostStyle>
      <h1>{props.dayCount} / 100</h1>
      <p>
        {props.body}
      </p>
    </PostStyle>
  );
};
