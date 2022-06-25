import { useEffect, useState } from "react";
import { UserProfile } from "../components/UserProfile";
import { Post } from "../components/Post";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

export const MyProfile = () => {
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState("");
  const navigate = useNavigate();


  useEffect(() => { 
    const token = localStorage.getItem("accessToken");
    console.log("Token : " + token);
    if (!token) {
    return navigate("/signin");
    }
    getUser();
    getPosts();
  }, []);

    const url = "/u/";
   
    const id = localStorage.getItem("id"); 
    console.log("Id : " + id);
  

  const getUser = () => {
    axios.get(url + id)
      .then((response) => {
        const user = response.data.user
        setUser(user)
        console.log(response.data.user)
      })
      .catch((error) => console.error(`Error :${error}`))
  };

  const getPosts = () => {
   axios.get(url + `${id}/posts`)
      .then((response) => {
        const allPosts = response.data.posts
        setPosts(allPosts)
        console.log(response.data.posts)
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

   console.log("User : " + user);
  console.log("Posts : " + posts);
 
  if(posts.length > 0) {
  let dayCount = posts.length+1;
  const postList = posts.slice(0).reverse().map(post => {
    return <Post key={post._id} dayCount={post.day} {...post} />;
  });

  
    return (
      <>
        <UserProfile {...user}/>
        {postList}
      </>
    );
  
};
}
