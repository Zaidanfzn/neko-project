import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
//component
import Navbar from './component/Navbar.jsx'
import Footer from './component/Footer.jsx'

//pages
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Event from './pages/Event.jsx'
import EventDetail from './pages/EventDetail.jsx'
import Portfolio from './pages/Portfolio.jsx'
import PortfolioDetail from './pages/PortfolioDetail.jsx'
import Contact from './pages/Contact.jsx';

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      {/* Render Footer global, tapi hide kalau di /contact */}
      {location.pathname !== "/contact" && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
