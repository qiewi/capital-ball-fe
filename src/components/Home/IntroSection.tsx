'use client';

import { useEffect, useRef, useState } from 'react';

export function IntroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (videoRef.current) {
              videoRef.current.play().catch(() => {
                // Auto-play failed, user interaction required
              });
            }
          } else {
            setIsVisible(false);
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-8 lg:py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm font-medium tracking-wider text-gray-600 uppercase mb-4">
            AT A STORY
          </p>
        </div>

        <div className="flex flex-col gap-12 items-center">
          {/* Video Section */}
          <div className="relative w-full max-w-4xl">
            <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <video
                ref={videoRef}
                className="w-full h-auto md:min-h-[400px] lg:min-h-[500px]"
                controls
                muted
                playsInline
                poster="/images/video-poster.jpg"
              >
                <source src="/videos/intro-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 border-b border-gray-300 md:border-none pb-8">
            <div className='flex flex-col items-center text-center'>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                The Art of Investing
              </h2>
              <p className="text-lg text-gray-500 font-medium mb-6">
                CapitalBall Introduction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}