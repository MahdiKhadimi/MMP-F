import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const logoutHanlder = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="bg-white shadow px-4 py-3 flex justify-between items-center">
      <h1 className="text-lg font-semibold text-gray-700">Dashboard</h1>
      <div className="text-sm text-gray-600">{user?.email}</div>
      <div>
        <button
          className="text-red-500 hover:underline "
          onClick={logoutHanlder}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
