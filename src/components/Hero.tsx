import { useState, useEffect } from 'react';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2040&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2040&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2040&auto=format&fit=crop"
];

const STATS = [
  { value: '4.9/5', label: 'Google Rating', id: 'stat-1' },
  { value: '100%', label: 'Natural — No Pills', id: 'stat-2' },
  { value: 'Wellness', label: 'Awards Winner', id: 'stat-3' },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center pt-24 pb-12 overflow-hidden bg-brand-black"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {HERO_IMAGES.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`Wellness background ${index + 1}`}
              className="w-full h-full object-cover scale-105 animate-slow-zoom"
            />
            <div className="absolute inset-0 bg-brand-black/40" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 grid lg:grid-cols-12 gap-8 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 w-full">
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
      
      {/* Carousel Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === activeIndex ? 'w-8 bg-brand-yellow' : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}