import React from 'react';
import { motion } from 'motion/react';
import { INITIAL_COURSES } from '../constants';
import { GraduationCap, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function Classes() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 gold-text"
          >
            Spiritual Training Programs
          </motion.h1>
          <p className="text-purple-200/60 max-w-2xl mx-auto text-lg">
            Master the mystical arts with our comprehensive certification courses. 
            Learn directly from Soumith and start your professional spiritual journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {INITIAL_COURSES.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden flex flex-col md:flex-row hover:mystical-glow transition-all"
            >
              <div className="md:w-1/3 bg-purple-900/40 p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-white/10">
                <GraduationCap className="w-16 h-16 text-amber-400 mb-4" />
                <p className="text-xs font-bold text-purple-300 uppercase tracking-widest mb-2">Course Fee</p>
                <p className="text-3xl font-bold text-amber-400">₹{course.price}</p>
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-serif font-bold mb-4 text-purple-100">{course.title}</h3>
                <p className="text-purple-200/60 mb-6 leading-relaxed">
                  {course.description}
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-purple-200/80">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span>Live Interactive Sessions</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-purple-200/80">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span>Comprehensive Study Material</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-purple-200/80">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span>Certification upon Completion</span>
                  </li>
                </ul>
                <a 
                  href={course.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button w-full flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  Join Classes on WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Learn With Us */}
        <div className="mt-32">
          <h2 className="text-3xl font-serif font-bold text-center mb-16 gold-text">Why Learn With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Expert Guidance', desc: 'Learn from Soumith\'s 10+ years of practical experience in mystical arts.' },
              { title: 'Practical Approach', desc: 'We focus on real-world readings and case studies, not just theory.' },
              { title: 'Lifetime Support', desc: 'Get ongoing guidance even after you complete your certification.' }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 text-center">
                <h4 className="text-xl font-bold text-purple-100 mb-4">{item.title}</h4>
                <p className="text-purple-200/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
