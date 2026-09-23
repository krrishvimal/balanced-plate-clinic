'use client';

import React from 'react';
import { Clock, CheckCircle2, Leaf, MessageCircle, ShieldCheck, Sparkles, PhoneCall, HeartPulse, Utensils, Award } from 'lucide-react';

interface ConsultationProps {
  onOpenBooking: (optionType?: string) => void;
}

export default function Consultation({ onOpenBooking }: ConsultationProps) {
  return (
    <section id="consultation" className="bg-gradient-to-b from-[#F7F4EE] via-[#FAF8F5] to-[#F5F0E8]/70 text-[#171717] pt-8 sm:pt-10 pb-14 lg:pb-20 border-t border-[#EBE3D8] relative overflow-hidden">
      
      {/* Decorative Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C8A870]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#5C7A57]/10 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center space-x-2 bg-[#F3ECE0] border border-[#E4D9C7] text-[#8C6D34] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#8C6D34]" />
            <span>EXPERT 1-ON-1 NUTRITION GUIDANCE</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Personalised Guidance for Your Unique Health Goals
          </h2>
          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Direct audio consultation with <span className="font-semibold text-stone-900">Nutritionist Simran Gulshan</span> to diagnose root causes and structure a sustainable home-food diet plan.
          </p>

          {/* Accent Line with Leaf Ornament */}
          <div className="flex items-center justify-center space-x-2 pt-2">
            <div className="h-[1px] w-12 bg-[#D1C7B7]" />
            <Leaf className="w-4 h-4 text-[#5C7A57] transform -rotate-45" />
            <div className="h-[1px] w-12 bg-[#D1C7B7]" />
          </div>
        </div>

        {/* Ultra-Appealing Featured Consultation Card */}
        <div
          onClick={() => onOpenBooking('1-on-1 Personalised Consultation')}
          className="bg-white/95 backdrop-blur-md border-2 border-[#C8A870] rounded-3xl pt-5 sm:pt-6 pb-6 sm:pb-10 px-5 sm:px-10 lg:px-12 shadow-2xl shadow-[#8C6D34]/10 hover:shadow-2xl hover:border-[#B38F52] transition-all duration-300 cursor-pointer space-y-6 max-w-4xl mx-auto group relative overflow-hidden"
        >
          {/* Subtle Top Luxury Ribbon */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#8C6D34] via-[#C8A870] to-[#5C7A57]" />

          {/* Top Pill Badges Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F0EADF] pb-4 pt-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center space-x-2 bg-[#F6F1E8] text-[#8C6D34] px-4 py-1.5 rounded-full text-xs font-bold border border-[#EADBCE]">
                <Clock className="w-4 h-4 text-[#8C6D34]" />
                <span>30 – 45 Min Private Audio Session</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-[#EEF4ED] text-[#4A6745] px-4 py-1.5 rounded-full text-xs font-bold border border-[#D5E3D2]">
                <MessageCircle className="w-4 h-4 text-[#5C7A57]" />
                <span>WhatsApp Follow-up Included</span>
              </div>
            </div>

            <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>100% Customised Plan</span>
            </div>
          </div>

          {/* Main Content Layout: Headline + Description + Feature Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (7 cols): Details & Description */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#8C6D34] tracking-wider uppercase">All-Inclusive Guidance</span>
                <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-stone-900 group-hover:text-[#8C6D34] transition-colors leading-tight">
                  1-on-1 Consultation + Full Diet Chart
                </h3>
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                A comprehensive 30–45 min private audio consultation to evaluate your medical background, lifestyle, and dietary goals—<strong>including your personalized home-cooked diet chart with no extra charges or hidden fees</strong>.
              </p>

              {/* 4 Feature Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center space-x-3 bg-[#FAF7F2] border border-[#EBE3D8] p-3 rounded-2xl group-hover:border-[#D9C4A5] transition-colors">
                  <div className="p-2 bg-[#F3ECE0] rounded-xl text-[#8C6D34]">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Home-Cooked Foods</h4>
                    <p className="text-[11px] text-stone-500">No strict diets or starving</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-[#FAF7F2] border border-[#EBE3D8] p-3 rounded-2xl group-hover:border-[#D9C4A5] transition-colors">
                  <div className="p-2 bg-[#F3ECE0] rounded-xl text-[#8C6D34]">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">1-on-1 Audio Call</h4>
                    <p className="text-[11px] text-stone-500">Convenient phone guidance</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-[#FAF7F2] border border-[#EBE3D8] p-3 rounded-2xl group-hover:border-[#D9C4A5] transition-colors">
                  <div className="p-2 bg-[#F3ECE0] rounded-xl text-[#8C6D34]">
                    <HeartPulse className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Root-Cause Focus</h4>
                    <p className="text-[11px] text-stone-500">PCOS, Thyroid, Weight, IBS</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-[#FAF7F2] border border-[#EBE3D8] p-3 rounded-2xl group-hover:border-[#D9C4A5] transition-colors">
                  <div className="p-2 bg-[#F3ECE0] rounded-xl text-[#8C6D34]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Custom Meal Chart</h4>
                    <p className="text-[11px] text-stone-500">Crafted for your lifestyle</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Highlight Box & Action CTA */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#FAF6F0] to-[#F3ECE0] border border-[#E4D9C7] rounded-2xl p-6 text-center space-y-5 shadow-inner">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#8C6D34] tracking-widest uppercase">Schedule Virtual Session</span>
                <div className="text-2xl font-extrabold text-stone-900">Book 1-on-1 Call</div>
                <p className="text-xs text-stone-600">Select date & instant slot in seconds</p>
              </div>

              <button
                type="button"
                className="w-full bg-gradient-to-r from-[#8C6D34] to-[#745928] hover:from-[#745928] hover:to-[#5E471F] text-white font-extrabold text-sm sm:text-base py-4 px-6 rounded-xl shadow-lg shadow-[#8C6D34]/25 transform group-hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2"
              >
                <span>Book Your Consultation</span>
                <span className="text-lg">➔</span>
              </button>

              <div className="space-y-2 pt-1 border-t border-[#E4D9C7]/80">
                <div className="flex items-center justify-center space-x-1.5 text-xs font-medium text-stone-600">
                  <ShieldCheck className="w-4 h-4 text-[#8C6D34]" />
                  <span>Instant Booking & Flexible Rescheduling</span>
                </div>
                <p className="text-[11px] text-stone-500">⭐ Rated 4.9/5 by 500+ satisfied clients</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

