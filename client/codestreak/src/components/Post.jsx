import React from "react";
import { PostStyle } from "./styles/Post.styled";

export const Post = (props) => {
  
  return (
    (props.isSpecialPost) ? 
    <PostStyle style={{borderColor : "red"}}>
      <span>Oops !!!</span>
      <p>Your streak broke. Try again !!!</p>
    </PostStyle>
    :
    <PostStyle>
      <span>{props.dayCount} / 100</span>
      <p>
        {props.body}
      </p>
    </PostStyle>
  );
};
