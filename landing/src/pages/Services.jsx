import React from "react";
import LogoIcon from "/src/assets/img/kucing.png";

export default function Services() {
  return (
  <>
    <div className="container mx-auto pt-20 px-6 py-10 space-y-12 max-w-7xl">
      {/* Heading */}
      <section className="text-center">
        <img src={LogoIcon} alt="Creative Neko" className="w-20 h-20 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          Layanan Creative Neko Project
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Kami menghadirkan solusi kreatif dan terintegrasi bagi UMKM: mulai dari
          strategi brand, pemasaran digital, hingga penyelenggaraan event dan pelatihan
          di <strong>Creative Neko Academy</strong>. Semua layanan kami dirancang untuk
          membantu bisnis kecil dan menengah berkembang lebih cepat di era digital.
        </p>
      </section>

      {/* Grid Layanan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Branding */}
        <section className="p-8 bg-gray-900 border border-gray-700 rounded-lg hover-effect card-hover">
          <h2 className="text-yellow-400 text-xl font-semibold mb-4">Branding</h2>
          <p className="text-gray-300 leading-relaxed">
            Kami membantu UMKM membangun identitas merek yang kuat dan konsisten.
            Layanan ini mencakup riset brand, strategi komunikasi, pembuatan logo
            dan identitas visual, hingga panduan implementasi brand agar bisnis Anda
            lebih dikenal dan dipercaya oleh pelanggan.
          </p>
        </section>

        {/* Digital Marketing */}
        <section className="p-8 bg-gray-900 border border-gray-700 rounded-lg hover-effect card-hover">
          <h2 className="text-yellow-400 text-xl font-semibold mb-4">Digital Marketing</h2>
          <p className="text-gray-300 leading-relaxed">
            Strategi pemasaran digital untuk meningkatkan visibilitas dan penjualan UMKM.
            Termasuk pengelolaan media sosial, konten kreatif, kampanye iklan online,
            optimasi SEO, hingga analisis kinerja agar pemasaran lebih efektif dan tepat sasaran.
          </p>
        </section>

        {/* Event Online & Offline */}
        <section className="p-8 bg-gray-900 border border-gray-700 rounded-lg hover-effect card-hover">
          <h2 className="text-yellow-400 text-xl font-semibold mb-4">Event Online & Offline</h2>
          <p className="text-gray-300 leading-relaxed">
            Kami rutin menyelenggarakan dan mengelola event kreatif, baik online maupun offline,
            untuk memperluas jejaring, meningkatkan kapasitas, dan mempromosikan produk UMKM.
            Mulai dari webinar, workshop, hingga pameran atau showcase bisnis.
          </p>
        </section>

        {/* Creative Neko Academy */}
        <section className="p-8 bg-gray-900 border border-gray-700 rounded-lg hover-effect card-hover">
          <h2 className="text-yellow-400 text-xl font-semibold mb-4">Creative Neko Academy</h2>
          <p className="text-gray-300 leading-relaxed">
            Pusat pelatihan dan pengembangan keterampilan bagi UMKM.
            Melalui kelas dan program pelatihan praktis, kami membekali pelaku usaha dengan
            pengetahuan tentang branding, pemasaran digital, dan manajemen bisnis sehingga
            mereka siap menghadapi persaingan pasar.
          </p>
        </section>
      </div>

      {/* Kenapa Terintegrasi */}
      <section className="p-8 bg-gray-900 border border-gray-700 rounded-lg hover-effect card-hover">
        <h2 className="text-yellow-400 text-2xl font-semibold mb-4">Kenapa Terintegrasi?</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Creative Neko Project menghadirkan layanan yang terintegrasi agar UMKM
          tidak perlu bekerja dengan banyak pihak berbeda. Branding, pemasaran
          digital, event, dan pelatihan kami rancang sebagai satu ekosistem
          yang saling mendukung sehingga hasil lebih cepat dan konsisten.
        </p>
      </section>

      {/* CTA */}
      <section className="p-8 bg-gray-900 border border-gray-700 rounded-lg text-center hover-effect card-hover">
        <h2 className="text-yellow-400 text-xl font-semibold mb-4">
          Siap Mengembangkan Bisnis Anda?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
          Hubungi Creative Neko Project sekarang untuk sesi konsultasi gratis dan
          temukan solusi kreatif yang sesuai dengan kebutuhan bisnis Anda.
        </p>
        <a
          href="https://wa.me/6281210793464"
          className="inline-block bg-yellow-500 text-black px-6 py-2 rounded-md mt-4 btn-hover"
        >
          Konsultasi Sekarang
        </a>
      </section>
    </div>
    {/* Footer Section */}
    <section className="w-full bg-gray-800 py-10 border-t border-gray-700">
       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        {/* Logo & Deskripsi */}
          <div className="flex flex-col md:flex-row md:col-span-2 md:items-center">
            <img src={LogoIcon} alt="Logo" className="w-16 h-16 mb-4 md:mb-0 md:mr-4" />
              <div>
                <h2 className="text-white text-2xl font-semibold mb-2">Creative Neko</h2>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                  Creative Neko Project adalah konsultan kreatif yang mendukung UMKM
                  melalui layanan konsultasi, manajemen portofolio, event, dan pelatihan
                  di Creative Neko Academy.
                </p>
              </div>
            </div>
    
              {/* Support */}
              <div>
                <h4 className="text-white font-semibold mb-3">Support</h4>
                <ul className="space-y-2 text-white text-sm">
                  <li>
                    <a href="#" className="hover:text-yellow-400">
                      FAQ's
                    </a>
                  </li>
                </ul>
              </div>
    
              {/* Social */}
              <div>
                <h4 className="text-white font-semibold mb-3">Social</h4>
                <ul className="space-y-2 text-white text-sm">
                  <li>
                    <a href="#" className="hover:text-yellow-400">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-400">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
    </section>
  </>
  );
}
