import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "../api/axios"
import { Button } from "../components/styles/Button.styled"

export const MakePost = () => {

  const [token, setToken] = useState()
  const [post, setPost] = useState("")
  const navigate = useNavigate()
  
  const url = "/post"

  useEffect(() => {
   getToken()
  }, []);

  const getToken = () => {
    const token = localStorage.getItem("accessToken")
    setToken(token)
  }

  if(!token){
      return navigate("/signin")
  }
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPost((values) => ({...values, [name]: value}))
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try { 
      console.log(post)
      const response = await axios.post(url, 
        JSON.stringify({...post}),
        {
          headers : { 'Content-Type' : 'application/json',
        "Authorization" : `Bearer ${token}`}
        })
        console.log(response)
    }
    catch(error){
      console.error(`Error : ${error}`)
    }
  }

  
 return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="post">Write a post</label>
            <input type="text" name="post" id="post" value={post.body} onChange={handleChange}/>
            <Button>Post</Button>
        </form>
    </div>
  )
}
