import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { Store } from "../../context/context"
import { useContext } from 'react'
export const Protected = ({ children }) => {
  const navigate = useNavigate()
  const { store } = useContext(Store)
  useEffect(() => {
    if (!store.user?.token) {
      navigate("/admin/login");
    }
  }, [])
  return (
    <>
      {store.user?.token && children}
    </>
  )
}
