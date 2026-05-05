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
    <section id="about" className="section-padding bg-gradient-to-b from-brand-light to-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-28 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7">
            <p 
              data-aos="fade-down"
              className="inline-block text-brand-yellow font-black text-[10px] uppercase tracking-[0.4em] mb-6"
            >
              Our Heritage & Vision
            </p>
            <h2 
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-brand-black mb-10 leading-[1.1] text-[clamp(2.5rem,5vw,4rem)] font-playfair font-bold"
            >
              18+ Years of <span className="italic font-normal text-brand-yellow">Natural Healing Mastery</span>
            </h2>
            
            <div 
              data-aos="fade-up"
              data-aos-delay="200"
              className="space-y-8 text-gray-600 leading-relaxed max-w-2xl mb-14 text-lg"
            >
              <p>
                <strong className="text-brand-black font-black">Mission GoodLife</strong> was founded on a simple yet profound truth: your body has an innate ability to heal itself when given the right natural conditions.
              </p>
              <p>
                Under the visionary leadership of <strong className="text-brand-black font-black">Mr. Sanjay K. Sinha</strong>, we have spent nearly two decades perfecting the art of home-based naturopathy. We don't just help you lose weight; we help you reclaim your vitality.
              </p>
            </div>

            <div className="space-y-10">
              {TRUST_POINTS.map((pt, i) => (
                <div 
                  key={i} 
                  data-aos="fade-left"
                  data-aos-delay={300 + i * 150}
                  className="flex items-start gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white border border-brand-light flex items-center justify-center text-brand-black transition-all duration-500 group-hover:bg-brand-yellow group-hover:text-brand-black group-hover:shadow-2xl group-hover:shadow-brand-yellow/30 group-hover:scale-110">
                    <div className="w-6 h-6">{pt.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-brand-black font-black text-lg mb-1 tracking-tight group-hover:text-brand-yellow transition-colors">{pt.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual — Founder Card */}
          <div className="lg:col-span-5 relative">
            {/* Background Decorations */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-accent/10 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-primary/5 blur-[120px] rounded-full" />

            <div 
              data-aos="zoom-in"
              data-aos-delay="400"
              className="relative bg-brand-black rounded-[4rem] p-12 lg:p-16 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.3)] text-white group"
            >
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop" 
                alt="Founder" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-brand-black/60" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                
                {/* Initials with premium animated border */}
                <div className="relative mb-10">
                  <div className="w-32 h-32 rounded-full bg-brand-yellow flex items-center justify-center text-brand-black text-4xl font-black font-playfair shadow-lg shadow-brand-yellow/30 relative z-10 transition-transform duration-700 group-hover:scale-110">
                    SKS
                  </div>
                </div>

                <h3 className="text-3xl font-black font-playfair mb-3 tracking-tight">Mr. Sanjay K. Sinha</h3>
                <p className="text-brand-yellow font-black text-xs uppercase tracking-[0.3em] mb-10">Founder & Chief Health Coach</p>
                
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  <span className="bg-white/10 backdrop-blur-md rounded-full px-5 py-2 text-[10px] font-black uppercase tracking-widest border border-white/10 shadow-sm transition-all hover:bg-white/20">✦ 18+ Years Exp</span>
                  <span className="bg-white/10 backdrop-blur-md rounded-full px-5 py-2 text-[10px] font-black uppercase tracking-widest border border-white/10 shadow-sm transition-all hover:bg-white/20">✦ 20K Clients</span>
                </div>

                <div className="relative mb-14 px-4">
                  <p className="relative z-10 italic text-gray-200 text-xl leading-relaxed font-medium">
                    "Your health is your greatest asset. Our mission is to give you the keys to unlock your body's natural healing potential."
                  </p>
                </div>

                {/* Bottom Stats Grid */}
                <div className="w-full grid grid-cols-3 gap-0 bg-white/5 rounded-[2rem] border border-white/10 overflow-hidden shadow-inner">
                  {[
                    { n: '18+', l: 'YEARS' },
                    { n: '20K', l: 'SUCCESS' },
                    { n: '4.9', l: 'RATING' },
                  ].map((s, i) => (
                    <div key={i} className="py-6 px-2 text-center border-r last:border-r-0 border-white/5 transition-all hover:bg-white/5">
                      <p className="text-brand-yellow font-black text-2xl font-playfair leading-none mb-1">{s.n}</p>
                      <p className="text-[8px] font-black text-white/40 uppercase tracking-widest">{s.l}</p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
