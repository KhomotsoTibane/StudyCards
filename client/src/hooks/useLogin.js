import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import {useNavigate} from "react-router-dom"

export const useLogin = () => {

  let navigate = useNavigate();
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const loginUser = async (username, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('https://studycardsserver.herokuapp.com/api/user/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
        'Accept': 'application/json'},
        body: JSON.stringify({ username, password })
      })
    const json = await response.json()
   
    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }

    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))
      document.cookie = JSON.stringify(json)

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
      navigate("/home")
    }
  }

  return { loginUser, isLoading, error }
}