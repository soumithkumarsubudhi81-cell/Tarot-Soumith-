import React from 'react';
import { motion } from 'motion/react';
import { INITIAL_SERVICES } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Services() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 gold-text"
          >
            Sacred Consultations
          </motion.h1>
          <p className="text-purple-200/60 max-w-2xl mx-auto text-lg">
            Explore our range of spiritual services designed to bring clarity, healing, and direction to your life's path.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INITIAL_SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 flex flex-col hover:mystical-glow transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-purple-600/20 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <Sparkles className="w-10 h-10 text-amber-400" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-purple-100">{service.title}</h3>
              <p className="text-purple-200/60 mb-8 flex-grow leading-relaxed">
                {service.description}
              </p>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs text-purple-200/40 uppercase tracking-wider mb-1">Consultation Fee</p>
                  <p className="text-2xl font-bold text-amber-400">₹{service.price}</p>
                </div>
                <Link 
                  to={`/booking?service=${service.id}`} 
                  className="glass-button px-6 py-2 text-sm flex items-center gap-2"
                >
                  Book <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Consultation CTA */}
        <div className="mt-20 glass-card p-12 text-center bg-gradient-to-br from-purple-900/20 to-amber-900/10">
          <h2 className="text-3xl font-serif font-bold mb-6 text-purple-100">Need a Custom Reading?</h2>
          <p className="text-purple-200/70 mb-8 max-w-2xl mx-auto">
            If you have a complex situation that doesn't fit into these categories, we offer personalized 
            deep-dive sessions to address your specific needs.
          </p>
          <a 
            href="https://wa.me/918249257255" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-button inline-flex items-center gap-3"
          >
            Discuss on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
