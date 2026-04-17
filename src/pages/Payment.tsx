import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { QrCode, Copy, CheckCircle2, MessageCircle, ArrowLeft } from 'lucide-react';
import { INITIAL_SERVICES } from '../constants';

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state?.booking;

  if (!booking) {
    return (
      <div className="py-20 px-4 text-center">
        <p className="text-purple-200 mb-6">No booking information found.</p>
        <button onClick={() => navigate('/booking')} className="glass-button">Go to Booking</button>
      </div>
    );
  }

  const service = INITIAL_SERVICES.find(s => s.id === booking.serviceId);
  const upiId = "soumith12@fam";

  const copyUpi = () => {
    navigator.clipboard.writeText(upiId);
    alert('UPI ID copied to clipboard!');
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-purple-300 hover:text-amber-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Booking
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold mb-4 gold-text">Complete Payment</h1>
          <p className="text-purple-200/60">Scan the QR code or use the UPI ID below to pay.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-8 md:p-12 text-center"
        >
          {/* Order Summary */}
          <div className="mb-10 p-6 rounded-xl bg-white/5 border border-white/10 text-left">
            <h3 className="text-sm font-bold text-purple-300 uppercase tracking-widest mb-4">Order Summary</h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-purple-100">{service?.title}</span>
              <span className="font-bold text-amber-400">₹{service?.price}</span>
            </div>
            <div className="text-xs text-purple-200/40">For {booking.name}</div>
          </div>

          {/* QR Code Placeholder */}
          <div className="mb-10 inline-block p-4 bg-white rounded-2xl">
            <div className="w-48 h-48 bg-gray-200 flex items-center justify-center text-gray-400 relative">
              <QrCode className="w-32 h-32" />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200/80">
                <span className="text-gray-600 font-bold text-sm text-center px-4">QR Code Placeholder<br/>(Upload in Admin)</span>
              </div>
            </div>
          </div>

          {/* UPI ID */}
          <div className="mb-10">
            <p className="text-sm text-purple-200/60 mb-2 uppercase tracking-widest">UPI ID</p>
            <div className="flex items-center justify-center gap-3">
              <code className="bg-white/10 px-4 py-2 rounded-lg text-lg font-mono text-amber-400">
                {upiId}
              </code>
              <button 
                onClick={copyUpi}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-purple-200 transition-all"
                title="Copy UPI ID"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Instructions */}
          <div className="space-y-6 text-left border-t border-white/10 pt-10">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center shrink-0 text-amber-400 font-bold">1</div>
              <p className="text-purple-200/80">Open any UPI app (GPay, PhonePe, Paytm) and pay <span className="text-amber-400 font-bold">₹{service?.price}</span>.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center shrink-0 text-amber-400 font-bold">2</div>
              <p className="text-purple-200/80">Take a screenshot of the successful payment confirmation.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center shrink-0 text-amber-400 font-bold">3</div>
              <p className="text-purple-200/80">Send the screenshot on WhatsApp to confirm your booking.</p>
            </div>
          </div>

          <a 
            href={`https://wa.me/918249257255?text=Hi Soumith, I have paid ₹${service?.price} for ${service?.title}. Here is my screenshot.`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 w-full glass-button py-4 text-lg font-bold flex items-center justify-center gap-3 bg-[#25D366]/20 border-[#25D366]/40 hover:bg-[#25D366]/40"
          >
            <MessageCircle className="w-6 h-6" />
            Confirm on WhatsApp
          </a>

          <p className="mt-6 text-xs text-purple-200/40">
            Your reading, class access, or ebook will be delivered within 24 hours of confirmation.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
