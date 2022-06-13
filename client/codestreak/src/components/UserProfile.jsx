import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Button} from "./styles/Button.styled"
import {Streak} from "./styles/Streak.styled"
import { Profile, AvatarContainer} from './styles/UserProfile.styled'
import Avatar from 'react-avatar'

export const UserProfile = (props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/makepost")
  }
 
  return (
    <Profile>
        {/* <img src={props.profile} alt="user avatar" /> */}
        <AvatarContainer>
        <Avatar src={props.profile} name={props.name} alt="user" size="120"/>
        </AvatarContainer>
          <h1>{props.name}</h1>
          <p>{props.description || "Hey there! I am codestreak"}</p>
        <div> 
            <Button onClick={handleClick}>Post</Button>
            <Streak>🔥{props.streak}</Streak>
        </div>
    </Profile>
  )
}
