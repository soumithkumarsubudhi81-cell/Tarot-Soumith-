import React from 'react';
import { motion } from 'motion/react';
import { Star, Moon, Sun, Sparkles, Heart, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 gold-text">My Spiritual Journey</h1>
            <p className="text-lg text-purple-200/70 mb-6 leading-relaxed">
              I am Soumith, a dedicated Tarot Reader, Numerologist, and Psychic Guide. My mission is to illuminate 
              the paths of those seeking clarity and purpose in an often confusing world.
            </p>
            <p className="text-lg text-purple-200/70 mb-8 leading-relaxed">
              For over 10 years, I have been studying the ancient mystical arts, bridging the gap between 
              traditional Vedic wisdom and modern psychological insights. My approach is compassionate, 
              non-judgmental, and deeply intuitive.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-4 text-center">
                <p className="text-3xl font-bold text-amber-400">5000+</p>
                <p className="text-xs text-purple-200/40 uppercase tracking-widest">Readings Done</p>
              </div>
              <div className="glass-card p-4 text-center">
                <p className="text-3xl font-bold text-amber-400">1000+</p>
                <p className="text-xs text-purple-200/40 uppercase tracking-widest">Students Taught</p>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-card p-4">
              <img 
                src="https://picsum.photos/seed/guide/800/1000" 
                alt="Soumith" 
                className="w-full h-full object-cover rounded-2xl opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-32">
          <h2 className="text-3xl font-serif font-bold text-center mb-16 gold-text">My Core Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Confidentiality', desc: 'Your secrets and personal details are safe with me. Every session is strictly private.' },
              { icon: Heart, title: 'Empathy', desc: 'I listen with an open heart, understanding your pain and aspirations without judgment.' },
              { icon: Sparkles, title: 'Authenticity', desc: 'I provide honest guidance based on what the cards and numbers truly reveal.' }
            ].map((value, i) => (
              <div key={i} className="glass-card p-8 text-center group hover:mystical-glow transition-all">
                <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-amber-400" />
                </div>
                <h4 className="text-xl font-bold text-purple-100 mb-4">{value.title}</h4>
                <p className="text-purple-200/60 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Section */}
        <div className="glass-card p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Moon className="w-32 h-32 text-amber-400" />
          </div>
          <h2 className="text-3xl font-serif font-bold mb-12 gold-text">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {[
              'Vedic & Western Numerology',
              'Advanced Tarot Symbology',
              'Psychic Intuition & Mediumship',
              'Aura & Chakra Balancing',
              'Spiritual Rituals & Remedies',
              'Life Path & Career Mapping',
              'Relationship Compatibility',
              'Manifestation Techniques'
            ].map((skill, i) => (
              <div key={i} className="flex items-center gap-4 border-b border-white/5 pb-4">
                <Star className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-purple-200/80 text-lg">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
