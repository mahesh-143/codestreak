import React from "react";
import { PostStyle } from "./styles/Post.styled";

export const Post = (props) => {
  
  return (
    <PostStyle>
      <span>{props.dayCount || 74} / 100</span>
      <p>
        {props.body || "Lorem ipsum dolor sit amit consecuter"}
      </p>
    </PostStyle>
  );
};
