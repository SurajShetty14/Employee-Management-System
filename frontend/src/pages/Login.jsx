import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const {login} = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      if(response.data.success){
        login(response.data.user)
        localStorage.setItem("token", response.data.token)
        if(response.data.user.role==="admin"){
          navigate('/admin-dashboard')
        }else{
          navigate("/employee-dashboard")
        }
      }
    } catch (error) {
      if(error.response && !error.response.data.success){
        setError(error.response.data.error)
      }else{
        setError("Server Error")
      }
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <h1 className="text-4xl font-bold text-white mb-8 tracking-wide">
        Employee Management System
      </h1>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 transform transition-transform hover:scale-105">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-2 text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none shadow-sm"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="mb-2 text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              placeholder="******"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none shadow-sm"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-600">
              <input
                type="checkbox"
                className="mr-2 rounded text-purple-500 focus:ring-purple-400 focus:outline-none"
              />
              Remember Me
            </label>
            <a
              href="/forgot-password"
              className="text-purple-500 hover:text-purple-700 transition-all duration-300"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium py-2 rounded-md shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
