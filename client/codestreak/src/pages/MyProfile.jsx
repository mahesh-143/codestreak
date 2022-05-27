import React from 'react'
import { UserProfile } from '../components/UserProfile'
import { Post } from '../components/Post'
import {posts} from '../UserPosts'

export const MyProfile = () => {

  const postDetails = posts.map(post => {
    return <Post 
    key={post.id}
    {...post} />
  })

  return (
    <>
      <UserProfile />
      {postDetails}
    </>
  )
}
