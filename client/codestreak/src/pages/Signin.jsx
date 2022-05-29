import React, { useState } from 'react'
import { Button } from "../components/styles/Button.styled" 
import { Link } from 'react-router-dom'

export const Signin = () => {

    const [user, setUser] = useState("")

    const handleChange= (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser((values) => ({...values, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
       
    }
  return (
    <>
    <h1>Sign In</h1>
    <form onClick={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
            type="email"
            name="email"
            id="email"
            value={user.email || ""}
            onChange={handleChange}
        />
        <label htmlFor="password">password</label>
        <input
            type="password"
            name="password"
            id="password"
            value={user.password || ""}
            onChange={handleChange}
        />

        <Button type="submit">Sign in</Button>

        Don't have an Account?
        <Link to="/signup">Sign Up</Link>

    </form>
    </>
  )
}
