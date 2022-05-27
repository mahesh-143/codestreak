import React from "react";
import { OtherUser } from "../components/OtherUser";
import { users } from "../UserData";

export const Explore = () => {

  const userDetails = users.map((user) => {
    return <OtherUser key={user.id} {...user} />
  })

  return(
     <>{userDetails}</>
    )
};
