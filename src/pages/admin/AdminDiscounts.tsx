import React from 'react';
import { Plus, Tag, Trash2, Edit2, Calendar } from 'lucide-react';

export default function AdminDiscounts() {
  const discounts = [
    { id: '1', code: 'DIVINE20', amount: '20%', type: 'Percentage', status: 'Active', expiry: '2023-12-31' },
    { id: '2', code: 'FESTIVE500', amount: '₹500', type: 'Fixed', status: 'Active', expiry: '2023-11-15' },
    { id: '3', code: 'WELCOME10', amount: '10%', type: 'Percentage', status: 'Inactive', expiry: '2023-09-01' },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-serif font-bold text-purple-100">Discount Offers</h1>
        <button className="glass-button flex items-center gap-2 text-sm">
          <Plus className="w-4 h-4" /> Create Offer
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="glass-card p-6 border-l-4 border-amber-400">
          <p className="text-purple-200/40 text-xs uppercase tracking-widest mb-1">Active Coupons</p>
          <p className="text-2xl font-bold text-purple-100">02</p>
        </div>
        <div className="glass-card p-6 border-l-4 border-purple-400">
          <p className="text-purple-200/40 text-xs uppercase tracking-widest mb-1">Total Redeemed</p>
          <p className="text-2xl font-bold text-purple-100">145</p>
        </div>
        <div className="glass-card p-6 border-l-4 border-green-400">
          <p className="text-purple-200/40 text-xs uppercase tracking-widest mb-1">Revenue Saved</p>
          <p className="text-2xl font-bold text-purple-100">₹12,400</p>
        </div>
      </div>

      <div className="glass-card overflow-hidden border border-white/5">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/5 border-b border-white/10">
              <th className="p-4 text-xs font-bold uppercase tracking-widest text-purple-200/40">Coupon Code</th>
              <th className="p-4 text-xs font-bold uppercase tracking-widest text-purple-200/40">Value</th>
              <th className="p-4 text-xs font-bold uppercase tracking-widest text-purple-200/40">Expiry</th>
              <th className="p-4 text-xs font-bold uppercase tracking-widest text-purple-200/40">Status</th>
              <th className="p-4 text-xs font-bold uppercase tracking-widest text-purple-200/40 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {discounts.map((discount) => (
              <tr key={discount.id} className="hover:bg-white/5 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <Tag className="w-4 h-4 text-amber-400" />
                    <span className="font-mono font-bold text-purple-100">{discount.code}</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="text-purple-100">{discount.amount}</span>
                  <span className="text-[10px] text-purple-200/40 ml-2 uppercase">{discount.type}</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2 text-sm text-purple-200/60">
                    <Calendar className="w-3 h-3" />
                    {discount.expiry}
                  </div>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    discount.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {discount.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 hover:bg-white/5 rounded-lg text-purple-200 transition-all">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-red-500/10 rounded-lg text-red-400 transition-all">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
