import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Routing/AppRoutes'
import { Toast } from '@heroui/react'


function App() {

  return (
   <>
     <Toast.Provider   placement='top end'/>
     <RouterProvider router={router} />
   </>
  )
}

export default App
