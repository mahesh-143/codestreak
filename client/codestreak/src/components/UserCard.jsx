import React from "react";
import { Link } from "react-router-dom";
import { UserCardStyles, UserInfo } from "./styles/UserCard.styled";
import { Streak } from "./styles/Streak.styled";
import Avatar from "react-avatar";


export const UserCard = (props) => {

  return (
    
    <UserCardStyles>
      <UserInfo>
      <Avatar src={props.profile} name={props.name} alt="user" size="70" round={true}/>
      <Link to={"/user/"+props._id}>
      {props.name}
      </Link>
      </UserInfo>
      <Streak>🔥{props.streak}</Streak> 
      <p>{props.description  || "hey there I am using codestreak"}</p>
      
    </UserCardStyles>
  );
};
