import { Outlet } from "react-router-dom";

import Navbar from './../../Components/Layout/Navbar/Navbar';
import Sidebar from './../../Components/Layout/Sidebar/Sidebar';
export default function MainLayout() {
  return (
    <>
     <Navbar />
     <Sidebar />
     <Outlet />
    </>
  )
}
