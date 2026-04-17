import React from 'react';
import { Save, Upload, Trash2, RefreshCw } from 'lucide-react';

export default function AdminSettings() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-serif font-bold text-purple-100">Website Settings</h1>
        <button className="glass-button flex items-center gap-2">
          <Save className="w-4 h-4" /> Save All Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* General Settings */}
        <div className="glass-card p-8 space-y-6">
          <h3 className="text-xl font-serif font-bold text-purple-100 mb-4">General Information</h3>
          
          <div>
            <label className="block text-sm font-medium text-purple-200/60 mb-2">Website Name</label>
            <input 
              type="text" 
              defaultValue="Soumith Divine Guidance"
              className="w-full bg-[#0a051a] border border-white/10 rounded-xl px-4 py-3 text-purple-100 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-200/60 mb-2">Website Logo</label>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Upload className="w-6 h-6 text-purple-400" />
              </div>
              <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition-all">
                Change Logo
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-200/60 mb-2">WhatsApp Number</label>
            <input 
              type="text" 
              defaultValue="+91 8249257255"
              className="w-full bg-[#0a051a] border border-white/10 rounded-xl px-4 py-3 text-purple-100 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        {/* Website Content Text */}
        <div className="glass-card p-8 space-y-6">
          <h3 className="text-xl font-serif font-bold text-purple-100 mb-4">Website Text Content</h3>
          
          <div>
            <label className="block text-sm font-medium text-purple-200/60 mb-2">Hero Headline</label>
            <textarea 
              rows={2}
              defaultValue="Unlock Your Destiny with Divine Guidance"
              className="w-full bg-[#0a051a] border border-white/10 rounded-xl px-4 py-3 text-purple-100 focus:outline-none focus:border-purple-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-200/60 mb-2">Hero Sub-headline</label>
            <textarea 
              rows={3}
              defaultValue="Soumith helps you find clarity in love, career, and life through the ancient wisdom of Tarot, Numerology, and intuitive Psychic readings."
              className="w-full bg-[#0a051a] border border-white/10 rounded-xl px-4 py-3 text-purple-100 focus:outline-none focus:border-purple-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-200/60 mb-2">About Section Text</label>
            <textarea 
              rows={4}
              defaultValue="With over a decade of experience in the mystical arts, Soumith has helped thousands of individuals find their true calling and overcome life's most difficult hurdles."
              className="w-full bg-[#0a051a] border border-white/10 rounded-xl px-4 py-3 text-purple-100 focus:outline-none focus:border-purple-500 resize-none"
            />
          </div>
        </div>

        {/* Payment Settings */}
        <div className="glass-card p-8 space-y-6">
          <h3 className="text-xl font-serif font-bold text-purple-100 mb-4">Payment & UPI</h3>
          
          <div>
            <label className="block text-sm font-medium text-purple-200/60 mb-2">UPI ID</label>
            <input 
              type="text" 
              defaultValue="soumith12@fam"
              className="w-full bg-[#0a051a] border border-white/10 rounded-xl px-4 py-3 text-purple-100 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-200/60 mb-2">Payment QR Code</label>
            <div className="aspect-square w-32 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
              <Upload className="w-8 h-8 text-purple-400" />
            </div>
            <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition-all">
              Upload New QR
            </button>
          </div>
        </div>

        {/* Automation & Tools */}
        <div className="glass-card p-8 lg:col-span-2">
          <h3 className="text-xl font-serif font-bold text-purple-100 mb-6">Automation & Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-amber-400/30 transition-all">
              <RefreshCw className="w-8 h-8 text-amber-400 mb-4" />
              <h4 className="font-bold text-purple-100 mb-2">Auto-Generate Prices</h4>
              <p className="text-xs text-purple-200/40 mb-4">Automatically update all service prices based on current market trends.</p>
              <button className="text-sm text-amber-400 font-bold hover:underline">Run Now</button>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-400/30 transition-all">
              <Trash2 className="w-8 h-8 text-red-400 mb-4" />
              <h4 className="font-bold text-purple-100 mb-2">Clear Cache</h4>
              <p className="text-xs text-purple-200/40 mb-4">Clear all temporary website data and refresh content for all users.</p>
              <button className="text-sm text-red-400 font-bold hover:underline">Clear Now</button>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-400/30 transition-all">
              <Save className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="font-bold text-purple-100 mb-2">Backup Data</h4>
              <p className="text-xs text-purple-200/40 mb-4">Download a full backup of all bookings, services, and settings.</p>
              <button className="text-sm text-blue-400 font-bold hover:underline">Download</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
