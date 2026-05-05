import React from 'react';

const STATS = [
  { value: '20,000+', label: 'Transformations', id: 'stat-1' },
  { value: '18+', label: 'Years Exp.', id: 'stat-2' },
  { value: '4.9 ⭐', label: 'Google Rating', id: 'stat-3' },
  { value: '95%', label: 'Satisfaction', id: 'stat-4' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-brand-black"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop"
          alt="Wellness background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/40 to-transparent" />
      </div>

      {/* Removed botanical illustrations for simplicity */}

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 grid lg:grid-cols-12 gap-12 items-center py-20">
        {/* Left Content */}
        <div className="lg:col-span-7 w-full">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-yellow/5 border border-brand-yellow/10 backdrop-blur-md text-[10px] font-bold text-brand-yellow tracking-[0.3em] uppercase mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
            India's #1 Naturopathy Program
          </div>

          <h1 className="font-playfair font-black text-white leading-[1.1] tracking-tight mb-8 text-[clamp(3.5rem,8vw,6.5rem)]">
            Transform Your<br />
            Health, <span className="italic text-brand-yellow">Naturally.</span>
          </h1>

          <div className="flex items-center gap-6 mb-8 pl-6 border-l-2 border-brand-yellow/40">
            <h2 className="text-xl sm:text-2xl font-light text-white leading-relaxed">
              Weight Loss that Heals,{' '}
              <span className="font-bold italic">NOT Hurts</span>
            </h2>
          </div>

          <p className="text-gray-200 text-xl leading-relaxed max-w-2xl mb-12 font-medium">
            Experience India's premier home-based naturopathy programs. No gym,
            no pills, no side effects — <span className="text-white font-bold">just science-backed natural healing</span>.
          </p>

          <div className="flex flex-wrap gap-6">
            <a
              href="#plans"
              className="ripple-btn group px-10 py-5 rounded-full bg-brand-yellow text-brand-black font-black shadow-lg shadow-brand-yellow/20 transition-all duration-500 hover:scale-105 hover:shadow-brand-yellow/40 flex items-center gap-3"
            >
              Explore Our Plans
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="#contact"
              className="px-10 py-5 rounded-full border-2 border-white/30 text-white font-bold backdrop-blur-sm transition-all duration-500 hover:bg-white hover:text-brand-black"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-5 relative hidden lg:block w-full">
          <div className="absolute inset-0 bg-brand-yellow/5 blur-[100px] rounded-full pointer-events-none animate-pulse" />

          <div className="relative grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.id}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-transform hover:scale-105"
              >
                <div className="font-playfair text-3xl font-black text-brand-yellow mb-1">
                  {stat.value}
                </div>
                <div className="text-[9px] uppercase tracking-widest font-bold text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Simplified Footer / No Ticker for maximum simplicity */}

      
    </section>
  );
}