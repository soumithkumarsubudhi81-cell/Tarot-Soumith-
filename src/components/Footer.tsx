import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050210] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-8 h-8 text-amber-400" />
              <span className="text-2xl font-serif font-bold gold-text">Soumith Divine Guidance</span>
            </Link>
            <p className="text-purple-200/60 max-w-md leading-relaxed">
              Helping you navigate life's journey through the ancient wisdom of Tarot, Numerology, and Psychic guidance. 
              Find clarity, purpose, and spiritual healing with Soumith.
            </p>
            <div className="flex space-x-4 mt-8">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-purple-600/20 text-purple-200 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-purple-600/20 text-purple-200 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-purple-600/20 text-purple-200 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-amber-400 font-serif font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-purple-200/60 hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-purple-200/60 hover:text-amber-400 transition-colors">Services</Link></li>
              <li><Link to="/classes" className="text-purple-200/60 hover:text-amber-400 transition-colors">Spiritual Classes</Link></li>
              <li><Link to="/ebooks" className="text-purple-200/60 hover:text-amber-400 transition-colors">Ebook Store</Link></li>
              <li><Link to="/blog" className="text-purple-200/60 hover:text-amber-400 transition-colors">Blog & Tips</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-amber-400 font-serif font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-purple-200/60">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+91 8249257255</span>
              </li>
              <li className="flex items-center space-x-3 text-purple-200/60">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>contact@soumithdivine.com</span>
              </li>
              <li className="flex items-center space-x-3 text-purple-200/60">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span>Available for Online Consultations</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-purple-200/40">
          <p>© {new Date().getFullYear()} Soumith Divine Guidance. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-purple-200 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-purple-200 transition-colors">Terms of Service</Link>
            <Link to="/admin" className="hover:text-purple-200 transition-colors">Admin Panel</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
