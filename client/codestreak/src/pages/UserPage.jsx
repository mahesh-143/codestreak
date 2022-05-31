import { React, useState, useEffect } from "react";
import { Post } from "../components/Post";
import {Streak} from "../components/styles/Streak.styled";
import { useParams } from "react-router-dom";
import axios from "../api/axios";

export const UserPage = () => {
  const [posts, getPosts] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    getUser();
    getAllPosts();
  }, []);


  const url = `/u/`;
  let { id } = useParams();


  const getUser = () => {
      axios.get(url+id)
        .then((response) => {
            const user = response.data.user;
            setUser(user);
        })
        .catch((error) => console.error(`Error :${error}`));
  }


  const getAllPosts = () => {
    axios.get(url+`${id}/posts`)
      .then((response) => {
        const allPosts = response.data.posts;
        console.log(allPosts);
        getPosts(allPosts);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }

  if(posts.length > 0) {
  let dayCount = posts.length+1;
  const postList = posts.slice(0).reverse().map(post => {
    dayCount--
    return <Post key={post.id} dayCount={dayCount} {...post} />;
  });

  return <>
        <h1>{user.name}</h1> 
        <p>{user.description}</p>
        <Streak>🔥{user.streak}</Streak>
        {postList}
  </>;
  }
  else {
    return (<h1>Please wait while user is loading...</h1>)
  }
  
};

