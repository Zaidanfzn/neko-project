// src/pages/DashboardEvent.jsx
import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import { events } from "../data/event";

export default function DashboardEvent() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex bg-gray-900 min-h-screen">
      {/* Sidebar */}
      <Sidebar open={openSidebar} onClose={() => setOpenSidebar(false)} />

      {/* Content */}
      <main className="flex-1 ml-0 md:ml-64 h-screen overflow-y-auto">
        <Header onMenuClick={() => setOpenSidebar(true)} onLogout={() => {}} />

        <div className="p-6 space-y-10">
          <h1 className="text-2xl font-bold text-gray-200 mb-4">
            Event Tersedia
          </h1>

          {/* List Event */}
          <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-6 shadow">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm text-gray-300">
                      Judul Event
                    </th>
                    <th className="px-4 py-2 text-left text-sm text-gray-300">
                      Kategori
                    </th>
                    <th className="px-4 py-2 text-left text-sm text-gray-300">
                      Deskripsi
                    </th>
                    <th className="px-4 py-2 text-left text-sm text-gray-300">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {events.map((event) => (
                    <tr key={event.id}>
                      <td className="px-4 py-2 text-gray-300">{event.title}</td>
                      <td className="px-4 py-2 text-gray-300">
                        {event.category}
                      </td>
                      <td className="px-4 py-2 text-gray-300">
                        {event.desc || "-"}
                      </td>
                      <td className="px-4 py-2 text-gray-300">
                        <a
                          href={`/pendaftaran/${event.id}`}
                          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm"
                        >
                          Daftar
                        </a>
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
