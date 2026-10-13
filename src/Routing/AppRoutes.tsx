import { createBrowserRouter, Navigate } from "react-router-dom"
import MainLayout from "../Layouts/MainLayout/MainLayout"

import NotFound from "../Page/NotFound/NotFound"
import Profile from "../Page/Profile/Profile"
import AuthLayout from "../Layouts/AuthLayout/AuthLayout"
import Login from "../Page/Auth/Login/Login"
import Register from "../Page/Auth/Register/Register"
import Notifications from "../Page/Notifications/Notifications"
import ProtectedRoutes from "./ProtectedRoutes"
import ProtectedAuthRoutes from "./ProtectedAuthRoutes"
import { Feed } from "../Page/Feed/Feed"
export  const router=createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
      path:"",
      element:<MainLayout/>,
      children:[
          { index:true,element: <Navigate to="feed" replace />},
          { path:"feed" ,element: <Feed />},
         { path:"profile",element: <Profile />},
         { path:"notifications",element: <Notifications />},
        
      ]
    }
    ]
  }
    ,{
      element :<ProtectedAuthRoutes />,
      children:[
        {
      path:"auth",
      element:<AuthLayout/>,
      children:[
        { index:true,element: <Navigate to="./login" replace  />},
        { path: "login" ,element: <Login />},
        { path: "register", element: <Register /> },
       
 ]} 
      ]
    }, { path: "*", element: <NotFound /> }  
 ]) 
