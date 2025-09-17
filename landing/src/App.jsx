import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// component
import Navbar from './component/Navbar.jsx'
import Footer from './component/Footer.jsx'
import ProtectedRoute from './component/ProtectedRoute.jsx';

// pages
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Event from './pages/Event.jsx'
import EventDetail from './pages/EventDetail.jsx'
import Portfolio from './pages/Portfolio.jsx'
import PortfolioDetail from './pages/PortfolioDetail.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import DashboardAdmin from './pages/DashboardAdmin.jsx'
import DashboardUser from './pages/DashboardUser.jsx'
import DashboardEvent from './pages/DashboardEvent.jsx'
import Signup from './pages/Signup.jsx'
import EventRegister from "./pages/EventRegister";

function AppContent() {
  const location = useLocation();

  // path yang navbar-nya disembunyikan
  const hideNavbarOn = ["/login", "/signup", "/dashboard", "/dashboarduser", "/dashboardevent"];
  // path yang footer-nya disembunyikan
  const hideFooterOn = ["/login", "/signup", "/contact", "/dashboard", "/dashboarduser", "/dashboardevent"];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navbar tampil kalau path sekarang tidak ada di hideNavbarOn */}
      {!hideNavbarOn.includes(location.pathname.toLowerCase()) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/event" element={<Event />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/event-register/:id" element={<EventRegister />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<DashboardAdmin />} />
        <Route path="/dashboarduser" element={<DashboardUser />} />
        <Route path="/dashboardevent" element={<DashboardEvent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* User-only route */}
        <Route
          path="/home"
          element={
            <ProtectedRoute role="user">
              <Home />
            </ProtectedRoute>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute role="admin">
              <DashboardAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboarduser"
          element={
            <ProtectedRoute role="admin">
              <DashboardUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboardevent"
          element={
            <ProtectedRoute role="admin">
              <DashboardEvent />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Footer tampil kalau path sekarang tidak ada di hideFooterOn */}
      {!hideFooterOn.includes(location.pathname.toLowerCase()) && <Footer />}
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
