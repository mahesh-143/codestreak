import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "../api/axios"

export const Verification = () => {

  const [result, setResult] = useState('')

  const url = `/auth/`;
  let { id } = useParams()
  let { token } = useParams()

  useEffect(() => {
    verifyUser()
  }, []);

  const verifyUser = async () => {

    try {
      const response = await axios.get(url+id+"/"+token) 
          console.log(response) 
          const accessToken = response.data.user.token
          const uid = response.data.user._id
          localStorage.setItem("accessToken", accessToken)
          localStorage.setItem("id" , uid)
          setResult("User Verfied")
    } catch (error) {
     setResult("Something went wrong")
    }
}
    return (
      <h1>{result}</h1>
    ) 
}
