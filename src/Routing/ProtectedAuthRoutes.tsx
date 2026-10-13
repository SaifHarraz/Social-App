import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/authContext"

export default function ProtectedAuthRoutes() {
   const {isAuthenticated}=useAuth()
     if (isAuthenticated) {
        return (<Navigate to="/" replace />)
     } 
  return (<Outlet />
  )
}
