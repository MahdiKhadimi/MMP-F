import { Link } from "react-router-dom";
import {
  FaHome,
  FaMoneyBillAlt,
  FaMoneyBillWave,
  FaMoneyCheckAlt,
  FaPiggyBank,
  FaUser,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-r shadow-sm">
      <div className="text-xl font-bold text-center py-5 text-blue-600 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        Microloan
      </div>
      <nav className="flex flex-col gap-2 px-4 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Link
          to="/dashboard"
          className="flex items-center gap-2 p-2 hover:bg-blue-100 rounded dark:bg-gray-900 text-gray-900 dark:text-gray-100"
        >
          <FaHome className="w-5 h-5 mr-2 text-blue-900" />
          <span className="dark:bg-gray-900 text-gray-900 dark:text-gray-100">Dashboard</span>
        </Link>

        <Link
          to="/admin"
          className="flex items-center gap-2 p-2 hover:bg-blue-100 rounded dark:bg-gray-900 text-gray-900 dark:text-gray-100"
        >
          <FaHome className="w-5 h-5 mr-2 text-blue-900" />
          <span className="dark:bg-gray-900 text-gray-900 dark:text-gray-100">Admin Dashboard</span>
        </Link>
        <Link
          to="/loans"
          className="flex items-center gap-2 p-2 hover:bg-blue-100 rounded dark:bg-gray-900 text-gray-900 dark:text-gray-100"
        >
          <FaMoneyCheckAlt className="w-5 h-5 mr-2 text-blue-900" />
          <span className="dark:bg-gray-900 text-gray-900 dark:text-gray-100">Loans</span>
        </Link>
        <Link
          to="/profile"
          className="flex items-center gap-2 p-2 hover:bg-blue-100 rounded dark:bg-gray-900 text-gray-900 dark:text-gray-100"
        >
          <FaUser className="w-5 h-5 mr-2 text-blue-900" />
          <span className="dark:bg-gray-900 text-gray-900 dark:text-gray-100">Profile</span>
        </Link>

        <Link
          to="/apply"
          className="flex items-center gap-2 p-2 hover:bg-blue-100 rounded dark:bg-gray-900 text-gray-900 dark:text-gray-100"
        >
          <FaMoneyBillAlt className="w-5 h-5 mr-2 text-blue-900" />
          <span className="dark:bg-gray-900 text-gray-900 dark:text-gray-100">Apply for Loan</span>
        </Link>
      </nav>
    </div>
  );
}
