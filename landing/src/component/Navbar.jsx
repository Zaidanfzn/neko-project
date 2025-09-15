import React from "react";
import logo from '/src/assets/img/kucing.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const AppNavbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const menuItems = [
    { name: "Home", to: isHome ? "home" : "/", isScroll: isHome, offset: 0 },
    { name: "Services", to: isHome ? "services" : "/Services", isScroll: isHome, offset: -80 },
    { name: "Portfolio", to: isHome ? "portfolio" : "/Portfolio", isScroll: isHome, offset: -80 },
    { name: "Event", to: isHome ? "events" : "/Event", isScroll: isHome, offset: -80 },
    { name: "Contact", to: isHome ? "contact" : "/contact", isScroll: isHome, offset: -80 },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center">
            <RouterLink to="/">
              <img src={logo} alt="logo" className="h-10 cursor-pointer" />
            </RouterLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.isScroll ? (
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={item.offset}
                    className="text-white cursor-pointer hover:text-yellow-400 transition"
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to={item.to}
                    onClick={() => handleNavClick(item)}
                    className="text-white hover:text-yellow-400 transition"
                  >
                    {item.name}
                  </RouterLink>
                )}
              </div>
            ))}
          </div>

          {/* Hamburger Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-yellow-400 focus:outline-none focus:text-yellow-400 transition"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible'
          } overflow-hidden`}
        >
          <div className="bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 py-4 shadow-lg border border-gray-700">
            {menuItems.map((item, index) => (
              <div key={`${item.name}-${index}`} className="px-4 py-2">
                {item.isScroll ? (
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={item.offset}
                    onClick={closeMenu}
                    className="block w-full text-white text-lg hover:text-yellow-400 transition cursor-pointer"
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to={item.to}
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-white text-lg hover:text-yellow-400 transition"
                  >
                    {item.name}
                  </RouterLink>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;