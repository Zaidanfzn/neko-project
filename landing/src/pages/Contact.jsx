import React from "react";

export default function Contact() {
  return (
    <div className="bg-gray-900 text-white px-6 font-sans">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 pt-20">
        {/* Form Kontak + Info Kontak */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Form */}
          <div className="lg:col-span-2 bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">
              Hubungi Kami
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Masukkan nama Anda"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="nama@example.com"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                />
              </div>
              <div>
                <label htmlFor="kebutuhan" className="block text-gray-300 mb-2">
                  Kebutuhan Anda
                </label>
                <select
                  id="kebutuhan"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                >
                  <option value="">Pilih jenis kebutuhan</option>
                  <option value="web">Desain & Pengembangan Web</option>
                  <option value="mobile">Aplikasi Mobile</option>
                  <option value="branding">Branding & Identitas Visual</option>
                  <option value="marketing">Marketing Digital & Konten</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>
              <div>
                <label htmlFor="pesan" className="block text-gray-300 mb-2">
                  Pesan
                </label>
                <textarea
                  id="pesan"
                  rows="5"
                  placeholder="Jelaskan kebutuhan Anda secara singkat..."
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                ></textarea>
              </div>
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
            {/* Kontak Langsung */}
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

            {/* WhatsApp & Email */}
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

        {/* CTA + Konsultasi */}
        <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Siap Mulai Proyek Anda?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Jika Anda memiliki ide proyek digital, desain, atau strategi
            marketing, jangan ragu untuk menghubungi kami. Tim kami siap
            memberikan konsultasi gratis selama 30 menit untuk membantu Anda
            memahami langkah-langkah awal.
          </p>
          <a
            href="https://wa.me/6281210793464"
            className="inline-block text-white px-6 py-3 rounded-lg font-medium bg-yellow-500 hover:bg-yellow-400 transition"
          >
            Jadwalkan Konsultasi Gratis Sekarang
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-6 bg-gray-900 border-t border-gray-700 text-center text-gray-400">
        <p>&copy; 2025 Creative Neko Project. Semua hak dilindungi.</p>
      </footer>
    </div>
  );
}
