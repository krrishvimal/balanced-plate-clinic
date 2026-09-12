'use client';

import React from 'react';
import {
  Calendar,
  Phone,
  ClipboardCheck,
  UserCheck,
  Heart,
  Sprout,
  Leaf
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const highlights = [
    {
      icon: ClipboardCheck,
      line1: 'Personalised',
      line2: 'Diet Plans',
    },
    {
      icon: UserCheck,
      line1: 'Expert',
      line2: 'Guidance',
    },
    {
      icon: Heart,
      line1: 'Holistic',
      line2: 'Approach',
    },
    {
      icon: Sprout,
      line1: 'Sustainable',
      line2: 'Results',
    },
  ];

  return (
    <section id="home" className="bg-[#090909] text-stone-100 relative overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Left Column Content */}
        <div className="lg:col-span-6 flex flex-col justify-center px-6 sm:px-12 lg:px-16 pt-[115px] sm:pt-[125px] pb-12 space-y-7 z-10">
          
          {/* Headline */}
          <div className="space-y-3">
            <h1 className="font-sans text-4xl sm:text-5xl xl:text-[56px] font-bold tracking-tight text-white leading-[1.15]">
              Nutrition that <br />
              <span className="text-[#D0DABA]">
                Balances Life.
              </span>
            </h1>

            {/* Accent Line with Centered Leaf */}
            <div className="flex items-center space-x-2 pt-2">
              <div className="h-[1px] w-28 bg-[#C8A870]/40" />
              <Leaf className="w-3.5 h-3.5 text-[#D0DABA] transform -rotate-45" />
              <div className="h-[1px] w-6 bg-[#C8A870]/40" />
            </div>
          </div>

          {/* Subtext Paragraph */}
          <p className="text-stone-300 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Personalised nutrition plans and expert guidance to help you achieve better health, sustainably.
          </p>

          {/* 4 Feature Badges Row */}
          <div className="grid grid-cols-4 gap-1 border-t border-b border-stone-800/90 py-5 my-2 max-w-md divide-x divide-stone-800/90">
            {highlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center px-1"
                >
                  <div className="w-10 h-10 rounded-full border border-[#D0DABA]/40 flex items-center justify-center text-[#D0DABA] mb-2 bg-stone-900/40">
                    <IconComponent className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-medium text-stone-200 leading-tight">
                    {item.line1}
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium text-stone-200 leading-tight">
                    {item.line2}
                  </span>
                </div>
              );
            })}
          </div>

          {/* CTA Row */}
          <div className="flex items-center space-x-6 pt-1">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center space-x-2.5 bg-[#D0DABA] hover:bg-[#C0CCA8] text-[#141414] font-bold text-xs px-6 py-3 rounded-full transition-all shadow-lg active:scale-95"
            >
              <Calendar className="w-4 h-4 text-[#141414]" />
              <span>Book a Consultation</span>
            </button>

            <a
              href="tel:+918796889242"
              className="inline-flex items-center space-x-2 text-stone-300 hover:text-[#C8A870] font-semibold text-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C8A870]" />
              <span className="tracking-wide">+91 87968 89242</span>
            </a>
          </div>

        </div>

        {/* Right Column (Hero reception image) */}
        <div className="lg:col-span-6 relative w-full h-full min-h-[320px] sm:min-h-[420px] lg:min-h-full">
          <img
            src="/1.png"
            alt="Balanced Plate Nutrition Clinic Workspace"
            className="w-full h-full object-cover object-top absolute inset-0"
          />
        </div>

      </div>
    </section>
  );
}
