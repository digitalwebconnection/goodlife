import { useEffect, useRef } from 'react';

const CHALLENGES = [
  { 
    title: 'Struggling With Weight Gain?', 
    desc: 'Break the cycle of fad diets and intense gym pressure. Reclaim your health naturally with sustainable home-based protocols.', 
    color: 'from-brand-yellow to-brand-yellow/60',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><rect width="18" height="18" x="3" y="3" rx="2" />
      </svg>
    )
  },
  { 
    title: 'Managing Diabetes or PCOS?', 
    desc: 'Target the root cause of lifestyle diseases. Our naturopathy programs are specifically calibrated for hormonal and metabolic balance.', 
    color: 'from-brand-yellow to-brand-yellow/80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.505 4.044 3 5.5L12 21l7-7Z" />
      </svg>
    )
  },
  { 
    title: 'Want to Detox & Reboot?', 
    desc: 'Flush toxins and revitalize your system using the medicine cabinet in your kitchen. Pure, effective, and 100% natural.', 
    color: 'from-brand-yellow to-brand-yellow/50',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </svg>
    )
  },
  { 
    title: 'Need Expert Guidance?', 
    desc: "Stop guessing and start healing. Get 1-on-1 coaching from health experts with 18+ years of dedicated naturopathic experience.", 
    color: 'from-brand-yellow to-brand-yellow/90',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="m16.24 7.76-2.12 8.48-8.48 2.12 2.12-8.48 8.48-2.12Z" />
      </svg>
    )
  },
];

export default function HealthChallenges() {
  return (
    <section id="challenges" className="section-padding bg-off-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-20">
          <p 
            data-aos="fade-down"
            className="inline-block px-5 py-1.5 rounded-full bg-brand-light text-brand-black font-black text-[10px] uppercase tracking-[0.3em] mb-4 border border-brand-black/10 shadow-sm"
          >
            🌱 Start Your Journey
          </p>
          <h2 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-brand-black mb-6 leading-tight max-w-2xl mx-auto text-[clamp(2.5rem,5vw,3.5rem)] font-playfair font-bold"
          >
            Your Journey to Better Health <span className="italic font-normal text-brand-yellow">Starts Here</span>
          </h2>
          <div data-aos="zoom-in" data-aos-delay="200" className="w-24 h-1.5 bg-brand-yellow mx-auto rounded-full opacity-40" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {CHALLENGES.map((c, i) => (
            <div 
              key={c.title} 
              data-aos="fade-up"
              data-aos-delay={200 + i * 150}
              className="group relative bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-sm border border-gray-100 transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:border-brand-yellow/20" 
            >
              {/* Colored header strip */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r rounded-t-full ${c.color} opacity-80`} />
              
              <div className="w-20 h-20 rounded-3xl bg-brand-light flex items-center justify-center text-brand-black transition-all duration-700 group-hover:bg-brand-black group-hover:text-brand-yellow group-hover:shadow-2xl group-hover:shadow-brand-yellow/30 group-hover:-rotate-6">
                <div className="w-10 h-10">
                  {c.icon}
                </div>
              </div>

              <h3 className="font-playfair font-bold text-brand-black text-3xl mt-10 mb-5 leading-tight">
                {c.title}
              </h3>
              
              <p className="text-gray-500 text-base leading-relaxed mb-10">
                {c.desc}
              </p>

              <a 
                href="#contact" 
                className="relative inline-flex items-center gap-3 text-brand-black font-black text-sm uppercase tracking-widest group/btn py-2"
              >
                Read More
                <svg className="w-5 h-5 transition-transform duration-500 group-hover/btn:translate-x-2 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-500 group-hover/btn:w-full" />
              </a>

              {/* Subtle hover glow */}
              <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[0_30px_100px_rgba(255,193,7,0.15)] pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
