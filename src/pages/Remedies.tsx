import React from 'react';
import { motion } from 'motion/react';
import { INITIAL_REMEDIES } from '../constants';
import { Heart, Briefcase, Coins, Activity, Sparkles } from 'lucide-react';

const iconMap: Record<string, any> = {
  Heart,
  Briefcase,
  Coins,
  Activity,
  Sparkles,
};

export default function Remedies() {
  const categories = [
    { id: 'all', name: 'All Remedies' },
    { id: 'love', name: 'Love & Relationships' },
    { id: 'career', name: 'Career & Success' },
    { id: 'finance', name: 'Wealth & Finance' },
    { id: 'health', name: 'Health & Vitality' },
  ];

  const [activeCategory, setActiveCategory] = React.useState('all');

  const filteredRemedies = activeCategory === 'all' 
    ? INITIAL_REMEDIES 
    : INITIAL_REMEDIES.filter(r => r.category === activeCategory);

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 gold-text"
          >
            Spiritual Remedies
          </motion.h1>
          <p className="text-purple-200/60 max-w-2xl mx-auto text-lg">
            Ancient rituals, mantras, and practices to harmonize your energy and overcome life's obstacles.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full border transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-gray-900 border-amber-400 font-bold'
                  : 'border-white/10 text-purple-200 hover:border-purple-400/50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredRemedies.map((remedy, index) => {
            const Icon = iconMap[remedy.icon] || Sparkles;
            return (
              <motion.div
                key={remedy.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 flex gap-6 items-start hover:mystical-glow transition-all"
              >
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-purple-600/20 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-amber-400" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400/60 mb-2 block">
                    {remedy.category}
                  </span>
                  <h3 className="text-2xl font-serif font-bold mb-3 text-purple-100">{remedy.title}</h3>
                  <p className="text-purple-200/60 leading-relaxed mb-6">
                    {remedy.description}
                  </p>
                  <a 
                    href="https://wa.me/918249257255" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-amber-400 font-medium flex items-center gap-2 transition-colors"
                  >
                    Get Detailed Remedy <Sparkles className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-20 p-8 rounded-2xl border border-amber-400/20 bg-amber-400/5 text-center">
          <p className="text-amber-400/80 text-sm italic">
            * Spiritual remedies are intended to complement your efforts and provide energetic support. 
            They are not a substitute for professional medical, legal, or financial advice.
          </p>
        </div>
      </div>
    </div>
  );
}
