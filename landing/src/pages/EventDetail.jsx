import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { events } from "/src/data/event";

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const eventData = events.find((e) => e.id === parseInt(id));

  if (!eventData) {
    return (
      <div className="text-center text-white py-20">
        <h1 className="text-2xl font-bold">Event tidak ditemukan</h1>
        <Link to="/event" className="text-yellow-400 underline mt-4 block">
          Kembali ke daftar event
        </Link>
      </div>
    );
  }

  // Helper cek login & user di localStorage
  const isUserLoggedIn = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const user = localStorage.getItem("user");
    return isLoggedIn === "true" && user !== null;
  };

  const handleRegister = () => {
    if (!isUserLoggedIn()) {
      navigate("/login");
    } else {
      navigate(`/event-register/${eventData.id}`);
    }
  };

  return (
    <div className="container mx-auto px-6 py-8 pt-20 text-white space-y-8">
      {/* Judul & Deskripsi Singkat */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">
          {eventData.title}
        </h1>
        <p className="text-gray-300">
          {eventData.shortDesc ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in odio euismod."}
        </p>
      </div>

      {/* Gambar + Info Samping */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Gambar */}
        <div className="bg-gray-800 p-4 rounded-lg border-gray-700">
          <img
            src={eventData.img}
            alt={eventData.title}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Info Acara */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">
            Informasi Acara
          </h2>
          <p>
            <strong>Tanggal:</strong> {eventData.date}
          </p>
          <p>
            <strong>Waktu:</strong> {eventData.time}
          </p>
          <p>
            <strong>Lokasi:</strong> {eventData.place}
          </p>
          <p>
            <strong>Pembicara:</strong> {eventData.detail.speaker}
          </p>
          <p>
            <strong>Biaya:</strong> {eventData.detail.fee}
          </p>
        </div>
      </div>

      {/* Agenda & Deskripsi */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 className="text-xl font-semibold text-yellow-400 mb-3">
          Agenda & Deskripsi
        </h2>
        <p className="text-gray-300 mb-4">{eventData.detail.description}</p>
        <h3 className="font-semibold text-yellow-400 mb-2">Agenda Hari Ini:</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          {eventData.detail.agenda.map((a, index) => (
            <li key={index}>{a}</li>
          ))}
        </ul>
      </div>

      {/* Testimoni */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 className="text-xl font-semibold text-yellow-400 mb-3">
          Testimoni Peserta
        </h2>
        <p className="italic text-gray-300">
          "{eventData.detail.testimonial.quote}"
        </p>
        <p className="mt-2 text-yellow-400 font-medium">
          - {eventData.detail.testimonial.name}
        </p>
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <button
          onClick={handleRegister}
          className="inline-block text-white px-6 py-3 rounded-lg font-medium bg-yellow-500 hover:bg-yellow-400 transition"
        >
          Daftar Sekarang
        </button>
      </div>
    </div>
  );
}
