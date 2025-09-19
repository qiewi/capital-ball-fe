"use client";

import { Play } from "lucide-react";

export function HeroSection() {
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
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          {/* Fallback gradient background */}
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-700/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Our vision, like yours{" "}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mx-4 cursor-pointer hover:bg-white/30 transition-all duration-300">
              <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
            </div>{" "}
            to always look ahead.
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Professional financial advisory services built with modern technology stack
          </p>
        </div>
      </div>
    </section>
  );
}