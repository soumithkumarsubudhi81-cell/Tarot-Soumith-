import React from 'react';
import { INITIAL_REMEDIES } from '../../constants';
import { Edit2, Trash2, Plus, Sparkles } from 'lucide-react';

export default function AdminRemedies() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-serif font-bold text-purple-100">Manage Remedies</h1>
        <button className="glass-button flex items-center gap-2 text-sm">
          <Plus className="w-4 h-4" /> Add New Remedy
        </button>
      </div>

      <div className="space-y-4">
        {INITIAL_REMEDIES.map((remedy) => (
          <div key={remedy.id} className="glass-card p-6 border border-white/5 flex items-center gap-6">
            <div className="w-12 h-12 shrink-0 rounded-xl bg-purple-600/20 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-amber-400" />
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-serif font-bold text-purple-100">{remedy.title}</h3>
                <span className="px-2 py-0.5 rounded-full bg-white/5 text-[10px] font-bold uppercase tracking-wider text-purple-200/40 border border-white/5">
                  {remedy.category}
                </span>
              </div>
              <p className="text-xs text-purple-200/40 line-clamp-1">{remedy.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-white/5 rounded-lg text-purple-200 transition-all">
                <Edit2 className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-red-500/10 rounded-lg text-red-400 transition-all">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
