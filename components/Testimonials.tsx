'use client';

import React from 'react';
import { Star, CheckCircle, MapPin } from 'lucide-react';

export default function Testimonials() {
  const row1 = [
    {
      name: 'Hemant',
      location: 'Delhi, India',
      tag: 'Weight Loss & Habits',
      rating: 5.0,
      text: 'I really liked how personalized and practical the diet plan was. It was easy to understand and fit well into my daily routine without feeling too restrictive. I followed the plan consistently and started noticing positive changes within around 15 days.',
    },
    {
      name: 'Priya Sharma',
      location: 'Delhi, India',
      tag: 'PCOS Management',
      rating: 4.8,
      text: 'Honestly was scared she would ask me to eat salads all day! But Simran ma\'am gave regular roti, sabzi & dal with simple timing tweaks. My periods got regular in 2 months and lost 6 kg.',
    },
    {
      name: 'Ankit Verma',
      location: 'Gurugram, India',
      tag: 'Weight & Fat Loss',
      rating: 4.9,
      text: 'Down 9 kg in 2.5 months without hitting gym. Super easy office lunch ideas and zero fancy exotic stuff. Highly recommended if you want realistic results.',
    },
    {
      name: 'Kavita Mehra',
      location: 'Noida, India',
      tag: 'Diabetes Care',
      rating: 4.7,
      text: 'Fasting sugar dropped from 160 to 110 in 40 days. My doctor cut down my medicine dosage! She explains why we eat what we eat instead of just forcing rules.',
    },
    {
      name: 'Rohan Kapoor',
      location: 'Mumbai, India',
      tag: 'Muscle Gain',
      rating: 4.8,
      text: 'Gained 4 kg clean weight. Most dieticians push expensive supplements, but she built my diet around paneer, sattu, eggs & ghar ka khana.',
    },
    {
      name: 'Shalini Gupta',
      location: 'Ghaziabad, India',
      tag: 'Hair & Skin Wellness',
      rating: 4.9,
      text: 'Had severe hair fall and fatigue due to poor eating. Within 4 weeks on her nutrition chart, my energy bounced back and my skin looks noticeably glowing.',
    },
    {
      name: 'Deepak Joshi',
      location: 'Dehradun, India',
      tag: 'Travel Friendly Diet',
      rating: 4.6,
      text: 'Super responsive dietician. When I had to travel for work, she instantly gave me healthy restaurant choices and hotel breakfast options to stay on track.',
    },
    {
      name: 'Bhavna Roy',
      location: 'Kolkata, India',
      tag: 'Sustainable Weight Loss',
      rating: 4.8,
      text: 'No boiled tasteless veggies! She included fish curry, rice & local home-cooked meals in my diet. Lost 5.5 kg comfortably without feeling deprived.',
    },
  ];

  const row2 = [
    {
      name: 'Neha Rastogi',
      location: 'Delhi, India',
      tag: 'IBS & Gut Health',
      rating: 4.9,
      text: 'Suffered from daily bloating and acidity after lunch. After 2 weeks on her gut diet plan, stomach feels light all day. No more soda or ENO needed.',
    },
    {
      name: 'Sunita Aggarwal',
      location: 'Faridabad, India',
      tag: 'Postpartum Care',
      rating: 4.5,
      text: 'Postpartum weight was stuck for 8 months. Her plan kept my milk supply great while helping me drop 7 kg gently. Very caring & polite.',
    },
    {
      name: 'Vikramaditya Rao',
      location: 'Bengaluru, India',
      tag: 'Weight Loss',
      rating: 4.8,
      text: 'Late night IT shifts ruined my gut. Her practical evening snack options stopped my Zomato cravings completely. Great progress in 1 month.',
    },
    {
      name: 'Aarti Saxena',
      location: 'Jaipur, India',
      tag: 'PCOS & Inch Loss',
      rating: 4.9,
      text: 'Inch loss was amazing! Fitted into my old jeans after 2 years. Weekly audio check-ins kept me on track even during family functions.',
    },
    {
      name: 'Gaurav Mehta',
      location: 'Chandigarh, India',
      tag: 'Diabetes & Weight',
      rating: 4.7,
      text: 'Simple, no-nonsense dietician. No starvation, clear daily charts, and fast response to questions on WhatsApp. Energy levels improved a lot.',
    },
    {
      name: 'Dr. Meenakshi Sundaram',
      location: 'Chennai, India',
      tag: 'General Wellness',
      rating: 4.8,
      text: "Being a medical doctor myself, I value evidence-based eating. Simran's personalized diet approach helped lower my triglycerides significantly.",
    },
    {
      name: 'Divya Bhatia',
      location: 'Dubai, UAE',
      tag: 'Virtual Consultation',
      rating: 4.9,
      text: 'Even living abroad in Dubai, the virtual audio consultation was completely seamless. The diet chart fit Indian grocery availability here perfectly!',
    },
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.4;
    return (
      <div className="flex items-center space-x-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="w-3.5 h-3.5 fill-[#D8C7A5] text-[#C8A870]" />
        ))}
        {hasHalfStar && (
          <Star key="half" className="w-3.5 h-3.5 fill-[#D8C7A5]/50 text-[#C8A870]" />
        )}
      </div>
    );
  };

  const ReviewCard = ({ rev }: { rev: typeof row1[0] }) => (
    <div className="w-[82vw] max-w-[340px] sm:w-[400px] bg-white border border-[#EBE3D8] rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-[#C8A870] transition-all duration-300 flex flex-col justify-between flex-shrink-0 mx-2 sm:mx-3 group select-none">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1.5">
            {renderStars(rev.rating)}
            <span className="text-[11px] font-bold text-stone-800 ml-1">{rev.rating}</span>
          </div>
          <span className="text-[11px] font-semibold text-[#8C6D34] bg-[#F5F0E8] px-2.5 py-0.5 rounded-full border border-[#E8DFD5]">
            {rev.tag}
          </span>
        </div>

        <p className="text-stone-700 text-xs sm:text-[13px] leading-relaxed italic font-serif">
          "{rev.text}"
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 mt-3 border-t border-[#F3EFE9]">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-full bg-[#8C6D34] text-white font-bold flex items-center justify-center text-xs shadow-xs">
            {rev.name.charAt(0)}
          </div>
          <div>
            <h4 className="font-sans text-xs sm:text-sm font-bold text-stone-900 leading-tight">
              {rev.name}
            </h4>
            <div className="flex items-center text-[11px] text-stone-500 mt-0.5">
              <MapPin className="w-3 h-3 text-[#8C6D34] mr-1" />
              <span>{rev.location}</span>
            </div>
          </div>
        </div>

        <div className="inline-flex items-center space-x-1 bg-[#F5F0E8] text-[#8C6D34] px-2 py-0.5 rounded-full text-[10px] font-medium">
          <CheckCircle className="w-3 h-3 text-[#5C7A57]" />
          <span>Verified</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="reviews" className="bg-[#FAF8F5] text-[#171717] py-16 lg:py-24 border-t border-[#EBE3D8] relative overflow-hidden">
      
      {/* Side Gradient Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold tracking-[0.22em] text-[#988467] uppercase">
            PATIENT REVIEWS & TRANSFORMATIONS
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Real Stories, Real Results
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm max-w-lg mx-auto">
            Hover over any review card to pause. Authentic feedback from 15+ verified clients who achieved their goals naturally.
          </p>
        </div>
      </div>

      {/* 2 Horizontal Scrolling Rows moving in opposite directions */}
      <div className="space-y-6">
        
        {/* Row 1: Right to Left ➔ */}
        <div className="overflow-hidden py-1">
          <div className="animate-marquee-left">
            {[...row1, ...row1, ...row1].map((rev, idx) => (
              <ReviewCard key={`r1-${idx}`} rev={rev} />
            ))}
          </div>
        </div>

        {/* Row 2: Left to Right  (Opposite Direction!) */}
        <div className="overflow-hidden py-1">
          <div className="animate-marquee-right">
            {[...row2, ...row2, ...row2].map((rev, idx) => (
              <ReviewCard key={`r2-${idx}`} rev={rev} />
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Rating Trust Summary */}
      <div className="mt-12 max-w-2xl mx-auto px-4">
        <div className="bg-[#F0EBE1] border border-[#E3DCCF] rounded-2xl py-4 px-6 flex flex-col sm:flex-row items-center justify-between text-stone-800 shadow-sm gap-3 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#8C6D34] text-[#8C6D34]" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-bold text-stone-900">
              4.8 / 5 Rating from 250+ Verified Clients
            </span>
          </div>
          <a
            href="#consultation"
            className="text-xs font-bold text-white bg-[#8C6D34] hover:bg-[#745928] px-4 py-2 rounded-xl transition-colors shadow-sm"
          >
            Start Your Journey ➔
          </a>
        </div>
      </div>

    </section>
  );
}
