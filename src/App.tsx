/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Pages (to be created)
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Remedies = React.lazy(() => import('./pages/Remedies'));
const Classes = React.lazy(() => import('./pages/Classes'));
const EbookStore = React.lazy(() => import('./pages/EbookStore'));
const Booking = React.lazy(() => import('./pages/Booking'));
const Payment = React.lazy(() => import('./pages/Payment'));
const Blog = React.lazy(() => import('./pages/Blog'));
const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard'));

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <React.Suspense fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-400"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/remedies" element={<Remedies />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/ebooks" element={<EbookStore />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/admin/*" element={<AdminDashboard />} />
            </Routes>
          </React.Suspense>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

