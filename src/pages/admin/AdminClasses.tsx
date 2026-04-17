import React from 'react';
import { INITIAL_COURSES } from '../../constants';
import { Edit2, Trash2, Plus, GraduationCap } from 'lucide-react';

export default function AdminClasses() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-serif font-bold text-purple-100">Manage Classes</h1>
        <button className="glass-button flex items-center gap-2 text-sm">
          <Plus className="w-4 h-4" /> Add New Course
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {INITIAL_COURSES.map((course) => (
          <div key={course.id} className="glass-card p-6 border border-white/5 flex gap-6">
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-purple-600/20 flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-amber-400" />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-serif font-bold text-purple-100">{course.title}</h3>
                <span className="text-amber-400 font-bold">₹{course.price}</span>
              </div>
              <p className="text-xs text-purple-200/40 mb-6 line-clamp-2">{course.description}</p>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium hover:bg-white/10 transition-all flex items-center gap-2">
                  <Edit2 className="w-3 h-3" /> Edit
                </button>
                <button className="px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-xs font-medium text-red-400 hover:bg-red-500/20 transition-all flex items-center gap-2">
                  <Trash2 className="w-3 h-3" /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
