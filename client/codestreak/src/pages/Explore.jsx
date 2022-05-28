import { React, useState, useEffect } from "react";
import { OtherUser } from "../components/OtherUser";
import axios from "axios";

export const Explore = () => {
  const [users, getUsers] = useState("");

  useEffect(() => {
    getAllUsers();
  }, []);

  const url = "http://127.0.0.1:5000/api/users";

  const getAllUsers = () => {
    axios.get(url)
      .then((response) => {
        const allUsers = response.data.users;
        console.log(allUsers);
        getUsers(allUsers);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }

  if(users.length > 0) {
  const userDetails = users.map(user => {
    return <OtherUser key={user.id} {...user} />;
  });

  return <>
  {console.log(users)}
  {userDetails}
  </>;
  }
  else {
    return (<h1>Please wait while users are loading...</h1>)
  }
  
};
