import { useEffect, useRef } from 'react';

const BENEFITS = [
  { title: 'Kitchen-based natural remedies', desc: 'No chemicals or synthetic supplements.' },
  { title: 'Morning detox drinks & spices', desc: 'Activate your metabolism using simple ingredients.' },
  { title: 'Smart meal timing guidance', desc: 'Learn when to eat for maximum fat burning.' },
];

export default function SlimAtHome() {
  return (
    <section id="slim-at-home" className="section-padding bg-brand-light/30 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          
          {/* Left Visual Composition */}
          <div data-aos="fade-right" className="relative">
            {/* Background Shape */}
            <div className="relative bg-brand-black rounded-[3.5rem] p-12 lg:p-20 aspect-square flex items-center justify-center overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.3)] group">
              <img 
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop" 
                alt="Healthy food" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-brand-black/60" />
              {/* Brand Accent */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow opacity-10 blur-[100px] rounded-full transition-all duration-1000 group-hover:scale-110" />
              
              {/* Mockup Card */}
              <div 
                data-aos="zoom-in"
                data-aos-delay="400"
                className="relative z-10 bg-white rounded-[2.5rem] shadow-[0_50px_120px_rgba(0,0,0,0.4)] p-10 w-full max-w-sm transition-all duration-700 hover:scale-[1.05] hover:-rotate-2"
              >
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-2xl shadow-inner">🥗</div>
                    <div>
                      <p className="font-black text-gray-900 text-sm tracking-tight">Meal Planner</p>
                      <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Week 1 Active</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-brand-light flex items-center justify-center text-brand-black transition-transform hover:rotate-45">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    { label: 'Morning Detox', time: '7:30 AM', color: 'bg-brand-yellow', w: 'w-full', d: 'delay-0' },
                    { label: 'Hearty Breakfast', time: '9:00 AM', color: 'bg-brand-black', w: 'w-4/5', d: 'delay-200' },
                    { label: 'Metabolism Boost', time: '11:30 AM', color: 'bg-brand-yellow', w: 'w-2/3', d: 'delay-400' },
                  ].map((row, i) => (
                    <div key={i} className="space-y-3">
                      <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        <span>{row.label}</span>
                        <span>{row.time}</span>
                      </div>
                      <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
                        <div className={`h-full ${row.color} ${row.w} rounded-full transition-all duration-1000 ${row.d}`} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-5 bg-brand-black rounded-2xl flex items-center justify-between shadow-lg shadow-brand-yellow/10">
                  <div>
                    <p className="text-white/60 text-[10px] font-black uppercase tracking-widest">DAILY PROGRESS</p>
                    <p className="text-white font-black text-lg">85% Complete</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white text-sm font-black shadow-inner">85</div>
                </div>
              </div>

              {/* Decorative Floating Elements */}
              <div className="absolute top-1/4 right-10 w-6 h-6 rounded-full bg-brand-yellow shadow-lg animate-bounce" />
              <div className="absolute bottom-1/4 left-10 w-12 h-12 rounded-full border-4 border-brand-yellow opacity-10 animate-pulse" />
              
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 flex items-center gap-4 transition-all hover:bg-white/20">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-black bg-brand-dark shadow-lg" />)}
                </div>
                <div className="text-[11px] font-black text-white uppercase tracking-[0.2em] whitespace-nowrap">
                  20K+ Transformations
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div data-aos="fade-left" className="relative">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white text-brand-black text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-sm border border-brand-black/10">
              <svg className="w-4 h-4 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
              Slim at Home Program
            </div>
            
            <h2 className="text-brand-black mb-10 leading-[1.05] text-[clamp(3rem,6vw,4.5rem)] font-playfair font-bold">
              No Gym. No Pills.<br />
              <span className="text-brand-yellow italic font-normal">Just Real Results.</span>
            </h2>
            
            <p className="text-gray-500 text-xl leading-relaxed mb-12 max-w-xl">
              Discover a powerful yet simple way to lose weight naturally from your kitchen. 
              No expensive memberships — just nature's wisdom guided by 18+ years of expertise.
            </p>

            {/* Vertical Numbered List with Connecting Line */}
            <div className="relative space-y-12 pl-2">
              <div className="absolute top-2 left-[23px] bottom-2 w-0.5 bg-brand-yellow opacity-20" />
              
              {BENEFITS.map((b, i) => (
                <div 
                  key={i} 
                  data-aos="fade-up"
                  data-aos-delay={300 + i * 200}
                  className="relative flex items-start gap-8 group"
                >
                  <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-brand-light flex items-center justify-center text-brand-black font-black text-sm transition-all duration-500 group-hover:border-brand-black group-hover:bg-brand-black group-hover:text-brand-yellow group-hover:shadow-xl group-hover:scale-110">
                    0{i+1}
                  </div>
                  <div className="pt-1">
                    <h4 className="text-gray-900 font-black text-xl mb-2 transition-colors group-hover:text-brand-black">{b.title}</h4>
                    <p className="text-gray-500 text-base leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#plans"
              className="ripple-btn shimmer-hover mt-14 inline-flex items-center gap-4 bg-brand-black hover:bg-brand-dark text-brand-yellow font-black px-12 py-6 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 group hover:scale-105"
            >
              Discover the Plan
              <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
