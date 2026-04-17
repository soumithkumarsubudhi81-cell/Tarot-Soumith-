import React from 'react';
import { INITIAL_EBOOKS } from '../../constants';
import { Edit2, Trash2, Plus, BookOpen } from 'lucide-react';

export default function AdminEbooks() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-serif font-bold text-purple-100">Manage Ebooks</h1>
        <button className="glass-button flex items-center gap-2 text-sm">
          <Plus className="w-4 h-4" /> Add New Ebook
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INITIAL_EBOOKS.map((ebook) => (
          <div key={ebook.id} className="glass-card overflow-hidden border border-white/5 flex flex-col">
            <div className="aspect-[3/4] bg-purple-900/20 flex items-center justify-center p-8">
              <BookOpen className="w-16 h-16 text-amber-400/20" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-serif font-bold text-purple-100">{ebook.title}</h3>
                <span className="text-amber-400 font-bold">₹{ebook.price}</span>
              </div>
              <p className="text-xs text-purple-200/40 mb-6 line-clamp-2">{ebook.description}</p>
              <div className="flex items-center gap-3 mt-auto">
                <button className="flex-grow px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  <Edit2 className="w-3 h-3" /> Edit
                </button>
                <button className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
