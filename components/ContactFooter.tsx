'use client';

import React from 'react';
import {
  UtensilsCrossed,
  Instagram,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';

export default function ContactFooter() {
  const [policyModal, setPolicyModal] = React.useState<string | null>(null);

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Consultation', href: '#consultation' },
    { label: 'How It Works', href: '#approach' },
    { label: 'Reviews & Stories', href: '#reviews' },
    { label: 'Blog', href: '#blog' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    'Weight Loss Diet Plan',
    'Muscle Gain Diet Plan',
    'Diabetes Diet Plan',
    'IBS+ Diet Plan',
    'PCOS/PCOD Diet Plan',
  ];

  return (
    <footer id="contact" className="bg-[#0E0E0E] text-stone-300 pt-16 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#home" className="flex items-center space-x-3.5 group">
              <img
                src="/client-logo-transparent.png"
                alt="Balanced Plate Logo"
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col justify-center">
                <span className="font-cinzel tracking-[0.22em] text-lg font-bold text-stone-100 uppercase leading-none">
                  BALANCED PLATE
                </span>
                <span className="font-script text-stone-300 text-sm tracking-wider leading-none mt-1">
                  Nutritionist Simran Gulshan
                </span>
              </div>
            </a>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Helping you build a healthier relationship with food and your body.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.instagram.com/nutritionist_simran_gulshan?stkn=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/918796889242"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:+918796889242"
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:support@balancedplate.co.in"
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-stone-100 uppercase">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-stone-100 uppercase">
              OUR SERVICES
            </h4>
            <ul className="space-y-2 text-xs">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us & Clinic Timings */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-stone-100 uppercase">
              CONTACT US
            </h4>
            <ul className="space-y-3 text-xs text-stone-300">
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="tel:+918796889242" className="hover:text-amber-400 transition-colors">
                  +91 87968 89242
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="mailto:support@balancedplate.co.in" className="hover:text-amber-400 transition-colors">
                  support@balancedplate.co.in
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Delhi, India</span>
              </li>
            </ul>

            {/* Clinic Timings Box (Gold background box as in screenshot) */}
            <div className="bg-[#D8C7A5] text-stone-900 rounded-xl p-4 space-y-1 mt-4 shadow-md">
              <div className="flex items-center space-x-2 text-xs font-bold">
                <Clock className="w-4 h-4 text-stone-900" />
                <span>Consultation Hours</span>
              </div>
              <p className="text-[11px] font-medium text-stone-800 pt-1">
                Mon - Sat : 10:00 AM - 7:00 PM <br />
                <span className="text-stone-700">(Sunday Closed)</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar with Mandatory Razorpay Compliance Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 space-y-3 sm:space-y-0">
          <p>© 2024 Balanced Plate Nutrition Clinic. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3 text-[11px]">
            <button onClick={() => setPolicyModal('privacy')} className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => setPolicyModal('terms')} className="hover:text-amber-400 transition-colors">
              Terms & Conditions
            </button>
            <span>•</span>
            <button onClick={() => setPolicyModal('refund')} className="hover:text-amber-400 transition-colors">
              Refund & Cancellation
            </button>
            <span>•</span>
            <button onClick={() => setPolicyModal('shipping')} className="hover:text-amber-400 transition-colors">
              Service & Delivery Policy
            </button>
          </div>
        </div>

      </div>

      {/* Policy Modals for Razorpay Compliance */}
      {policyModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FAF8F5] text-stone-900 max-w-2xl w-full rounded-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto space-y-4 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <h3 className="font-bold text-lg text-[#8C6D34] uppercase tracking-wider">
                {policyModal === 'privacy' && 'Privacy Policy'}
                {policyModal === 'terms' && 'Terms & Conditions'}
                {policyModal === 'refund' && 'Cancellation & Refund Policy'}
                {policyModal === 'shipping' && 'Service & Delivery Policy'}
              </h3>
              <button
                onClick={() => setPolicyModal(null)}
                className="text-stone-500 hover:text-stone-900 font-bold text-xl px-2"
              >
                ✕
              </button>
            </div>

            <div className="text-xs sm:text-sm text-stone-700 leading-relaxed space-y-3">
              {policyModal === 'privacy' && (
                <>
                  <p><strong>Privacy Policy:</strong> Balanced Plate Nutrition Clinic ("we", "our") respects your privacy and is committed to protecting your personal health data.</p>
                  <p>1. <strong>Information Collection:</strong> We collect your name, phone number, email address, and dietary/health details solely to provide 1-on-1 nutrition guidance.</p>
                  <p>2. <strong>Data Protection:</strong> Your personal data and medical history are never sold, rented, or shared with any third party.</p>
                  <p>3. <strong>Payment Security:</strong> Online payments are processed through Razorpay's SSL encrypted payment gateway. We do not store credit card or banking details on our servers.</p>
                </>
              )}

              {policyModal === 'terms' && (
                <>
                  <p><strong>Terms & Conditions:</strong> By booking a consultation with Nutritionist Simran Gulshan, you agree to the following terms:</p>
                  <p>1. <strong>Clinical Services:</strong> Our nutrition plans provide evidence-based dietary recommendations for health and wellness. They are not a substitute for emergency medical treatment.</p>
                  <p>2. <strong>1-on-1 Consultations:</strong> All consultations are conducted virtually via audio call and WhatsApp messaging.</p>
                  <p>3. <strong>Adherence:</strong> Results depend on consistent meal plan implementation and lifestyle compliance.</p>
                </>
              )}

              {policyModal === 'refund' && (
                <>
                  <p><strong>Cancellation & Refund Policy:</strong></p>
                  <p>1. <strong>Appointment Rescheduling:</strong> You may reschedule your consultation up to 4 hours before the scheduled call time by contacting +91 87968 89242.</p>
                  <p>2. <strong>Refunds:</strong> If a consultation is canceled before the initial session begins, a full refund will be processed within 5-7 business days back to the original payment method.</p>
                  <p>3. <strong>Custom Diet Charts:</strong> Once a custom diet chart has been crafted and delivered, consultation fees are non-refundable.</p>
                </>
              )}

              {policyModal === 'shipping' && (
                <>
                  <p><strong>Service & Delivery Policy:</strong></p>
                  <p>1. <strong>Digital Delivery:</strong> Balanced Plate Nutrition Clinic provides 100% digital health services. No physical products or items are shipped.</p>
                  <p>2. <strong>Service Timeline:</strong> Consultation calls are conducted at the agreed appointment date. Personalised diet charts are delivered digitally via WhatsApp/Email within 24-48 hours of consultation completion.</p>
                </>
              )}
            </div>

            <div className="pt-4 border-t border-stone-200 text-right">
              <button
                onClick={() => setPolicyModal(null)}
                className="bg-[#8C6D34] hover:bg-[#745928] text-white text-xs font-bold px-6 py-2.5 rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
