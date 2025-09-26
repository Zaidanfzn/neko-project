import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { events } from "/src/data/event";

/** Alert Toast  **/
const AlertToast = ({ visible, leaving, title, message }) => {
  if (!visible) return null;
  return (
    <div
      className={`fixed top-20 left-1/2 -translate-x-1/2 
        w-[90%] max-w-lg   
        transition-all duration-500 ease-in-out transform 
        bg-gray-800/70 backdrop-blur-md px-4 py-3 rounded-md 
        border border-gray-700 border-l-4 border-l-yellow-500 
        shadow-lg
        ${leaving ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"}`}
    >
      <div className="flex flex-col">
        <h3 className="text-yellow-400 font-semibold text-sm">{title}</h3>
        <p className="text-gray-300 text-xs">{message}</p>
      </div>
    </div>
  );
};

export default function EventUser() {
  const [user, setUser] = useState(null);
  const [userRegistrations, setUserRegistrations] = useState([]);
  const navigate = useNavigate();

  // state untuk konfirmasi batal
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // state untuk alert toast
  const [alert, setAlert] = useState({ visible: false, title: "", message: "" });
  const [isLeaving, setIsLeaving] = useState(false);

  const showToast = (title, message) => {
    setAlert({ visible: true, title, message });
    setTimeout(() => {
      setIsLeaving(true);
      setTimeout(() => {
        setAlert({ visible: false, title: "", message: "" });
        setIsLeaving(false);
      }, 500);
    }, 2000);
  };

  useEffect(() => {
    // cek login
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const currentUser = JSON.parse(localStorage.getItem("user"));

    if (isLoggedIn !== "true" || !currentUser) {
      navigate("/login");
      return;
    }

    setUser(currentUser);

    // ambil data registrasi user
    const registrations = JSON.parse(localStorage.getItem("registrations") || "[]");
    const filtered = registrations.filter(reg => reg.userEmail === currentUser.email);

    // urutkan berdasarkan tanggal event dari terkecil ke terbesar
    const sorted = filtered.sort((a, b) => {
      const eventA = events.find(e => e.id === a.eventId);
      const eventB = events.find(e => e.id === b.eventId);
      if (!eventA || !eventB) return 0;
      const dateA = new Date(eventA.date);
      const dateB = new Date(eventB.date);
      return dateA - dateB;
    });

    setUserRegistrations(sorted);
  }, [navigate]);

  const handleCancelClick = (eventId) => {
    setSelectedEvent(eventId);
    setShowConfirm(true);
  };

  const confirmCancelRegistration = () => {
    let registrations = JSON.parse(localStorage.getItem("registrations") || "[]");
    registrations = registrations.filter(
      reg => !(reg.eventId === selectedEvent && reg.userEmail === user.email)
    );
    localStorage.setItem("registrations", JSON.stringify(registrations));
    setUserRegistrations(prev => prev.filter(reg => reg.eventId !== selectedEvent));

    // tutup modal konfirmasi
    setShowConfirm(false);

    // munculkan toast blur
    const eventTitle = events.find(e => e.id === selectedEvent)?.title || "Event";
    showToast("Pendaftaran dibatalkan", `Anda telah membatalkan ${eventTitle}.`);
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">
          Event yang Saya Ikuti
        </h1>

        {userRegistrations.length === 0 ? (
          <p className="text-gray-300">Anda belum mendaftar pada event manapun.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {userRegistrations.map((reg, idx) => {
              const eventData = events.find(e => e.id === reg.eventId);
              return (
                <div
                  key={idx}
                  className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-5 hover:shadow-yellow-400 transition relative"
                >
                  <div className="absolute top-3 right-3 text-yellow-400 font-bold text-lg">
                    #{idx + 1}
                  </div>
                  <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                    {reg.eventTitle || eventData?.title}
                  </h2>
                  <p className="text-gray-300"><strong>Tanggal:</strong> {eventData?.date || "-"}</p>
                  <p className="text-gray-300"><strong>Waktu:</strong> {eventData?.time || "-"}</p>
                  <p className="text-gray-300"><strong>Lokasi:</strong> {eventData?.place || "-"}</p>
                  <p className="text-gray-400 text-sm mt-1">
                    Terdaftar pada: {new Date(reg.timestamp).toLocaleString()}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Link
                      to={`/events/${reg.eventId}`}
                      className="bg-yellow-500 hover:bg-yellow-400 px-3 py-1 rounded-lg font-semibold text-black"
                    >
                      Detail
                    </Link>
                    <button
                      onClick={() => handleCancelClick(reg.eventId)}
                      className="bg-green-500 hover:bg-green-400 px-3 py-1 rounded-lg font-semibold text-black"
                    >
                      Batal Daftar
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-6">
          <Link to="/event" className="text-yellow-300 underline">
            ← Kembali ke daftar event
          </Link>
        </div>
      </div>

      {/* ==== Alert Toast ==== */}
      <AlertToast
        visible={alert.visible}
        leaving={isLeaving}
        title={alert.title}
        message={alert.message}
      />

      {/* ==== Modal Konfirmasi Batal ==== */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-800/90 backdrop-blur-sm text-white p-6 rounded-xl max-w-md w-[90%]">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">
              Konfirmasi Pembatalan
            </h3>
            <p className="mb-6">
              Apakah Anda yakin ingin membatalkan pendaftaran event{" "}
              <span className="font-bold">
                {events.find(e => e.id === selectedEvent)?.title}
              </span>
              ?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 rounded-lg bg-gray-600/80 hover:bg-gray-500/80 text-white"
              >
                Batal
              </button>
              <button
                onClick={confirmCancelRegistration}
                className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-400 text-black font-semibold"
              >
                Ya, Batalkan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
