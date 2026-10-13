import { Outlet } from "react-router-dom";

import Navbar from './../../Components/Layout/Navbar/Navbar';
export default function MainLayout() {
  return (
    <>
     <Navbar />
     <div className="mx-auto max-w-7xl px-3 py-3.5">
     <Outlet />
     </div>
    </>
  )
}
