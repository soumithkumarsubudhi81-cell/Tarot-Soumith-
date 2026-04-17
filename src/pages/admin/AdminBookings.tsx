import React from 'react';
import { Search, Filter, CheckCircle, Clock, XCircle, Eye, MessageCircle } from 'lucide-react';

export default function AdminBookings() {
  const bookings = [
    { id: 'BK001', name: 'Rahul Sharma', service: 'Tarot Reading', date: '2023-10-15', time: '14:00', status: 'Confirmed', amount: '₹999' },
    { id: 'BK002', name: 'Priya Patel', service: 'Numerology', date: '2023-10-15', time: '16:30', status: 'Pending', amount: '₹1499' },
    { id: 'BK003', name: 'Amit Kumar', service: 'Psychic Reading', date: '2023-10-16', time: '11:00', status: 'Confirmed', amount: '₹1299' },
    { id: 'BK004', name: 'Sneha Reddy', service: 'Vedic Numerology', date: '2023-10-16', time: '15:00', status: 'Cancelled', amount: '₹1999' },
    { id: 'BK005', name: 'Vikram Singh', service: 'Remedies', date: '2023-10-17', time: '10:00', status: 'Pending', amount: '₹799' },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <h1 className="text-3xl font-serif font-bold text-purple-100">Customer Bookings</h1>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-grow md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search bookings..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-purple-100 focus:outline-none focus:border-purple-500"
            />
          </div>
          <button className="p-2 rounded-xl bg-white/5 border border-white/10 text-purple-200">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="glass-card overflow-hidden border border-white/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-purple-200/40">Booking ID</th>
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-purple-200/40">Client</th>
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-purple-200/40">Service</th>
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-purple-200/40">Date & Time</th>
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-purple-200/40">Amount</th>
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-purple-200/40">Status</th>
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-purple-200/40 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-mono text-xs text-amber-400">{booking.id}</td>
                  <td className="p-4">
                    <p className="font-medium text-purple-100">{booking.name}</p>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-purple-200/80">{booking.service}</span>
                  </td>
                  <td className="p-4">
                    <p className="text-sm text-purple-100">{booking.date}</p>
                    <p className="text-xs text-purple-200/40">{booking.time}</p>
                  </td>
                  <td className="p-4">
                    <span className="font-bold text-purple-100">{booking.amount}</span>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      booking.status === 'Confirmed' ? 'bg-green-500/20 text-green-400' : 
                      booking.status === 'Pending' ? 'bg-amber-500/20 text-amber-400' : 
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {booking.status === 'Confirmed' && <CheckCircle className="w-3 h-3" />}
                      {booking.status === 'Pending' && <Clock className="w-3 h-3" />}
                      {booking.status === 'Cancelled' && <XCircle className="w-3 h-3" />}
                      {booking.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-white/5 rounded-lg text-purple-200 transition-all" title="View Details">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-[#25D366]/10 rounded-lg text-[#25D366] transition-all" title="Chat on WhatsApp">
                        <MessageCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
