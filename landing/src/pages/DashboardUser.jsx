// src/pages/DashboardUser.jsx
import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import { projects } from "../data/portfolio"; // pastikan file ini ada
import { events } from "../data/event"; // pastikan file ini ada

export default function DashboardUser() {
  const [openSidebar, setOpenSidebar] = useState(false);

  // hitung statistik
  const totalProjects = projects.length;
  const totalEvents = events.length;
  const onlineEvents = events.filter((e) => e.category === "Online").length;
  const offlineEvents = events.filter((e) => e.category === "Offline").length;

  return (
    <div className="flex bg-gray-900 min-h-screen">
      {/* Sidebar */}
      <Sidebar open={openSidebar} onClose={() => setOpenSidebar(false)} />

      {/* Content */}
      <main className="flex-1 ml-0 md:ml-64 h-screen overflow-y-auto">
        <Header onMenuClick={() => setOpenSidebar(true)} onLogout={() => {}} />

        <div className="p-6 space-y-10">
          {/* Statistik */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-6 shadow">
              <h2 className="text-gray-400 text-sm">Total Portfolio</h2>
              <p className="text-3xl font-bold text-gray-100">{totalProjects}</p>
            </div>
            <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-6 shadow">
              <h2 className="text-gray-400 text-sm">Total Event</h2>
              <p className="text-3xl font-bold text-gray-100">{totalEvents}</p>
            </div>
            <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-6 shadow">
              <h2 className="text-gray-400 text-sm">Online Event</h2>
              <p className="text-3xl font-bold text-blue-400">{onlineEvents}</p>
            </div>
            <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-6 shadow">
              <h2 className="text-gray-400 text-sm">Offline Event</h2>
              <p className="text-3xl font-bold text-green-400">{offlineEvents}</p>
            </div>
          </div>

          {/* Table Project */}
          <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-6 shadow">
          <h2 className="text-lg font-bold text-gray-200 mb-4">
                Data Portfolio (Projects)
          </h2>
          <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                <thead>
                    <tr>
                    <th className="px-4 py-2 text-left text-sm text-gray-300">
                        Judul
                    </th>
                    <th className="px-4 py-2 text-left text-sm text-gray-300">
                        Kategori
                    </th>
                    <th className="px-4 py-2 text-left text-sm text-gray-300">
                        Nama
                    </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                    {projects.map((p) => (
                    <tr key={p.id}>
                        <td className="px-4 py-2 text-gray-300">{p.title}</td>
                        <td className="px-4 py-2 text-gray-300">{p.category}</td>
                        <td className="px-4 py-2 text-gray-300">
                        {p.detail?.testimoni?.nama || "-"}
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
          </div>
          </div>

          {/* Table Event */}
          <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-6 shadow">
            <h2 className="text-lg font-bold text-gray-200 mb-4">Data Event</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm text-gray-300">
                      Judul
                    </th>
                    <th className="px-4 py-2 text-left text-sm text-gray-300">
                      Kategori
                    </th>
                    <th className="px-4 py-2 text-left text-sm text-gray-300">
                      Nama
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {events.map((e) => (
                    <tr key={e.id}>
                      <td className="px-4 py-2 text-gray-300">{e.title}</td>
                      <td className="px-4 py-2 text-gray-300">{e.category}</td>
                      <td className="px-4 py-2 text-gray-300">
                        {e.detail?.testimonial?.name || "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
