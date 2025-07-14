import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const SidebarLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex h-screen bg-gray-100  dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="md:hidden p-2  dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? "✖️" : "☰"}
        </button>
      </div>
      <aside
        className={` dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-r  shadow-sm fixed inset-y-0 left-0 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-200 w-64`}
      >
        <Sidebar />
      </aside>
      <div className="flex flex-1 flex-col overflow-hidden ml-0 md:ml-64">
        <Header />
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SidebarLayout;
