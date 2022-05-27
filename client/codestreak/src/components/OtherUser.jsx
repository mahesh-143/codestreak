import React from "react";
import { OtherUserStyles } from "./styles/OtherUser.styled";
import { Streak } from "./styles/Streak.styled";


export const OtherUser = (props) => {
  return (
    <OtherUserStyles>
      <h1>{props.username}</h1>
      <p>{props.goalstatement}</p>
      <Streak>🔥{props.streakcount}</Streak>

    </OtherUserStyles>
  );
};
