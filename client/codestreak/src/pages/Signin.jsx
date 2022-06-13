import { useState } from 'react'
import { Button } from "../components/styles/Button.styled" 
import { Link, useNavigate} from 'react-router-dom'
import axios from "../api/axios"

export const Signin = () => {

    const [user, setUser] = useState("")
    const navigate = useNavigate()

    const url = "/auth/login";

    const handleChange= (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser((values) => ({...values, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(url,
                JSON.stringify({...user}),
                {
                    headers : {'Content-Type' : 'application/json'}
                }
                )
                console.log(response.data)
                const accessToken = response.data.user.token
                const id = response.data.user._id
                console.log(accessToken)
                localStorage.setItem("accessToken", accessToken)
                localStorage.setItem("id" , id)
                navigate("/myprofile")
        } catch (error) {
            console.log(`Error : ${error}`)
        }
    }

  return (
    <>
    <h1>Sign In</h1>
    <form onSubmit={handleSubmit}>
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

    </form>
    Don't have an Account?
    <Link to="/signup">Sign Up</Link>
    </>
  )
}
