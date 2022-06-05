import React, { useEffect, useState} from 'react'
import { UserProfile } from '../components/UserProfile'
import { Post } from '../components/Post'
import {posts} from '../UserPosts'
import { useNavigate } from 'react-router-dom'


export const MyProfile = () => {
  const [token, setToken] = useState()
  const navigate = useNavigate()

  useEffect(() => {
   getToken()
  }, []);

  const getToken = () => {
    const token = localStorage.getItem("accessToken")
    setToken(token)
  }
  
  const postDetails = posts.map(post => {
    return <Post 
    key={post.id}
    {...post} />
  })

  if(!token){
    return navigate("/signin")
  } else{
    return (
      <>
        <UserProfile />
        {postDetails}
      </>
    )
  }
     
}
