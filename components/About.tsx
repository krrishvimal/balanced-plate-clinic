'use client';

import React from 'react';
import { GraduationCap, Instagram, Leaf, CheckCircle2, Sparkles, PhoneCall } from 'lucide-react';

interface AboutProps {
  onOpenBooking: () => void;
}

export default function About({ onOpenBooking }: AboutProps) {
  const instagramUrl = "https://www.instagram.com/nutritionist_simran_gulshan?stkn=ZDNlZDc0MzIxNw==";

  const specialties = [
    { title: "Weight Loss", desc: "Sustainable fat loss through home-cooked meal balancing." },
    { title: "Muscle Gain", desc: "Optimized macro split for strength & body re-composition." },
    { title: "Diabetes Management", desc: "Insulin resistance control & steady blood sugar levels." },
    { title: "IBS+ & Gut Health", desc: "Gut healing, relief from bloating & digestive balance." },
  ];

  return (
    <section id="about" className="bg-[#FAF8F5] text-[#171717] py-16 sm:py-20 border-t border-[#EBE3D8] relative overflow-hidden">
      
      {/* Subtle Background Decoration */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#C8A870]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#5C7A57]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (5 cols): Instagram Profile Bio Badge Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border-2 border-[#C8A870]/60 rounded-3xl p-6 sm:p-8 shadow-xl shadow-[#8C6D34]/5 relative overflow-hidden space-y-6">
              
              {/* Card Top Accent Line */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#8C6D34] via-[#C8A870] to-[#5C7A57]" />

              {/* Profile Avatar & Header */}
              <div className="flex items-center space-x-4 border-b border-[#F3EFE9] pb-5">
                <div className="w-20 h-20 rounded-full border-2 border-[#C8A870] p-1 bg-white shadow-md flex-shrink-0">
                  <img
                    src="/client-logo-transparent.png"
                    alt="Nutritionist Simran Gulshan"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                
                <div className="space-y-1">
                  <div className="inline-flex items-center space-x-1 text-[11px] font-bold text-[#8C6D34] bg-[#F6F1E8] px-2.5 py-0.5 rounded-full border border-[#EADBCE]">
                    <Sparkles className="w-3 h-3 text-[#8C6D34]" />
                    <span>NUTRITIONIST</span>
                  </div>
                  <h3 className="font-sans text-xl font-extrabold text-stone-900 leading-tight">
                    Simran Gulshan
                  </h3>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-stone-500 hover:text-[#8C6D34] transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-pink-600" />
                    <span className="font-medium">@nutritionist_simran_gulshan</span>
                  </a>
                </div>
              </div>

              {/* Verified Qualification Pill */}
              <div className="bg-[#FAF6F0] border border-[#EBE3D8] p-3.5 rounded-2xl flex items-center space-x-3">
                <div className="p-2 bg-[#8C6D34]/10 rounded-xl text-[#8C6D34]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#8C6D34] tracking-wider uppercase">QUALIFICATION</span>
                  <p className="text-sm font-bold text-stone-900 leading-tight">M.Sc. in Food & Nutrition</p>
                </div>
              </div>

              {/* Bio Highlights Bullet List (Exact from Insta Bio) */}
              <div className="space-y-3 pt-1">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">CLINICAL SPECIALTIES</span>
                <ul className="space-y-2.5 text-xs font-semibold text-stone-700">
                  <li className="flex items-center space-x-2">
                    <span className="text-base">🥗</span>
                    <span><strong>M.Sc. in Food and Nutrition</strong> Degree</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-base">🌿</span>
                    <span>Specialised in <strong>Weight Loss • Muscle Gain</strong></span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-base">🩺</span>
                    <span>Clinical Focus on <strong>Diabetes & IBS+ Recovery</strong></span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-base">📩</span>
                    <span>1-on-1 Personalised Virtual Consultation</span>
                  </li>
                </ul>
              </div>

              {/* Follow Button */}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#090909] hover:bg-stone-800 text-white font-bold text-xs py-3 px-4 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-md"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Visit Instagram Profile</span>
              </a>

            </div>
          </div>

          {/* Right Column (7 cols): Detailed Bio Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline Header */}
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-[0.2em] text-[#988467] uppercase">
                ABOUT NUTRITIONIST SIMRAN GULSHAN
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
                Science-Backed Nutrition Built Around Your Life
              </h2>
              <div className="flex items-center space-x-2 pt-1">
                <div className="h-[2px] w-12 bg-[#8C6D34]" />
                <Leaf className="w-4 h-4 text-[#5C7A57] transform -rotate-45" />
                <div className="h-[1px] w-8 bg-[#D1C7B7]" />
              </div>
            </div>

            {/* Main Narrative Paragraphs */}
            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>Nutritionist Simran Gulshan</strong> holds a postgraduate <strong>M.Sc. degree in Food and Nutrition</strong>. She specializes in creating realistic, sustainable diet plans designed to fit your unique lifestyle, medical history, and cultural food preferences.
              </p>
              <p>
                Rather than advocating restrictive crash diets, starving, or expensive exotic ingredients, Simran focuses on the therapeutic power of <strong>100% home-cooked meals</strong>. Her evidence-based dietary interventions help clients achieve long-term transformation across <strong>Weight Loss, Muscle Gain, Diabetes Management, and IBS+ / Gut Health</strong>.
              </p>
            </div>

            {/* 4 Specialty Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {specialties.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#EBE3D8] p-3.5 rounded-2xl space-y-1 shadow-sm hover:border-[#C8A870] transition-colors">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5C7A57] flex-shrink-0" />
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">{item.title}</h4>
                  </div>
                  <p className="text-[11px] text-stone-500 pl-6">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4 border-t border-[#EBE3D8]">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto bg-[#8C6D34] hover:bg-[#745928] text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>Book 1-on-1 Consultation</span>
                <span>➔</span>
              </button>

              <div className="flex items-center space-x-2 text-xs font-medium text-stone-500">
                <PhoneCall className="w-4 h-4 text-[#5C7A57]" />
                <span>100% Virtual Audio & WhatsApp Guidance</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
