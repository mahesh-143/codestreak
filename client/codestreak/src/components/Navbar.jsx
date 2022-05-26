import React from 'react'
import { Link } from 'react-router-dom'
import {Nav} from './styles/Navbar.styled'

export const Navbar = () => {
  return (
    <Nav>
      <ul>
        <li><Link to="/"><span>My Profile</span></Link></li>
        <li><Link to="/explore"><span>Explore</span></Link></li>
      </ul>
    </Nav>
  )
}
