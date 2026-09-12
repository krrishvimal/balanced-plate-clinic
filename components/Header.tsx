'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: (serviceType?: string) => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('HOME');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'HOW IT WORKS', href: '#approach' },
    { label: 'REVIEWS', href: '#reviews' },
    { label: 'FAQS', href: '#faqs' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090909]/95 backdrop-blur-md py-3 shadow-2xl border-b border-stone-800/40'
          : 'bg-[#090909] py-4'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo Section using user logo.png with transparent background */}
          <a href="#home" className="flex items-center space-x-3 sm:space-x-3.5 group flex-shrink-0">
            <img
              src="/client-logo-transparent.png"
              alt="Balanced Plate Logo"
              className="h-11 sm:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col justify-center">
              <span className="font-cinzel tracking-[0.22em] text-base sm:text-lg font-bold text-stone-100 uppercase leading-none">
                BALANCED PLATE
              </span>
              <span className="font-script text-stone-200 text-xs sm:text-sm tracking-wider leading-none mt-1">
                Nutritionist Simran Gulshan
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {navLinks.map((link) => {
              const isActive = activeNav === link.label;
              return (
                <div key={link.label} className="relative py-1">
                  <a
                    href={link.href}
                    onClick={() => setActiveNav(link.label)}
                    className={`text-[11px] xl:text-xs font-semibold tracking-wider transition-colors duration-200 uppercase whitespace-nowrap ${
                      isActive ? 'text-stone-100 font-bold' : 'text-stone-300 hover:text-[#C8A870]'
                    }`}
                  >
                    {link.label}
                  </a>
                  {isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C8A870] rounded-full" />
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA Action Button - Sage Pill Style */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center space-x-2.5 bg-[#CFD7B7] hover:bg-[#BFCA9F] text-[#141414] font-bold text-xs px-6 py-2.5 rounded-full transition-all shadow-md active:scale-95"
            >
              <Calendar className="w-4 h-4 text-[#141414]" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={() => onOpenBooking()}
              className="bg-[#CFD7B7] text-[#141414] font-bold text-[11px] px-3.5 py-1.5 rounded-full"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-stone-300 hover:text-[#C8A870] p-1"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-stone-800 pb-3 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActiveNav(link.label);
                  setMobileMenuOpen(false);
                }}
                className={`block text-sm font-medium tracking-wider ${
                  activeNav === link.label ? 'text-[#C8A870] font-bold' : 'text-stone-300'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
