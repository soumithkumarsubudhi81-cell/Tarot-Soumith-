import React from 'react';
import { TrendingUp, Users, Calendar, DollarSign } from 'lucide-react';

export default function AdminOverview() {
  const stats = [
    { name: 'Total Revenue', value: '₹45,200', icon: DollarSign, color: 'text-green-400' },
    { name: 'Active Bookings', value: '12', icon: Calendar, color: 'text-amber-400' },
    { name: 'Total Clients', value: '128', icon: Users, color: 'text-blue-400' },
    { name: 'Growth', value: '+15%', icon: TrendingUp, color: 'text-purple-400' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-serif font-bold mb-8 text-purple-100">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="glass-card p-6 border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <p className="text-purple-200/40 text-sm mb-1">{stat.name}</p>
              <p className="text-2xl font-bold text-purple-100">{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Bookings */}
        <div className="glass-card p-8">
          <h3 className="text-xl font-serif font-bold mb-6 text-purple-100">Recent Bookings</h3>
          <div className="space-y-4">
            {[
              { name: 'Rahul Sharma', service: 'Tarot Reading', date: 'Today, 2:00 PM', status: 'Confirmed' },
              { name: 'Priya Patel', service: 'Numerology', date: 'Today, 4:30 PM', status: 'Pending' },
              { name: 'Amit Kumar', service: 'Psychic Reading', date: 'Tomorrow, 11:00 AM', status: 'Confirmed' },
            ].map((booking, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                <div>
                  <p className="font-medium text-purple-100">{booking.name}</p>
                  <p className="text-xs text-purple-200/40">{booking.service} • {booking.date}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  booking.status === 'Confirmed' ? 'bg-green-500/20 text-green-400' : 'bg-amber-500/20 text-amber-400'
                }`}>
                  {booking.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="glass-card p-8">
          <h3 className="text-xl font-serif font-bold mb-6 text-purple-100">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-100 hover:bg-purple-600/30 transition-all text-sm font-medium">
              Add New Service
            </button>
            <button className="p-4 rounded-xl bg-amber-600/20 border border-amber-500/30 text-amber-100 hover:bg-amber-600/30 transition-all text-sm font-medium">
              Create Discount
            </button>
            <button className="p-4 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-100 hover:bg-blue-600/30 transition-all text-sm font-medium">
              View All Bookings
            </button>
            <button className="p-4 rounded-xl bg-green-600/20 border border-green-500/30 text-green-100 hover:bg-green-600/30 transition-all text-sm font-medium">
              Update Prices
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
