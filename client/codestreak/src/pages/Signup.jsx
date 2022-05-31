import React, { useState } from 'react'
import { Button } from "../components/styles/Button.styled"
import  { Link } from "react-router-dom"
import axios from "../api/axios"

export const Signup = () => {

    const [user, setUser] = useState("")

    const url = `/auth/signup`;

    const handleChange= (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser((values) => ({...values, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try { 
            console.log(user)
            const response = await axios.post(url, 
                JSON.stringify({...user}),
                {
                    headers : { 'Content-Type' : 'application/json'}
                })
                console.log(response.data)
            
        }
        catch(error){
            console.log(`Error : ${error}`)
        }
    }
  return (
    <>
    <h1>Sign Up</h1>
    <form  onSubmit={handleSubmit}>
        <label htmlFor="name">username</label>
        <input
            type="text"
            name="name"
            id="name"
            value={user.name || ""}
            onChange={handleChange}
        />
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

        <Button type="submit">Sign Up</Button>

        Already have an Account?
        <Link to="/signin">Sign In</Link>

    </form>
    </>
  )
}
