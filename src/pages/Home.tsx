import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, Star, Moon, Sun, ArrowRight, MessageCircle } from 'lucide-react';
import { INITIAL_SERVICES, INITIAL_TESTIMONIALS } from '../constants';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
              Trusted Spiritual Guide & Psychic
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              Unlock Your Destiny with <br />
              <span className="gold-text">Divine Guidance</span>
            </h1>
            <p className="text-lg md:text-xl text-purple-200/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Soumith helps you find clarity in love, career, and life through the ancient wisdom of 
              Tarot, Numerology, and intuitive Psychic readings.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/booking" className="glass-button px-10 py-4 text-lg w-full sm:w-auto">
                Book a Consultation
              </Link>
              <Link to="/services" className="px-10 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all text-lg w-full sm:w-auto">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-amber-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 gold-text">Our Sacred Services</h2>
            <p className="text-purple-200/60">Choose the path that resonates with your soul's questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INITIAL_SERVICES.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 hover:mystical-glow transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-purple-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-purple-100">{service.title}</h3>
                <p className="text-purple-200/60 mb-6 line-clamp-3">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-amber-400">₹{service.price}</span>
                  <Link to="/booking" className="text-purple-300 hover:text-amber-400 flex items-center gap-2 transition-colors">
                    Book Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden glass-card p-4">
              <img 
                src="https://picsum.photos/seed/spiritual/800/800" 
                alt="Soumith Spiritual Guide" 
                className="w-full h-full object-cover rounded-2xl opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 floating">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center text-gray-900 font-bold">
                  10+
                </div>
                <div>
                  <p className="text-sm font-bold text-purple-100">Years of</p>
                  <p className="text-xs text-purple-200/60">Experience</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 gold-text">Meet Your Guide, Soumith</h2>
            <p className="text-lg text-purple-200/70 mb-6 leading-relaxed">
              With over a decade of experience in the mystical arts, Soumith has helped thousands of individuals 
              find their true calling and overcome life's most difficult hurdles.
            </p>
            <p className="text-lg text-purple-200/70 mb-8 leading-relaxed">
              My journey began with a deep curiosity about the unseen energies that shape our lives. Today, I combine 
              Vedic wisdom with modern intuitive practices to provide readings that are both profound and practical.
            </p>
            <Link to="/about" className="glass-button inline-block">
              Read My Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 gold-text">What Seekers Say</h2>
            <p className="text-purple-200/60">Real stories from people who found clarity through our guidance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INITIAL_TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 hover:mystical-glow transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-purple-200/20'}`} />
                  ))}
                </div>
                <p className="text-purple-200/70 mb-6 italic">"{testimonial.text}"</p>
                <p className="font-bold text-purple-100">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto glass-card p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-purple-600/10 pointer-events-none"></div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 gold-text">Ready to Find Your Answers?</h2>
          <p className="text-xl text-purple-200/70 mb-10 max-w-2xl mx-auto">
            Don't let uncertainty hold you back. Book a session today and start your journey towards clarity and peace.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/booking" className="glass-button px-12 py-4 text-lg w-full sm:w-auto">
              Book Appointment
            </Link>
            <a 
              href="https://wa.me/918249257255" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-200 hover:text-amber-400 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
