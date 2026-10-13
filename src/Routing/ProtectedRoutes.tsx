import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/authContext';

export default function ProtectedRoutes() {
    const {isAuthenticated}=useAuth()
    if (!isAuthenticated) {
        return ( 
            <Navigate to="/auth/login" replace />
        )
    }
  return (
    <Outlet />
  )
}

