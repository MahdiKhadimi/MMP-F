import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SidebarLayout from "../layouts/SidebarLayout";
import Loans from "../pages/Loans";
import Profile from "../pages/Profile";
import ProtectedRoute from "../components/ProtectedRoute";
import LoanApplicationForm from "../pages/LoanApplicationForm";

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <SidebarLayout />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "loans",
            element: <Loans />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "apply",
            element: <LoanApplicationForm />,
          },
        ],
      },
    ],
  },
]);

export default router;
