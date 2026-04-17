import React from 'react';
import { INITIAL_TESTIMONIALS } from '../../constants';
import { Star, Edit2, Trash2, Plus, User } from 'lucide-react';

export default function AdminTestimonials() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-serif font-bold text-purple-100">Manage Testimonials</h1>
        <button className="glass-button flex items-center gap-2 text-sm">
          <Plus className="w-4 h-4" /> Add Testimonial
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {INITIAL_TESTIMONIALS.map((testimonial) => (
          <div key={testimonial.id} className="glass-card p-6 border border-white/5 flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
                <User className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-purple-100">{testimonial.name}</h3>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-purple-200/20'}`} 
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <p className="text-sm text-purple-200/60 mb-6 italic flex-grow">
              "{testimonial.text}"
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <button className="flex-grow px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Edit2 className="w-3 h-3" /> Edit
              </button>
              <button className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
