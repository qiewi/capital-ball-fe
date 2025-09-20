"use client";

import { Play } from "lucide-react";

interface HeroSectionProps {
  videoSrc?: string;
  title?: string;
  subtitle?: string;
}

export function HeroSection({
  videoSrc,
  title,
  subtitle
}: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          {/* Fallback gradient background */}
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-700/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            {title}
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}