import React, { useCallback } from 'react'
import Movie from './Movie'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Private = ({ logged }) => {

  const toastrun = useCallback(() => {
    toast('you are not logged in', { type: 'error' })
  }, [])

  if (logged) {

    
    return <Movie />
  } else {
    toastrun();
    return <Navigate to="/" />
  }

}

export default Private