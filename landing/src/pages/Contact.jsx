import React, { useState } from "react";
import { Alert, Button } from "@heroui/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    kebutuhan: "",
    pesan: "",
  });

  const [errors, setErrors] = useState({});
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    if (errors[id]) {
      setErrors({ ...errors, [id]: "" });
    }
  };

  const handleCloseAlert = () => {
    setIsLeaving(true); // animasi keluar
    setTimeout(() => {
      setIsAlertVisible(false);
      setIsLeaving(false); // reset
    }, 500); // durasi animasi sama dengan transition
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Nama harus diisi";
    if (!formData.email.trim()) newErrors.email = "Email harus diisi";
    if (!formData.kebutuhan.trim()) newErrors.kebutuhan = "Pilih kebutuhan";
    if (!formData.pesan.trim()) newErrors.pesan = "Pesan harus diisi";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Tampilkan alert success
    setIsAlertVisible(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      kebutuhan: "",
      pesan: "",
    });
    setErrors({});

    // Auto close after 3s
    setTimeout(() => {
      handleCloseAlert();
    }, 3000);
  };

  return (
    <div className="bg-gray-900 text-white px-6 font-sans">
      <main className="container mx-auto px-4 py-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Form */}
          <div className="lg:col-span-2 bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">
              Hubungi Kami
            </h2>

            {isAlertVisible && (
              <div
                className={`transition-all duration-500 ease-in-out transform ${
                  isLeaving
                    ? "opacity-0 translate-y-2"
                    : "opacity-100 translate-y-0"
                }`}
              >
                <Alert
                  color="success"
                  variant="faded"
                  title="Pesan Berhasil Dikirim"
                  description="Pesanmu berhasil terkirim! Kami akan segera menghubungi Anda kembali."
                  onClose={handleCloseAlert}
                  className="mb-6 bg-gray-800 border border-yellow-500 text-gray-300"
                  titleClassName="text-yellow-400 font-semibold"
                  descriptionClassName="text-gray-300"
                />
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nama */}
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama Anda"
                  className={`w-full px-4 py-3 bg-gray-700 border ${
                    errors.name ? "border-red-500" : "border-gray-600"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nama@example.com"
                  className={`w-full px-4 py-3 bg-gray-700 border ${
                    errors.email ? "border-red-500" : "border-gray-600"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Kebutuhan */}
              <div>
                <label htmlFor="kebutuhan" className="block text-gray-300 mb-2">
                  Kebutuhan Anda
                </label>
                <select
                  id="kebutuhan"
                  value={formData.kebutuhan}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700 border ${
                    errors.kebutuhan ? "border-red-500" : "border-gray-600"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white`}
                >
                  <option value="">Pilih jenis kebutuhan</option>
                  <option value="web">Desain & Pengembangan Web</option>
                  <option value="mobile">Aplikasi Mobile</option>
                  <option value="branding">Branding & Identitas Visual</option>
                  <option value="marketing">Marketing Digital & Konten</option>
                  <option value="lainnya">Lainnya</option>
                </select>
                {errors.kebutuhan && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.kebutuhan}
                  </p>
                )}
              </div>

              {/* Pesan */}
              <div>
                <label htmlFor="pesan" className="block text-gray-300 mb-2">
                  Pesan
                </label>
                <textarea
                  id="pesan"
                  rows="5"
                  value={formData.pesan}
                  onChange={handleChange}
                  placeholder="Jelaskan kebutuhan Anda secara singkat..."
                  className={`w-full px-4 py-3 bg-gray-700 border ${
                    errors.pesan ? "border-red-500" : "border-gray-600"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white`}
                ></textarea>
                {errors.pesan && (
                  <p className="text-red-500 text-sm mt-1">{errors.pesan}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-medium py-3 px-6 rounded-lg transition"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* Info Kontak */}
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg mt-3 border border-gray-700">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                Kontak Langsung
              </h3>
              <p className="text-gray-300 mb-4">
                Butuh bantuan cepat? Hubungi tim kami melalui metode berikut:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong>Senin - Jumat</strong>: 08:00 - 17:00 WIB
                </li>
                <li>
                  <strong>Sabtu - Minggu</strong>: Tutup
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mt-6">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                WhatsApp & Email
              </h3>
              <p className="text-gray-300 mb-4">
                Hubungi kami langsung melalui saluran berikut:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong>WhatsApp</strong>: +62 812-1079-3464
                </li>
                <li>
                  <strong>Email</strong>: info@creativenekoproject.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* CTA Footer */}
      <footer className="py-6 px-6 bg-gray-900 border-t border-gray-700 text-center text-gray-400">
        <p>&copy; 2025 Creative Neko Project. Semua hak dilindungi.</p>
      </footer>
    </div>
  );
}
