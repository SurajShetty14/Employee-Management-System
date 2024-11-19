import { AdminSideBar } from "../components/dashboard/AdminSideBar"
import AdminSummary from "../components/dashboard/AdminSummary"
import Navbar from "../components/dashboard/Navbar"



  const AdminDashboard = ()=> {

  return (
    <div className="flex">
      <AdminSideBar/>
      <div className="flex-1">
        <Navbar/>
        <AdminSummary/>
      </div>
    </div>
  )
}

export default AdminDashboard