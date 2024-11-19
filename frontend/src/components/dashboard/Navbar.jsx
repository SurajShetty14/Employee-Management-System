import { useAuth } from "../../context/authContext";

const Navbar = () => {
  const { user, logout } = useAuth(); // Assuming logout function is available from the context

  return (
    <div className="flex justify-between items-center h-20 p-4 bg-white shadow-md">
      <div className="text-lg font-semibold">
        Welcome, {user.name}
      </div>
      <button
        className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-200"
        onClick={logout} // Assuming the logout function will handle user logout logic
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
