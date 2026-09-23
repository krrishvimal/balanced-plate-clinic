'use client';

import React, { useState } from 'react';
import { X, Calendar, Clock, ShieldCheck, CheckCircle2, CreditCard, Phone, MessageSquare } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function BookingModal({ isOpen, onClose, initialService }: BookingModalProps) {
  const [selectedOption, setSelectedOption] = useState<string>('One-on-One Audio Consultation');
  const [date, setDate] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [healthGoal, setHealthGoal] = useState<string>('Select Your Goal');
  
  const [isTestMode, setIsTestMode] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [bookingSuccess, setBookingSuccess] = useState<any>(null);

  if (!isOpen) return null;

  const handleRazorpayPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !date) {
      alert('Please fill in your name, phone number, and preferred date.');
      return;
    }

    setLoading(true);

    try {
      if (isTestMode) {
        setTimeout(() => {
          setLoading(false);
          setBookingSuccess({
            bookingId: 'BPN-' + Math.floor(100000 + Math.random() * 900000),
            option: selectedOption,
            patientName: fullName,
            phone: phone,
            email: email || 'N/A',
            date: date,
            paymentId: 'pay_test_' + Math.random().toString(36).substring(7),
            status: 'Confirmed (Test Mode)',
          });
        }, 1200);
        return;
      }

      // Real Razorpay Checkout Order Flow
      const res = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: 1,
          option: selectedOption,
          patientName: fullName,
        }),
      });

      const orderData = await res.json();
      if (!orderData.success) {
        throw new Error(orderData.message || 'Failed to create Razorpay order');
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_placeholder',
          amount: orderData.order.amount,
          currency: orderData.order.currency,
          name: 'Balanced Plate Nutrition Clinic',
          description: selectedOption,
          order_id: orderData.order.id,
          prefill: {
            name: fullName,
            email: email,
            contact: phone,
          },
          theme: {
            color: '#8C6D34',
          },
          handler: async function (response: any) {
            const verifyRes = await fetch('/api/razorpay/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyRes.json();
            setLoading(false);

            if (verifyData.success) {
              setBookingSuccess({
                bookingId: 'BPN-' + Math.floor(100000 + Math.random() * 900000),
                option: selectedOption,
                patientName: fullName,
                phone: phone,
                email: email,
                date: date,
                paymentId: response.razorpay_payment_id,
                status: 'Confirmed (Paid via Razorpay)',
              });
            } else {
              alert('Payment signature verification failed.');
            }
          },
        };

        const razorpayInstance = new (window as any).Razorpay(options);
        razorpayInstance.open();
      };

      document.body.appendChild(script);
    } catch (err: any) {
      console.error(err);
      setLoading(false);
      alert('Error initializing payment. Switching to demo test mode for preview.');
      setIsTestMode(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-[#FAF8F5] border border-[#EBE3D8] rounded-3xl shadow-2xl text-stone-900 overflow-hidden">
        
        {/* Header Bar matching site color theme */}
        <div className="bg-[#F5F0E8] px-6 py-5 border-b border-[#E8DFD5] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Calendar className="w-5 h-5 text-[#8C6D34]" />
            <h3 className="font-sans text-xl font-bold text-stone-900 tracking-tight">
              Book Your Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-stone-500 hover:text-stone-900 p-1.5 rounded-full hover:bg-[#EAE2D7] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {bookingSuccess ? (
          /* Receipt Screen */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-700 mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="font-sans text-2xl font-bold text-stone-900">
                Booking Confirmed!
              </h4>
              <p className="text-xs text-stone-600">
                Thank you, <span className="text-[#8C6D34] font-semibold">{bookingSuccess.patientName}</span>. Your appointment has been successfully scheduled.
              </p>
            </div>

            <div className="bg-white border border-[#EBE3D8] rounded-2xl p-6 text-left space-y-3 text-xs max-w-md mx-auto shadow-sm">
              <div className="flex justify-between border-b border-[#F3EFE9] pb-2">
                <span className="text-stone-500">Booking Reference:</span>
                <span className="font-mono text-[#8C6D34] font-bold">{bookingSuccess.bookingId}</span>
              </div>
              <div className="flex justify-between border-b border-[#F3EFE9] pb-2">
                <span className="text-stone-500">Selected Plan:</span>
                <span className="font-semibold text-stone-900">{bookingSuccess.option}</span>
              </div>
              <div className="flex justify-between border-b border-[#F3EFE9] pb-2">
                <span className="text-stone-500">Date:</span>
                <span className="font-semibold text-stone-900">{bookingSuccess.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Payment Status:</span>
                <span className="text-emerald-700 font-semibold">{bookingSuccess.status}</span>
              </div>
            </div>

            {/* Google Form Diet Assessment Card */}
            <div className="bg-[#F5F0E8] border border-[#E8DFD5] rounded-2xl p-5 text-center space-y-2.5 max-w-md mx-auto shadow-sm">
              <p className="text-xs font-bold text-[#8C6D34] uppercase tracking-wider">
                📋 Step 2: Complete Your Diet Assessment
              </p>
              <p className="text-xs text-stone-700 leading-relaxed">
                Please fill out your health history & diet preferences so Nutritionist Simran Gulshan can prepare your plan before your call.
              </p>
              <a
                href="https://docs.google.com/forms/d/1K03_NXHtmo-_8kl_iqrTuHU4BZMT9aU6qRyqt9P7Ewk/viewform"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-[#8C6D34] hover:bg-[#745928] text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md transition-all mt-1"
              >
                <span>Fill Diet Assessment Form ➔</span>
              </a>
            </div>

            <button
              onClick={() => {
                setBookingSuccess(null);
                onClose();
              }}
              className="bg-[#8C6D34] hover:bg-[#745928] text-white font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-md"
            >
              Done & Return to Website
            </button>
          </div>
        ) : (
          /* Form Input Screen matching site color theme */
          <form onSubmit={handleRazorpayPayment} className="p-6 space-y-5 max-h-[82vh] overflow-y-auto">
            
            {/* Step 1: SELECT CONSULTATION */}
            <div>
              <label className="block text-[11px] font-bold tracking-widest text-[#988467] uppercase mb-3">
                1. SELECT CONSULTATION
              </label>

              <div className="bg-white border-2 border-[#C8A870] rounded-2xl p-4 flex items-center space-x-4 cursor-pointer shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#F5F0E8] border border-[#DDD3C4] flex items-center justify-center text-[#8C6D34] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-stone-900 text-sm sm:text-base">
                    One-on-One Audio Consultation
                  </h4>
                  <p className="text-stone-600 text-xs mt-0.5 leading-snug">
                    30–45 min personalised audio consultation with dietitian
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: SELECT DATE */}
            <div>
              <label className="block text-[11px] font-bold tracking-widest text-[#988467] uppercase mb-2">
                2. SELECT DATE
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full bg-white border border-[#EBE3D8] rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-800 focus:border-[#C8A870] outline-none shadow-xs"
              />
            </div>

            {/* Divider Line */}
            <div className="border-t border-[#EBE3D8] my-2" />

            {/* Step 3: YOUR DETAILS */}
            <div className="space-y-3">
              <label className="block text-[11px] font-bold tracking-widest text-[#988467] uppercase">
                3. YOUR DETAILS
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-white border border-[#EBE3D8] rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:border-[#C8A870] outline-none shadow-xs"
                />

                <input
                  type="tel"
                  placeholder="Phone Number (+91) *"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-white border border-[#EBE3D8] rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:border-[#C8A870] outline-none shadow-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border border-[#EBE3D8] rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:border-[#C8A870] outline-none shadow-xs"
                />

                <select
                  value={healthGoal}
                  onChange={(e) => setHealthGoal(e.target.value)}
                  className="bg-white border border-[#EBE3D8] rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-800 focus:border-[#C8A870] outline-none appearance-none shadow-xs"
                >
                  <option value="Select Your Goal" disabled>Select Your Goal</option>
                  <option value="Weight Loss">Weight Loss</option>
                  <option value="Muscle Gain">Muscle Gain</option>
                  <option value="Diabetes Management">Diabetes Management</option>
                  <option value="IBS & Gut Health">IBS & Gut Health</option>
                  <option value="PCOS / PCOD">PCOS / PCOD</option>
                  <option value="Lifestyle Disorder">Lifestyle Disorder</option>
                </select>
              </div>
            </div>

            {/* Submit Button matching site warm gold theme */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#8C6D34] hover:bg-[#745928] text-white font-bold text-xs sm:text-sm py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 active:scale-95"
            >
              {loading ? (
                <span>Processing Order...</span>
              ) : (
                <>
                  <ShieldCheck className="w-5 h-5 text-white" />
                  <span>Proceed to Confirm & Pay</span>
                </>
              )}
            </button>

          </form>
        )}

      </div>
    </div>
  );
}
