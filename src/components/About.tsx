import { useEffect, useRef } from 'react';

const TRUST_POINTS = [
  {
    title: '18+ Years Experience',
    desc: 'Dedicated naturopathic healing since 2007.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    )
  },
  {
    title: '20,000+ Transformations',
    desc: 'Success stories across India and abroad.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    title: '100% Home-Based',
    desc: 'No gym, no equipment, no pills required.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
];

export default function About() {
  return (
    <section id="about" className="py-8 lg:py-16 bg-white overflow-hidden relative">
      {/* Decorative vertical background text */}
      <div className="absolute top-0 right-0 h-full hidden lg:block opacity-[0.03] select-none pointer-events-none">
        <span className="text-[18vh] font-black font-playfair uppercase tracking-tighter vertical-text origin-top-right rotate-90 inline-block whitespace-nowrap">
          Heritage & Vision — Heritage & Vision
        </span>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left: Text Content */}
          <div className="lg:col-span-7" data-aos="fade-right">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-[2px] bg-brand-yellow" />
              <p className="text-brand-black font-black text-[10px] uppercase tracking-[0.5em]">
                Founded 2007
              </p>
            </div>

            <h2 className="text-brand-black mb-12 leading-[1.1] text-[clamp(2.5rem,6vw,4.5rem)] font-playfair font-bold">
              18+ Years of <br />
              <span className="text-brand-yellow">Natural Healing</span> Mastery
            </h2>

            <div className="space-y-10 text-gray-600 leading-relaxed max-w-2xl text-lg lg:text-xl">
              <p>
                <strong className="text-brand-black font-black">Mission GoodLife</strong> was founded on a simple yet profound truth: your body has an innate ability to heal itself when given the right natural conditions.
              </p>
              <p className="border-l-4 border-brand-yellow pl-8 py-4 italic bg-brand-light/50">
                Under the visionary leadership of Mr. Sanjay K. Sinha, we have spent nearly two decades perfecting the art of home-based naturopathy.
              </p>
              <p>
                We don't just help you lose weight; we help you reclaim your vitality and restore your body's natural metabolic balance through kitchen-based science.
              </p>
            </div>

            </div>

          {/* Right: Founder Card & Stats */}
          <div className="lg:col-span-5" data-aos="fade-left">
            <div className="relative bg-brand-black text-white shadow-2xl overflow-hidden">
              {/* Founder Image Area */}
              <div className="relative h-80 overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop"
                  alt="Mr. Sanjay K. Sinha"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
                <div className="absolute bottom-6 left-8">
                  <p className="font-black text-[10px] uppercase tracking-[0.4em] text-brand-yellow mb-1">Founder & Chief Health Coach</p>
                  <p className="font-playfair font-bold text-2xl tracking-tight">Mr. Sanjay K. Sinha</p>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 lg:p-10">
                {/* Quote Block */}
                <div className="relative mb-12">
                  <svg className="absolute -top-4 -left-4 w-10 h-10 text-brand-yellow opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.895 14.912 16 16.017 16H19.017V14H17.017C15.912 14 15.017 13.105 15.017 12V9C15.017 7.895 15.912 7 17.017 7H20.017C21.122 7 22.017 7.895 22.017 9V18C22.017 19.657 20.674 21 19.017 21H14.017ZM3.017 21V18C3.017 16.895 3.912 16 5.017 16H8.017V14H6.017C4.912 14 4.017 13.105 4.017 12V9C4.017 7.895 4.912 7 6.017 7H9.017C10.122 7 11.017 7.895 11.017 9V18C11.017 19.657 9.674 21 8.017 21H3.017Z" />
                  </svg>
                  <p className="text-lg lg:text-xl font-medium leading-relaxed italic text-gray-300 relative z-10">
                    "Your health is your greatest asset. Our mission is to give you the keys to unlock your body's natural healing potential."
                  </p>
                </div>

                {/* Grid Stats Card (Sharp) */}
                <div className="grid grid-cols-3 bg-white/5 border border-white/10 shadow-inner">
                  {[
                    { n: '18+', l: 'YEARS' },
                    { n: '20K', l: 'SUCCESS' },
                    { n: '4.9', l: 'RATING' },
                  ].map((s, i) => (
                    <div key={i} className="p-5 text-center border-r last:border-r-0 border-white/10 hover:bg-white/5 transition-colors">
                      <p className="text-brand-yellow font-black text-xl font-playfair mb-1 leading-none">{s.n}</p>
                      <p className="text-[7px] font-black text-white/40 uppercase tracking-widest leading-none">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-6 flex justify-end">
              <div className="bg-brand-yellow px-6 py-2 text-brand-black text-[9px] font-black uppercase tracking-[0.4em]">
                Mastery Since 2007
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Standalone Full-Width Trust Bar */}
      <div className="bg-brand-black py-16 mt-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
            {TRUST_POINTS.map((pt, i) => (
              <div 
                key={i} 
                data-aos="fade-up" 
                data-aos-delay={i * 100}
                className="flex items-start gap-8 group"
              >
                <div className="w-20 h-20 bg-white/5 border border-white/10 flex items-center justify-center text-brand-yellow transition-all duration-500 group-hover:bg-brand-yellow group-hover:text-brand-black">
                  <div className="w-10 h-10">{pt.icon}</div>
                </div>
                <div>
                  <h4 className="text-white font-black text-xl mb-3 tracking-tight uppercase group-hover:text-brand-yellow transition-colors">
                    {pt.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                    {pt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
