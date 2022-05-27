import React from 'react'
import {Button} from "./styles/Button.styled"
import {Streak} from "./styles/Streak.styled"
import { Profile, Avatar, UserInfo } from './styles/UserProfile.styled'

export const UserProfile = () => {
  return (
    <Profile>
        <Avatar>
        <img src="" alt="user avatar" />
        </Avatar>
        <UserInfo>
            <h1>John Doe</h1>
            <p>I want to learn to code in Javascript and build consistency</p>
        </UserInfo>
        <div>
            <Button>Post</Button>
            <Streak>🔥74</Streak>
        </div>
    </Profile>
  )
}
