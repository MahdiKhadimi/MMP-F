import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useEffect } from "react";

const SidebarLayout = () => {
  const [open, setOpen] = useState(false);

  // Optional: Prevent background scroll when sidebar is open on mobile
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <div className="flex h-screen bg-gray-100  dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="md:hidden p-2  dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <button
          aria-label={open ? 'Close sidebar' : 'Open sidebar'}
          aria-expanded={open}
          aria-controls="sidebar-menu"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? "✖️" : "☰"}
        </button>
      </div>
      {/* Overlay for mobile when sidebar is open */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setOpen(false)}
          aria-label="Close sidebar overlay"
        ></div>
      )}
      <aside
        id="sidebar-menu"
        aria-hidden={!open && window.innerWidth < 768}
        className={`bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-r shadow-sm fixed inset-y-0 left-0 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-200 w-64 z-50`}
        style={{ pointerEvents: open || window.innerWidth >= 768 ? 'auto' : 'none' }}
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
