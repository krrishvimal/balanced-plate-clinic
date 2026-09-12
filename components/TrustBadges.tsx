'use client';

import React from 'react';
import { GraduationCap, ClipboardCheck, ShieldCheck, Users, Calendar } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: GraduationCap,
      line1: 'M.Sc. in',
      line2: 'Food & Nutrition',
    },
    {
      icon: ClipboardCheck,
      line1: 'Evidence-Based',
      line2: 'Nutrition',
    },
    {
      icon: ShieldCheck,
      line1: 'Confidential &',
      line2: 'Professional',
    },
    {
      icon: Users,
      line1: 'For All Age',
      line2: 'Groups',
    },
    {
      icon: Calendar,
      line1: '100% Virtual & Online',
      line2: 'Consultations Worldwide',
    },
  ];

  return (
    <section className="bg-[#F5F0E8] border-y border-[#E8DFD5] py-5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#E5DCD0] items-center">
          {badges.map((badge, idx) => {
            const IconComponent = badge.icon;
            return (
              <div
                key={idx}
                className="flex items-center space-x-3 px-4 py-3 md:py-1 justify-center md:justify-start"
              >
                {/* Circular Icon Container */}
                <div className="w-10 h-10 rounded-full bg-[#EAE2D7] border border-[#DDD3C4] flex items-center justify-center text-stone-900 flex-shrink-0">
                  <IconComponent className="w-5 h-5 stroke-[1.5]" />
                </div>
                
                {/* Badge Label */}
                <div className="flex flex-col text-xs font-semibold text-stone-900 leading-tight">
                  <span>{badge.line1}</span>
                  <span className="text-stone-800 font-medium">{badge.line2}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
