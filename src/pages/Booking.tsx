import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { INITIAL_SERVICES } from '../constants';
import { Calendar, User, MessageCircle, HelpCircle, Phone, Sparkles } from 'lucide-react';

interface BookingFormData {
  name: string;
  dob: string;
  question: string;
  whatsappNumber: string;
  serviceId: string;
}

export default function Booking() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialServiceId = searchParams.get('service') || INITIAL_SERVICES[0].id;

  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>({
    defaultValues: {
      serviceId: initialServiceId
    }
  });

  const onSubmit = (data: BookingFormData) => {
    console.log('Booking Data:', data);
    // In a real app, we would save to Firestore here
    // For now, we'll navigate to payment
    navigate('/payment', { state: { booking: data } });
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold mb-4 gold-text">Book Your Session</h1>
          <p className="text-purple-200/60">Fill in the details below to schedule your spiritual consultation.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 md:p-12"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-amber-400" /> Full Name
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-purple-100 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-400" /> Date of Birth
                </label>
                <input
                  type="date"
                  {...register('dob', { required: 'Date of birth is required' })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-purple-100 focus:outline-none focus:border-purple-500 transition-colors"
                />
                {errors.dob && <p className="text-red-400 text-xs mt-1">{errors.dob.message}</p>}
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" /> Select Service
              </label>
              <select
                {...register('serviceId', { required: 'Please select a service' })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-purple-100 focus:outline-none focus:border-purple-500 transition-colors appearance-none"
              >
                {INITIAL_SERVICES.map(service => (
                  <option key={service.id} value={service.id} className="bg-[#0a051a]">
                    {service.title} - ₹{service.price}
                  </option>
                ))}
              </select>
            </div>

            {/* WhatsApp Number */}
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2 flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" /> WhatsApp Number
              </label>
              <input
                {...register('whatsappNumber', { 
                  required: 'WhatsApp number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Please enter a valid 10-digit number'
                  }
                })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-purple-100 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="10-digit mobile number"
              />
              {errors.whatsappNumber && <p className="text-red-400 text-xs mt-1">{errors.whatsappNumber.message}</p>}
            </div>

            {/* Question */}
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400" /> Your Question/Concern
              </label>
              <textarea
                {...register('question', { required: 'Please enter your question' })}
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-purple-100 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                placeholder="What would you like to know or discuss?"
              ></textarea>
              {errors.question && <p className="text-red-400 text-xs mt-1">{errors.question.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full glass-button py-4 text-lg font-bold flex items-center justify-center gap-3"
            >
              Proceed to Payment
            </button>
          </form>
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-purple-200/40 text-sm flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Need help? <a href="https://wa.me/918249257255" className="text-amber-400 hover:underline">Chat with us on WhatsApp</a>
          </p>
        </div>
      </div>
    </div>
  );
}
