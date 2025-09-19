"use client";

import { Play } from "lucide-react";

export function ProfileSection() {
  const profiles = [
    {
      name: "Clara Priscilla",
      role: "Analyst in Banking and Mining Sector",
      image: "/images/clara-placeholder.jpg"
    },
    {
      name: "Alya Azahra",
      role: "Analyst in ...",
      image: "/images/alya-placeholder.jpg"
    },
    {
      name: "Inara Sarazmyta",
      role: "Analyst in ...",
      image: "/images/inara-placeholder.jpg"
    },
    {
      name: "M.Febryanto Widya",
      role: "Analyst in Banking and Technology Sector",
      image: "/images/febryanto-placeholder.jpg"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            MEET
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            THE BUILDERS
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6 group">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-80 object-cover rounded-lg"
                />
                {/* Play button overlay for video effect */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300">
                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-bold text-white mb-2">
                {profile.name}
              </h4>

              <p className="text-gray-400 text-sm">
                {profile.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}