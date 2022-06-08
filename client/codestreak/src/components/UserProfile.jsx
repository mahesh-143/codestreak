import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Button} from "./styles/Button.styled"
import {Streak} from "./styles/Streak.styled"
import { Profile} from './styles/UserProfile.styled'

export const UserProfile = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/makepost")
  }

  return (
    <Profile>
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2980&q=80"  alt="user avatar" />
        <h1>John Doe</h1>
        <p>I want to learn to code in Javascript and build consistency learn to code in Javascript and build consistency</p>
        <div>
            <Button onClick={handleClick}>Post</Button>
            <Streak>🔥74</Streak>
        </div>
    </Profile>
  )
}
