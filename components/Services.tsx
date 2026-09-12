'use client';

import React from 'react';
import { Calendar, Leaf } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const services = [
    {
      id: 'weight-loss',
      title1: 'Weight Loss',
      title2: 'Diet Plan',
      desc1: 'Healthy fat loss with',
      desc2: 'balanced nutrition.',
    },
    {
      id: 'muscle-gain',
      title1: 'Muscle Gain',
      title2: 'Diet Plan',
      desc1: 'Build muscle with',
      desc2: 'high protein nutrition.',
    },
    {
      id: 'diabetes',
      title1: 'Diabetes',
      title2: 'Diet Plan',
      desc1: 'Manage blood sugar',
      desc2: 'with the right foods.',
    },
    {
      id: 'ibs',
      title1: 'IBS+',
      title2: 'Diet Plan',
      desc1: 'Soothe your gut & improve',
      desc2: 'digestion naturally.',
    },
    {
      id: 'pcos',
      title1: 'PCOS/PCOD',
      title2: 'Diet Plan',
      desc1: 'Hormone balance &',
      desc2: 'better cycle health.',
    },
  ];

  return (
    <section id="services" className="bg-[#FAF8F5] text-[#171717] py-16 lg:py-24 relative border-t border-[#EBE3D8]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching UI screenshot */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#988467] uppercase">
            OUR SERVICES
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Diet Plans for Every Goal
          </h2>
          
          {/* Accent Line with Leaf Ornament */}
          <div className="flex items-center justify-center space-x-2 pt-1">
            <div className="h-[1px] w-16 bg-[#D1C7B7]" />
            <Leaf className="w-3.5 h-3.5 text-[#5C7A57] transform -rotate-45" />
            <div className="h-[1px] w-6 bg-[#D1C7B7]" />
          </div>
        </div>

        {/* 5 Cards Grid (Single Horizontal Row on Desktop!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 items-stretch">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(`${service.title1} ${service.title2}`)}
              className="bg-white border border-[#EBE3D8] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 text-center flex flex-col items-center justify-between h-full min-h-[330px] cursor-pointer group"
            >
              <div className="flex flex-col items-center w-full">
                {/* AI Generated Icon Image */}
                <div className="w-20 h-20 rounded-full overflow-hidden border border-[#E5DCD0] shadow-sm flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={`/ai-${service.id}.jpg`}
                    alt={service.title1}
                    className="w-full h-full object-cover scale-125"
                  />
                </div>

                {/* Title */}
                <h3 className="font-sans text-base sm:text-lg font-bold text-stone-900 leading-tight mb-3 group-hover:text-[#8C6D34] transition-colors">
                  {service.title1} <br />
                  {service.title2}
                </h3>

                {/* Description */}
                <p className="text-stone-600 text-xs leading-relaxed">
                  {service.desc1} <br />
                  {service.desc2}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="w-10 h-[1.5px] bg-[#E5DCD0] mx-auto mt-4 mb-1 group-hover:bg-[#C8A870] transition-colors" />
            </div>
          ))}
        </div>

        {/* Bottom Personalization Banner */}
        <div className="mt-12 max-w-4xl mx-auto bg-[#F0EBE1] border border-[#E3DCCF] rounded-2xl py-3.5 px-6 flex items-center justify-center space-x-3 text-stone-800 shadow-sm text-center">
          <Calendar className="w-5 h-5 text-stone-800 flex-shrink-0" />
          <p className="text-xs sm:text-sm font-medium text-stone-800">
            All plans are personalised after analysing your health, lifestyle, medical history and goals.
          </p>
        </div>

      </div>
    </section>
  );
}
