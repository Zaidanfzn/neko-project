// src/pages/Pendaftaran.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { events } from "../data/event";

export default function Pendaftaran() {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));

  if (!event) {
    return (
      <div className="p-6 text-white">
        Event tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">
        Form Pendaftaran: {event.title}
      </h1>
      <p className="mb-4">Kategori: {event.category}</p>
      <p className="mb-4">Deskripsi: {event.desc}</p>
      {/* tambahkan form pendaftaran di sini */}
    </div>
  );
}
