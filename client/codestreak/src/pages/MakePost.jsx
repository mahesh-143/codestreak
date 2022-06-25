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
    const value = e.target.value
    setPost(value)
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try { 
      console.log(post)
      const response = await axios.post(url, 
        JSON.stringify({body:post}),
        {
          headers : { 'Content-Type' : 'application/json',
        "Authorization" : `Bearer ${token}`}
        })
        console.log(response)
        navigate("/myprofile")
    }
    catch(error){
      console.error(`Error : ${error}`)
      setPost("")
    }
  }

  
 return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="post">Write a post</label>
            <input type="text" name="body" id="post" value={post.body} onChange={handleChange}/>
            <Button>Post</Button>
        </form>
    </div>
  )
}
