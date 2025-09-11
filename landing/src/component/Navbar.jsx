import React from "react";
import logo from '/src/img/kucing.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem,} from "@nextui-org/react";

const AppNavbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Daftar menu untuk mobile (sama persis dengan desktop)
  const menuItems = [
    { name: "Home", to: isHome ? "home" : "/", isScroll: isHome, offset: 0 },
    { name: "Services", to: isHome ? "services" : "/Services", isScroll: isHome, offset: -80 },
    { name: "Portfolio", to: isHome ? "portfolio" : "/Portfolio", isScroll: isHome, offset: -80 },
    { name: "Event", to: isHome ? "events" : "/Event", isScroll: isHome, offset: -80 },
    { name: "Contact", to: isHome ? "contact" : "/contact", isScroll: isHome, offset: -80 },
  ];

  return (
    <Navbar
      isBordered
      isBlurred
      classNames={{
        base: "bg-gray-900/80 backdrop-blur-md border-b border-gray-700",
        wrapper: "max-w-screen-xl mx-auto px-6",
      }}
      onMenuOpenChange={setIsMenuOpen}
      className="fixed top-0 z-50 w-full"
    >
      {/* Brand + Hamburger Toggle */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <RouterLink to="/">
            <img src={logo} alt="logo" className="py-2 h-10 cursor-pointer" />
          </RouterLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Menu */}
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
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
                className="text-white hover:text-yellow-400 transition"
              >
                {item.name}
              </RouterLink>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile Menu — Tidak fullscreen, scrollable, auto-tutup setelah scroll */}
      <NavbarMenu
        className="bg-gray-900/95 backdrop-blur-md"
        classNames={{
          base: "py-4 max-h-[60vh] overflow-y-auto",
        }}
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`} className="py-2">
            {item.isScroll ? (
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                offset={item.offset}
                onClick={() => setIsMenuOpen(false)} // Tutup saat klik
                onSetActive={() => {
                  // Pastikan tutup setelah scroll selesai
                  setTimeout(() => setIsMenuOpen(false), 300);
                }}
                className="w-full text-white text-lg hover:text-yellow-400 transition block"
              >
                {item.name}
              </ScrollLink>
            ) : (
              <RouterLink
                to={item.to}
                onClick={() => setIsMenuOpen(false)} // Tutup saat klik
                className="w-full text-white text-lg hover:text-yellow-400 transition block"
              >
                {item.name}
              </RouterLink>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default AppNavbar;