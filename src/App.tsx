import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Routing/AppRoutes'
import { Toast } from '@heroui/react'
import { AuthProvider } from './context/authContext'


function App() {

  return (
   <AuthProvider>
     <Toast.Provider   placement='top end'/>
     <RouterProvider router={router} />
   </AuthProvider>
  )
}

export default App
