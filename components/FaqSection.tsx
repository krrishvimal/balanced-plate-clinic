'use client';

import React, { useState } from 'react';
import { Plus, Minus, ArrowRight, MessageCircle, HelpCircle, Leaf, Sparkles } from 'lucide-react';

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      num: '01',
      q: 'How does the online dietician consultation work?',
      a: 'After selecting your consultation plan, you will receive a short health assessment form. We then hold a detailed one-on-one session (via audio call or WhatsApp chat) to analyze your medical background, food habits, and lifestyle goals before crafting your custom diet chart.',
    },
    {
      num: '02',
      q: 'Are the diet plans restrictive or hard to follow?',
      a: 'Not at all. We strictly follow home-cooked, balanced meal principles tailored to your regional cuisine and personal choices. We do not prescribe starvation diets, expensive exotic ingredients, or unrealistic restrictions.',
    },
    {
      num: '03',
      q: 'What health conditions do you specialize in?',
      a: 'We specialize in sustainable weight management, Type-2 Diabetes reversal, PCOS/PCOD management, IBS & gut health, and heart health.',
    },
    {
      num: '04',
      q: 'How do payments work for consultations?',
      a: 'Payments are processed securely via Razorpay supporting UPI, credit/debit cards, net banking, and digital wallets. You receive instant digital booking confirmation upon payment.',
    },
    {
      num: '05',
      q: 'How are the virtual consultations conducted?',
      a: 'All our consultations are 100% virtual and conducted conveniently online via audio call or dedicated WhatsApp chat, allowing you to get expert guidance from anywhere worldwide.',
    },
  ];

  const blogPosts = [
    {
      category: 'PCOS & Hormones',
      title: '5 Daily Foods That Naturally Help Balance Hormones in PCOS',
      desc: 'Simple kitchen ingredients backed by nutrition science to help regulate insulin and lower inflammation naturally.',
      date: 'Aug 2026',
      readTime: '4 min read',
    },
    {
      category: 'Gut Health',
      title: 'Understanding IBS Triggers: How to Soothe Your Gut Naturally',
      desc: 'Discover common dietary triggers causing bloat and acidity, and practical meal swaps for a calmer stomach.',
      date: 'Jul 2026',
      readTime: '5 min read',
    },
    {
      category: 'Weight Loss',
      title: 'Why Crash Diets Fail and What Sustainable Weight Loss Really Looks Like',
      desc: 'Learn why extreme calorie restriction slows metabolism and how eating balanced home meals yields permanent results.',
      date: 'Jul 2026',
      readTime: '6 min read',
    },
  ];

  return (
    <section id="faqs" className="bg-gradient-to-b from-[#FAF8F5] via-[#F6F1E9] to-[#FAF8F5] text-[#171717] py-[78px] border-t border-[#EBE3D8] relative overflow-hidden">
      
      {/* Decorative Subtle Leaf Flourish Watermark */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none">
        <Leaf className="w-96 h-96 text-[#8C6D34]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* FAQs Section */}
        <div>
          
          {/* Premium Header with Leaf Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-[#EAE2D7] border border-[#DDD3C4] px-4 py-1.5 rounded-full mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#8C6D34]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#7A6444] uppercase">
                GOT QUESTIONS?
              </span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2.5 max-w-xl mx-auto leading-relaxed">
              Everything you need to know about our medical nutrition consultations, personalized diet charts, and clinic process.
            </p>
          </div>

          {/* 2-Column Luxury Accordion Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white border rounded-2xl transition-all duration-300 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] ${
                    isOpen
                      ? 'border-[#C8A870] ring-1 ring-[#C8A870]/30 shadow-[0_8px_30px_rgba(200,168,112,0.12)] bg-[#FDFBF8]'
                      : 'border-[#EAE2D7] hover:border-[#C8A870]/60 hover:shadow-md'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between font-sans text-base sm:text-lg font-bold text-stone-900 group"
                  >
                    <div className="flex items-center space-x-3.5 pr-3">
                      {/* Gold Serif Number Badge */}
                      <span className="font-serif text-[#C8A870] font-bold text-base sm:text-lg opacity-80 group-hover:opacity-100 transition-opacity">
                        {faq.num}.
                      </span>
                      <span className="group-hover:text-[#8C6D34] transition-colors leading-snug">
                        {faq.q}
                      </span>
                    </div>
                    
                    {/* Gold Circular Plus/Minus Pill */}
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-[#8C6D34] border-[#8C6D34] text-white rotate-180' : 'bg-[#F5F0E8] border-[#DDD3C4] text-stone-800 group-hover:bg-[#EAE2D7]'
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-[#F3EFE9]">
                      <div className="border-l-2 border-[#C8A870] pl-4 mt-2">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Premium Dietician Question Banner */}
          <div className="mt-10 bg-gradient-to-r from-[#253322] via-[#1D2A1B] to-[#141F12] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#3E4F3A] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-[#5C7A57]/30 border border-[#5C7A57]/50 flex items-center justify-center text-[#D2E0CC] flex-shrink-0">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-bold text-white">
                  Have a specific medical or dietary question?
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-0.5">
                  Speak directly with Nutritionist Simran Gulshan & team for personalized guidance.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/918796889242"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-[#CFD7B7] hover:bg-[#bdc7a2] text-[#1D2A1B] font-bold text-xs sm:text-sm py-3 px-6 rounded-full transition-all shadow-md hover:shadow-lg flex-shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask Dietician Directly</span>
            </a>
          </div>

        </div>

        {/* Blog Insights Section */}
        <div id="blog" className="mt-20 pt-16 border-t border-[#EBE3D8]">
          
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-2 bg-[#EAE2D7] border border-[#DDD3C4] px-4 py-1.5 rounded-full mb-3 shadow-xs">
              <Leaf className="w-3.5 h-3.5 text-[#5C7A57]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#7A6444] uppercase">
                NUTRITION INSIGHTS
              </span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-1">
              Latest Articles & Health Tips
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl mx-auto">
              Evidence-based nutrition advice to empower your everyday health journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#EBE3D8] rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-[#C8A870] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <span className="text-[11px] font-semibold tracking-wider text-[#7A6444] uppercase bg-[#F5F0E8] px-3 py-1 rounded-full border border-[#E3D9CD] inline-block mb-3">
                    {post.category}
                  </span>
                  
                  <h3 className="font-sans text-lg font-bold text-stone-900 group-hover:text-[#8C6D34] transition-colors leading-snug mb-2">
                    {post.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4">
                    {post.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F3EFE9] flex items-center justify-between text-xs text-stone-500">
                  <div className="flex items-center space-x-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <span className="text-[#8C6D34] font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                    Read <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
