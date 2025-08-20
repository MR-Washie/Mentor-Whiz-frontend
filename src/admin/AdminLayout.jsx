import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="mt-20 min-h-[70vh] grid grid-cols-1 md:grid-cols-[220px_1fr]">
      <aside className="border-r bg-gray-50 p-4">
        <h2 className="text-lg font-semibold mb-4">Admin</h2>
        <nav className="space-y-2">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `block rounded px-3 py-2 ${isActive ? "bg-black text-white" : "hover:bg-gray-200"}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/jobs"
            className={({ isActive }) =>
              `block rounded px-3 py-2 ${isActive ? "bg-black text-white" : "hover:bg-gray-200"}`
            }
          >
            Jobs
          </NavLink>
          <NavLink
            to="/admin/jobs/new"
            className={({ isActive }) =>
              `block rounded px-3 py-2 ${isActive ? "bg-black text-white" : "hover:bg-gray-200"}`
            }
          >
            New Job
          </NavLink>
        </nav>
      </aside>

      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
