'use client';

import React from 'react';

export default function Approach() {
  const steps = [
    {
      num: '1. Understand',
      icon: '/ai-understand.jpg',
      desc: 'We analyse your health, lifestyle & goals.',
    },
    {
      num: '2. Plan',
      icon: '/ai-plan.jpg',
      desc: 'We create a personalised diet plan for you.',
    },
    {
      num: '3. Guide',
      icon: '/ai-guide.jpg',
      desc: 'We guide, support & make it easy to follow.',
    },
    {
      num: '4. Transform',
      icon: '/ai-transform.jpg',
      desc: 'You see real results & feel your best.',
    },
  ];

  return (
    <section id="approach" className="bg-[#FAF8F5] text-[#171717] py-[78px] border-t border-[#EBE3D8] relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Header + 4 Steps Flow) */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-10">
            
            {/* Header */}
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] text-[#988467] uppercase">
                OUR APPROACH
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-1.5">
                Science. Guidance. Real Results.
              </h2>
              <div className="w-12 h-[1.5px] bg-[#988467]/60 mt-3" />
            </div>

            {/* 4 Step Horizontal Flow with Dashed Lines */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 items-start relative">
              {steps.map((step, idx) => (
                <div key={step.num} className="relative flex flex-col items-center text-center">
                  
                  {/* Dashed Connecting Line (with 12px gap at start & end) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden sm:block absolute top-8 left-[calc(50%+44px)] w-[calc(100%-88px)] border-t-2 border-dashed border-stone-300 z-0" />
                  )}

                  {/* AI Generated Circular Icon */}
                  <div className="w-16 h-16 rounded-full overflow-hidden border border-[#E5DCD0] shadow-sm relative z-10 bg-white flex-shrink-0 transition-transform duration-300 hover:scale-105">
                    <img
                      src={step.icon}
                      alt={step.num}
                      className="w-full h-full object-cover scale-125"
                    />
                  </div>

                  {/* Step Title */}
                  <h3 className="font-sans text-sm sm:text-base font-bold text-stone-900 mt-4 leading-snug text-center">
                    {step.num}
                  </h3>

                  {/* Step Description */}
                  <p className="text-stone-600 text-xs leading-relaxed mt-1.5 max-w-[150px] text-center mx-auto">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column Image (`third section.png`) */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="rounded-[32px] overflow-hidden shadow-xl border border-stone-200/80 bg-white">
              <img
                src="/2.png"
                alt="Balanced Plate Consultation Room & Aesthetics"
                className="w-full h-full object-cover transform hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
