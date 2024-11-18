import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"


  const AdminDashboard = ()=> {
  const navigate = useNavigate()
  const {user, loading} =useAuth()

  if(loading){
    return <div>Loading.....</div>
  }
  if(!user){
    navigate('/login')
  }
  return (
    <div>AdminDashboard {user && user.name}</div>
  )
}

export default AdminDashboard