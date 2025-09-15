import React from 'react';
import WaIcon from "/src/assets/img/wa.png";
import EmailIcon from "/src/assets/img/email.png";
import LogoIcon from "/src/assets/img/kucing.png";

export default function Home() {
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
      
      {/* Main Content */}
      <main className="container mx-auto pt-20 px-6 py-10 space-y-8 max-w-7xl">
        {/* Intro & USP */}
        <section className="p-8 bg-gray-900 border border-gray-700 rounded-lg hover-effect card-hover">
          <h2 className="text-yellow-400 text-xl font-semibold mb-4">Intro &amp; USP</h2>
          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </section>

        {/* Branding dan Digital Marketing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Branding */}
          <section className="p-8 bg-gray-900 border border-gray-700 rounded-lg hover-effect card-hover">
            <h2 className="text-yellow-400 text-xl font-semibold mb-4">Branding</h2>
            <p className="text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>

          {/* Digital Marketing */}
          <section className="p-8 bg-gray-900 border border-gray-700 rounded-lg hover-effect card-hover">
            <h2 className="text-yellow-400 text-xl font-semibold mb-4">Digital Marketing</h2>
            <p className="text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>
        </div>

        {/* Pernyataan */}
        <section className="p-8 bg-gray-900 border border-gray-700 rounded-lg hover-effect card-hover">
          <h2 className="text-yellow-400 text-xl font-semibold mb-4">Kenapa terintegrasi?</h2>
          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </section>

        {/* CTA Konsultasi */}
        <section className="p-8 bg-gray-900 border border-gray-700 rounded-lg hover-effect card-hover">
          <h2 className="text-yellow-400 text-xl font-semibold mb-4">CTA Konsultasi</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <a
            href="https://wa.me/6281210793464"
            className="inline-block bg-yellow-500 text-black px-6 py-2 rounded-md mt-6 btn-hover"
          >
            Konsultasi Sekarang
          </a>
        </section>
      </main>
      
        {/* Footer Section */}
        <section className="w-full bg-gray-800 py-10 border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            
            {/* Logo & Description */}
            <div className="flex flex-col items-center md:items-start">
              <img src={LogoIcon} alt="Logo" className="w-16 h-16 mb-4" />
              <h2 className="text-white text-2xl font-semibold mb-2">Creative Neko</h2>
            </div>

            {/* About Us */}
            <div>
              <h4 className="text-white font-semibold mb-3">About Us</h4>
              <ul className="space-y-2 text-white text-sm">
                <li><a href="#" className="hover:text-yellow-400">Mission</a></li>
                <li><a href="#" className="hover:text-yellow-400">Team</a></li>
                <li><a href="#" className="hover:text-yellow-400">Newsletter</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-white text-sm">
                <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
                <li><a href="#" className="hover:text-yellow-400">Refund Policy</a></li>
                <li><a href="#" className="hover:text-yellow-400">FAQ's</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white font-semibold mb-3">Social</h4>
              <ul className="space-y-2 text-white text-sm">
                <li><a href="#" className="hover:text-yellow-400">Instagram</a></li>
                <li><a href="#" className="hover:text-yellow-400">LinkedIn</a></li>
                <li><a href="#" className="hover:text-yellow-400">YouTube</a></li>
              </ul>
            </div>
          </div>
        </section>
    </>
  );
}
