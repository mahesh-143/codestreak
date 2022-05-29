import React from "react";
import { Link } from "react-router-dom";
import { OtherUserStyles } from "./styles/OtherUser.styled";
import { Streak } from "./styles/Streak.styled";


export const OtherUser = (props) => {
  return (
    
    <OtherUserStyles>
      <Link to={"/user/"+props._id}>
      <h1>{props.name}</h1>
      </Link>
      <p>{props.description}</p>
      <Streak>🔥{props.streak}</Streak> 
      
    </OtherUserStyles>
  );
};
