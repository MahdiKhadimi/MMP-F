import { Link } from "react-router-dom";
import { FaHome, FaMoneyCheckAlt, FaUser } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r shadow-sm hidden md:block">
      <div className="text-xl font-bold text-center py-5 text-blue-600">
        Microloan
      </div>
      <nav className="flex flex-col gap-2 px-4">
        <Link
          to="/dashboard"
          className="flex items-center gap-2 p-2 hover:bg-blue-100 rounded"
        >
          <FaHome />
          Dashboard
        </Link>
        <Link
          to="/loans"
          className="flex items-center gap-2 p-2 hover:bg-blue-100 rounded"
        >
          <FaMoneyCheckAlt />
          Loans
        </Link>
        <Link
          to="/profile"
          className="flex items-center gap-2 p-2 hover:bg-blue-100 rounded"
        >
          <FaUser />
          Profile
        </Link>
      </nav>
    </div>
  );
}
