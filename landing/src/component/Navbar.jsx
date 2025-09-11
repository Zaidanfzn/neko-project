import React from 'react';
import logo from '/src/img/kucing.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="w-full bg-gray-900 text-white px-6 border-b border-gray-700 fixed top-0 z-50">
      <div className="max-w-screen-xl mx-auto w-full px-6 flex justify-between items-center h-16">
        <RouterLink to="/">
          <img src={logo} alt="logo" className="py-2 h-10 cursor-pointer" />
        </RouterLink>

        <div className="flex items-center space-x-8">
          {isHome ? (
            <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400 transition">
              Home
            </ScrollLink>
          ) : (
            <RouterLink to="/" className="hover:text-yellow-400 transition">
              Home
            </RouterLink>
          )}

          {/* Services */}
          {isHome ? (
            <ScrollLink to="services" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-yellow-400 transition">
              Services
            </ScrollLink>
          ) : (
            <RouterLink to="/Services" className="hover:text-yellow-400 transition">
              Services
            </RouterLink>
          )}

          {/* Portfolio */}
          {isHome ? (
            <ScrollLink to="portfolio" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-yellow-400 transition">
              Portfolio
            </ScrollLink>
          ) : (
            <RouterLink to="/Portfolio" className="hover:text-yellow-400 transition">
              Portfolio
            </RouterLink>
          )}

          {/* Events */}
          {isHome ? (
            <ScrollLink to="events" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-yellow-400 transition">
              Event
            </ScrollLink>
          ) : (
            <RouterLink to="/Event" className="hover:text-yellow-400 transition">
              Events
            </RouterLink>
          )}

          {/* Contact */}
          {isHome ? (
            <ScrollLink to="contact" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-yellow-400 transition">
              Contact
            </ScrollLink>
          ) : (
            <RouterLink to="/contact" className="hover:text-yellow-400 transition">
              Contact
            </RouterLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
