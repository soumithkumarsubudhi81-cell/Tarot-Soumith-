import React from 'react';
import { motion } from 'motion/react';
import { INITIAL_EBOOKS } from '../constants';
import { BookOpen, Download, ShoppingCart } from 'lucide-react';

export default function EbookStore() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 gold-text"
          >
            Digital Wisdom Library
          </motion.h1>
          <p className="text-purple-200/60 max-w-2xl mx-auto text-lg">
            Download our curated guides and start your spiritual learning journey at your own pace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {INITIAL_EBOOKS.map((ebook, index) => (
            <motion.div
              key={ebook.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden flex flex-col group"
            >
              <div className="aspect-[3/4] bg-purple-900/40 relative overflow-hidden flex items-center justify-center p-12">
                <BookOpen className="w-24 h-24 text-amber-400/20 absolute group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10 text-center">
                  <BookOpen className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                  <h4 className="text-lg font-serif font-bold text-purple-100">{ebook.title}</h4>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a051a] to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-serif font-bold mb-3 text-purple-100">{ebook.title}</h3>
                <p className="text-sm text-purple-200/60 mb-6 flex-grow line-clamp-3">
                  {ebook.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xl font-bold text-amber-400">₹{ebook.price}</span>
                  <button className="glass-button px-4 py-2 text-sm flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Buy Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ebook Features */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Download, title: 'Instant Access', desc: 'Get your download link immediately after payment confirmation.' },
            { icon: BookOpen, title: 'Expert Content', desc: 'Curated knowledge from years of professional practice.' },
            { icon: ShoppingCart, title: 'Secure Payment', desc: 'Safe and easy payment through UPI or WhatsApp.' }
          ].map((feature, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-amber-400" />
              </div>
              <h4 className="text-xl font-bold text-purple-100 mb-2">{feature.title}</h4>
              <p className="text-purple-200/60">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
