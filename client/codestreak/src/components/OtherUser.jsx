import React from "react";
import { OtherUserStyles } from "./styles/OtherUser.styled";
import { Streak } from "./styles/Streak.styled";


export const OtherUser = (props) => {
  return (
    
    <OtherUserStyles>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <Streak>🔥{props.streak}</Streak> 
    </OtherUserStyles>
  );
};
