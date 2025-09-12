import React, { useState } from "react";
import Image from "/src/img/kucing.png";
import { Link } from "react-router-dom";
import Web from "/src/img/web.jpg";
import Brand from "/src/img/branding.jpg";
import Wa from "/src/img/wa.png";
import Email from "/src/img/email.png";
import Testimonials from "./Testi";


const Home = () => {
  // State untuk toggle selengkapnya
  const [showBranding, setShowBranding] = useState(false);
  const [showMarketing, setShowMarketing] = useState(false);

  // Konten panjang
  const brandingText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam. consectetur adipiscing elit. Sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam.  consectetur adipiscing elit. Sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam.  consectetur adipiscing elit. Sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam.  consectetur adipiscing elit. Sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam.  consectetur adipiscing elit. Sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam.`;

  const marketingText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis 
    ipsum suspendisse ultrices gravida. Risus commodo viverra 
    maecenas accumsan lacus vel facilisis.`;

  return (
    <>
      {/* Custom CSS nya */}
      <style>
        {`
        /* Custom Hover Effect */
        .hover-effect {
          position: relative;
          overflow: hidden;
        }

        .hover-effect::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #FFD700;
          transition: width 0.3s ease;
        }

        .hover-effect:hover::after {
          width: 100%;
        }

        .hover-effect h3 {
          color: #FFD700;
          transition: color 0.3s ease;
        }

        .hover-effect:hover h3 {
          color: #fff;
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px #000000;
        }

        /* Button Hover Glow */
        .btn-hover {
          background-color: #FFD700;
          color: black;
          transition: all 0.3s ease;
        }

        .btn-hover:hover {
          background-color: #fbbf24;
          box-shadow: 0 0 15px #fbbf24;
        }
      `}
      </style>

      <div className="w-full bg-gray-900 text-white pt-20">
        {/* Hero Section */}
        <section id="home" className="w-full min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-6 leading-tight">
                Creative Neko Project
              </h1>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae elit libero, a pharetra augue.consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam. consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam. consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam. consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam. consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam.
              </p>
              <button className="btn-hover px-8 py-3 rounded-lg font-semibold">
                Hubungi via WhatsApp
              </button>
            </div>

            {/* Right Content - Logo */}
            <div className="flex justify-center lg:justify-end">
              <img src={Image} alt="kucing" className="py-2" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="w-full min-h-screen flex items-center py-20"
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-yellow-400 mb-12">
              Layanan Kami
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Branding */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 card-hover hover-effect">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Branding
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {showBranding
                    ? brandingText
                    : brandingText.substring(0, 100) + "..."}
                </p>
                <button
                  onClick={() => setShowBranding(!showBranding)}
                  className="text-yellow-400 underline mb-4"
                >
                  {showBranding ? "Tampilkan Lebih Sedikit" : "Selengkapnya"}
                </button>
                <br />
                <Link to="/services">
                  <button className="btn-hover px-6 py-2 rounded-lg font-semibold">
                    Learn More
                  </button>
                </Link>
              </div>

              {/* Digital Marketing */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 card-hover hover-effect">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Digital Marketing
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {showMarketing
                    ? marketingText
                    : marketingText.substring(0, 100) + "..."}
                </p>
                <button
                  onClick={() => setShowMarketing(!showMarketing)}
                  className="text-yellow-400 underline mb-4"
                >
                  {showMarketing ? "Tampilkan Lebih Sedikit" : "Selengkapnya"}
                </button>
                <br />
                <Link to="/services">
                  <button className="btn-hover px-6 py-2 rounded-lg font-semibold">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Works Section */}
        <section id="portfolio" className="w-full py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-8">
              Portfolio
            </h2>
            {/*Card dari portfolio nya*/}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {/* Portfolio 1 */}
              <div className="relative border border-gray-700 h-64 bg-gray-800 rounded-lg overflow-hidden group cursor-pointer hover:border-yellow-400 transition-colors duration-300">
                <img src={Web} alt="Project Satu" className="w-full h-full object-cover" />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold text-yellow-400">Website Toko Online</h3>
                </div>
              </div>

              {/* Portfolio 2 */}
              <div className="relative border border-gray-700 h-64 bg-gray-800 rounded-lg overflow-hidden group cursor-pointer hover:border-yellow-400 transition-colors duration-300">
                <img src={Image} alt="Project Dua" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold text-yellow-400">Kampanye Digital Produk Baru</h3>
                </div>
              </div>

              {/* Portfolio 3 */}
              <div className="relative border border-gray-700 h-64 bg-gray-800 rounded-lg overflow-hidden group cursor-pointer hover:border-yellow-400 transition-colors duration-300">
                <img src={Brand} alt="Project Tiga" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold text-yellow-400">Rebranding Identitas Brand</h3>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/portfolio">
              <button className="btn-hover px-8 py-3 rounded-lg font-semibold">
                Lihat Portfolio Lainnya
              </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="w-full py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-yellow-400 mb-12">
              Event Mendatang
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Event 1 */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 card-hover hover-effect">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                  Webinar: Strategi Digital
                </h3>
                <p className="text-gray-400 mb-4">
                  15 November 2024 | 19:00 – 21:00 WIB — Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>
                <button className="btn-hover px-6 py-2 rounded-lg font-semibold">
                  Daftar Sekarang
                </button>
              </div>

              {/* Event 2 */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 card-hover hover-effect">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                  Workshop: Branding
                </h3>
                <p className="text-gray-400 mb-4">
                  22 November 2024 | 09:00 – 16:00 WIB — Quis ipsum suspendisse
                  ultrices gravida.
                </p>
                <button className="btn-hover px-6 py-2 rounded-lg font-semibold">
                  Daftar Sekarang
                </button>
              </div>
            </div>

            <div className="text-center">
              <Link to="/Event">
                <button className="btn-hover px-8 py-3 rounded-lg font-semibold">
                  Lihat Event Lainnya
                </button>
              </Link>
            </div>
          </div>
        </section>

        
        {/* Testi section*/}

        <Testimonials />

        {/* Contact Section */}
        <section id="contact" className="w-full py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-yellow-400 mb-6">
              Informasi Kontak
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Punya pertanyaan atau ingin berdiskusi tentang proyek Anda? Jangan
              ragu untuk menghubungi kami dan terhubung ke Media Sosial kami!
            </p>
          </div>
          <div className="flex justify-center items-center gap-x-6">
         <Link to="https://wa.me/0891234567">
          <img 
            src={Wa} 
            alt="WhatsApp icon" 
            className="w-12 h-12 hover:scale-110 transition-transform duration-300 center"
          />
        </Link>
        <Link to="https://mailto:infonekoproject@gmail.com">
          <img 
            src={Email} 
            alt="WhatsApp icon" 
            className="w-12 h-12 hover:scale-110 transition-transform duration-300 center"
          />
        </Link>
        </div>
        </section>
      </div>
    </>
  );
};

export default Home;
