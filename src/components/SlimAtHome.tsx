import { useEffect, useRef } from 'react';

const BENEFITS = [
  { title: 'Kitchen-based natural remedies', desc: 'No chemicals or synthetic supplements.' },
  { title: 'Morning detox drinks & spices', desc: 'Activate your metabolism using simple ingredients.' },
  { title: 'Smart meal timing guidance', desc: 'Learn when to eat for maximum fat burning.' },
];

export default function SlimAtHome() {
  return (
    <section id="slim-at-home" className="py-10 lg:py-14 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Visual: Sharp & Clean Image */}
          <div className="lg:col-span-6 relative" data-aos="fade-right">
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop" 
                alt="Healthy lifestyle" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-black/20" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-10 left-10 bg-brand-yellow text-brand-black p-8 shadow-2xl transition-transform hover:-translate-y-2">
                <p className="text-4xl font-black font-playfair mb-1">20K+</p>
                <p className="text-[10px] font-black uppercase tracking-[0.3em]">Transformations</p>
              </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-yellow/10 -z-10" />
          </div>

          {/* Right Content: Clean Typography & Lists */}
          <div className="lg:col-span-6" data-aos="fade-left">
            <div className="inline-flex items-center gap-3 px-4 py-1 bg-brand-light border border-brand-black/5 text-brand-black text-[10px] font-black uppercase tracking-[0.4em] mb-8">
              Slim at Home Program
            </div>
            
            <h2 className="text-brand-black mb-8 leading-[1.1] text-[clamp(2.5rem,5vw,4rem)] font-playfair font-bold">
              No Gym. No Pills.<br />
              <span className="text-brand-yellow italic font-normal">Just Real Results.</span>
            </h2>
            
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-12 max-w-xl">
              Discover a powerful yet simple way to lose weight naturally from your kitchen. 
              No expensive memberships — just nature's wisdom guided by 18+ years of expertise.
            </p>

            {/* Sharp Benefit Cards */}
            <div className="space-y-4">
              {BENEFITS.map((b, i) => (
                <div 
                  key={i} 
                  data-aos="fade-up"
                  data-aos-delay={100 * i}
                  className="group flex items-start gap-6 p-6 border border-gray-100 hover:border-brand-yellow transition-all duration-500 hover:bg-brand-light"
                >
                  <div className="text-4xl font-playfair font-black text-brand-yellow/20 group-hover:text-brand-yellow transition-colors duration-500">
                    0{i+1}
                  </div>
                  <div>
                    <h4 className="text-brand-black font-bold text-lg mb-1">{b.title}</h4>
                    <p className="text-gray-500 text-sm">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#plans"
              className="ripple-btn group mt-12 inline-flex items-center gap-4 bg-brand-black text-brand-yellow font-black px-10 py-5 rounded-none shadow-xl transition-all duration-500 hover:bg-brand-yellow hover:text-brand-black"
            >
              Discover the Plan
              <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
