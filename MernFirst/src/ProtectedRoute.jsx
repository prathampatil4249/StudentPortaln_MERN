import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

function ProtectedRoute() {

    let token = JSON.parse(localStorage.getItem("token"))
    return token ? <Outlet></Outlet> : <Navigate to="login"/>
  
}

export default ProtectedRoute
