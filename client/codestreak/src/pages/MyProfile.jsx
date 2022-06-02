import React from 'react'
import { UserProfile } from '../components/UserProfile'
import { Post } from '../components/Post'
import {posts} from '../UserPosts'
import { Signin } from './Signin'

export const MyProfile = () => {

  let loggedIn = true

  const postDetails = posts.map(post => {
    return <Post 
    key={post.id}
    {...post} />
  })

  if(loggedIn){
    return (
      <>
        <UserProfile />
        {postDetails}
      </>
    )
  } else {
    return <Signin />
  }

}
