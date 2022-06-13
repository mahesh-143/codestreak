import { React, useState, useEffect } from "react";
import { OtherUser } from "../components/OtherUser";
import axios from "../api/axios";

export const Explore = () => {
  const [users, getUsers] = useState("");

  useEffect(() => {
    getAllUsers();
  }, []);

  const url = "/u/all";

  const getAllUsers = () => {
    axios.get(url)
      .then((response) => {
        const allUsers = response.data.users;
        console.log("getAllUsers function ran");
        getUsers(allUsers);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }

  if(users.length > 0) {
  const userDetails = users.map(user => {
    return <OtherUser key={user._id} {...user} />;
  });

  return <>
  {console.log("explore rendered")}
  {userDetails}
  </>;
  }
  else {
    return (<h1>Please wait while users are loading...</h1>)
  }
  
};
