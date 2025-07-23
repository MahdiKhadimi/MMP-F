import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Header() {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useTheme();
  const { user, logout } = useContext(AuthContext);
  const logoutHanlder = () => {
    logout();
    toast.info("You have been logged out");
    navigate("/login");
  };
  return (
    <div className="dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow px-4 py-3 flex justify-between items-center">
      <h1 className="text-lg font-semibold text-gray-700 dark:bg-gray-900 text-gray-900 dark:text-gray-100">Dashboard</h1>
      <div className="flex items-center gap-4 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <span className="text-sm text-gray-600 dark:bg-gray-900 text-gray-900 dark:text-gray-100">{user?.email}</span>
        <button
          onClick={logoutHanlder}
          className="text-red-600 hover:underline dark:bg-gray-900 text-gray-900 dark:text-gray-100"
        >
          Logout
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded text-xl dark:bg-gray-900 text-gray-900 dark:text-gray-100"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
}
