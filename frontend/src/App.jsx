import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import PrivateRoutes from './utils/PrivateRoutes';
import RoleBaseRoute from './utils/RoleBaseRoute';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard"/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/admin-dashboard" element={
          <PrivateRoutes>
            <RoleBaseRoute requiredRole={["admin"]}>
              <AdminDashboard/>
            </RoleBaseRoute>
          </PrivateRoutes>
        }></Route>
        <Route path="/employee-dashboard" element={<EmployeeDashboard/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
