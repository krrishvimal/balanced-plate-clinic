'use client';
import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  label?: string;
  subtext?: string;
  aspectRatio?: string; // e.g. "aspect-[4/3]", "aspect-[16/9]", "h-full min-h-[300px]"
  className?: string;
  badge?: string;
}

export default function ImagePlaceholder({
  label = 'Image Placeholder',
  subtext = 'Image will be added by client',
  aspectRatio = 'aspect-[4/3]',
  className = '',
  badge
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative w-full ${aspectRatio} rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 border border-amber-500/20 shadow-xl flex flex-col items-center justify-center p-6 group transition-all duration-300 hover:border-amber-500/40 ${className}`}
    >
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C8A870_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

      {badge && (
        <div className="absolute top-4 right-4 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md">
          {badge}
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center text-center space-y-3">
        <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300 shadow-inner">
          <ImageIcon className="w-7 h-7" />
        </div>

        <div>
          <h4 className="text-stone-200 font-medium text-base tracking-wide">
            {label}
          </h4>
          <p className="text-stone-400 text-xs mt-1 max-w-[220px]">
            {subtext}
          </p>
        </div>

        <div className="inline-flex items-center text-[11px] text-amber-400/70 border border-dashed border-amber-500/30 px-3 py-1 rounded-md bg-stone-900/50">
          <span>Slot Reserved for Photo</span>
        </div>
      </div>
    </div>
  );
}
