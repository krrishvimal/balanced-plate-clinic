'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import Consultation from '@/components/Consultation';
import TrustBadges from '@/components/TrustBadges';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import ContactFooter from '@/components/ContactFooter';
import BookingModal from '@/components/BookingModal';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService(undefined);
  };

  return (
    <main className="min-h-screen bg-[#FAF8F6]">
      {/* Navigation Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Hero Banner (Dark luxury theme) */}
      <Hero onOpenBooking={() => handleOpenBooking('One-on-One Consultation')} />

      {/* About Nutritionist Simran Gulshan (Based on Instagram Bio) */}
      <About onOpenBooking={() => handleOpenBooking('One-on-One Consultation')} />

      {/* Services Section (5 Diet Plans) */}
      <Services onSelectService={(serviceTitle) => handleOpenBooking(serviceTitle)} />

      {/* Approach Section (4 Steps) */}
      <Approach />

      {/* Consultation Section */}
      <Consultation onOpenBooking={(option) => handleOpenBooking(option)} />

      {/* Trust Badges Bar */}
      <TrustBadges />

      {/* Patient Reviews & Transformations */}
      <Testimonials />

      {/* FAQs & Blog Articles */}
      <FaqSection />

      {/* Contact Info & Footer */}
      <ContactFooter />

      {/* Consultation Booking & Payment Gateway Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
      />
    </main>
  );
}
