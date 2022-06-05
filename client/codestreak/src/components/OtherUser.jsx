import React from "react";
import { Link } from "react-router-dom";
import { OtherUserStyles, UserInfo } from "./styles/OtherUser.styled";
import { Streak } from "./styles/Streak.styled";


export const OtherUser = (props) => {
  return (
    
    <OtherUserStyles>
      <UserInfo>
      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2980&q=80" alt="user"/>
      <Link to={"/user/"+props._id}>
      {props.name}
      </Link>
      </UserInfo>
      <Streak>🔥{props.streak}</Streak> 
      <p>{props.description}</p>
      
    </OtherUserStyles>
  );
};
