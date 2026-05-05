import React from 'react';

const STATS = [
  { value: '4.9/5', label: 'Google Rating', id: 'stat-1' },
  { value: '100%', label: 'Natural — No Pills', id: 'stat-2' },
  { value: 'Wellness', label: 'Awards Winner', id: 'stat-3' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center pt-24 pb-12 overflow-hidden bg-brand-black"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop"
          alt="Wellness background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-black/60" />
      </div>

      {/* Removed botanical illustrations for simplicity */}

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 grid lg:grid-cols-12 gap-8 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 w-full">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-yellow/5 border border-brand-yellow/10 backdrop-blur-md text-[10px] font-bold text-brand-yellow tracking-[0.3em] uppercase mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
            India's #1 Naturopathy Program
          </div>

          <h1 className="font-playfair font-black text-white leading-[1.1] tracking-tight mb-6 text-[clamp(2rem,5vw,4rem)]">
            Transform Your<br />
            Health, <span className="italic text-brand-yellow">Naturally.</span>
          </h1>

          <div className="flex items-center gap-4 mb-6 pl-4 border-l-2 border-brand-yellow/40">
            <h2 className="text-base sm:text-lg font-light text-white leading-relaxed">
              Weight Loss that Heals,{' '}
              <span className="font-bold italic">NOT Hurts</span>
            </h2>
          </div>

          <p className="text-gray-200 text-base lg:text-lg leading-relaxed max-w-xl mb-10 font-medium">
            Experience India's premier home-based naturopathy programs. No gym,
            no pills, no side effects — <span className="text-white font-bold">just science-backed natural healing</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#plans"
              className="ripple-btn group px-8 py-4 rounded-full bg-brand-yellow text-brand-black font-black shadow-lg shadow-brand-yellow/20 transition-all duration-500 hover:scale-105 hover:shadow-brand-yellow/40 flex items-center gap-2 text-xs uppercase tracking-widest"
            >
              Explore Our Plans
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
              className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-black text-xs uppercase tracking-widest backdrop-blur-sm transition-all duration-500 hover:bg-white hover:text-brand-black"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-5 relative hidden lg:block w-full">
          <div className="absolute inset-0 bg-brand-yellow/5 blur-[100px] rounded-full pointer-events-none animate-pulse" />

          <div className="relative flex flex-col gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.id}
                className="bg-white rounded-2xl p-5 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-transform hover:scale-105"
              >
                <div className="font-playfair text-xl font-black text-brand-black mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
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