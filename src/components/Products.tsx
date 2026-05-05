import { useEffect, useRef } from 'react';

const PRODUCTS = [
  { 
    name: 'Wheat Bran', 
    subtitle: 'Digestive Fiber', 
    color: 'from-amber-50 to-amber-100', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20c.5-1.5 1-4 3-5s6-1.5 8-1 4 2.5 5 4.5" /><path d="M7 11c1-1 3-3 3-5s-1-3-3-4" /><path d="M12 7c1-1 3-1.5 5-1s2 1 2 2.5c0 2-2 3.5-5 4" /><path d="M16 16c1-1 4-1 6-1" />
      </svg>
    )
  },
  { 
    name: 'Cholesterol Herbs', 
    subtitle: 'Heart Wellness', 
    color: 'from-red-50 to-red-100', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.505 4.044 3 5.5L12 21l7-7Z" />
      </svg>
    )
  },
  { 
    name: 'Detox Herbs', 
    subtitle: 'Natural Cleanser', 
    color: 'from-teal-50 to-teal-100', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 18 20" /><path d="M9.1 11a5 5 0 0 1 4.3-1.6" /><path d="M10 13.5a2.5 2.5 0 0 1 2-1.5" />
      </svg>
    )
  },
  { 
    name: 'Fat Burn Blend', 
    subtitle: 'Metabolic Support', 
    color: 'from-orange-50 to-orange-100', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.203 1.15-3.003L8.5 14.5Z" />
      </svg>
    )
  },
  { 
    name: 'Diabetic Herbs', 
    subtitle: 'Sugar Control', 
    color: 'from-green-50 to-emerald-100', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" />
      </svg>
    )
  },
];

export default function Products() {
  return (
    <section id="products" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <p 
              data-aos="fade-down"
              className="inline-block px-5 py-2 rounded-full bg-brand-light text-brand-black font-black text-[10px] uppercase tracking-[0.3em] mb-6 shadow-sm border border-brand-black/10"
            >
              🛒 Natural Products
            </p>
            <h2 
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-brand-black leading-[1.1] text-[clamp(2.5rem,5vw,4rem)] font-playfair font-bold"
            >
              Nature's <span className="italic font-normal text-brand-yellow">Healing Apothecary</span>
            </h2>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=919979740361"
            data-aos="fade-left"
            data-aos-delay="200"
            className="hidden md:flex items-center gap-3 text-brand-black font-black text-xs uppercase tracking-[0.2em] group"
          >
            View Full Catalogue
            <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {PRODUCTS.map((p, i) => (
            <div
              key={p.name}
              data-aos="fade-up"
              data-aos-delay={100 + i * 150}
              className="group bg-white rounded-[3rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-4"
            >
              <div className={`h-56 flex items-center justify-center relative bg-gradient-to-br ${p.color} transition-all duration-700 group-hover:bg-gradient-to-tr`}>
                <div className="w-24 h-24 text-gray-900 opacity-40 transition-all duration-1000 group-hover:scale-125 group-hover:rotate-12 group-hover:opacity-60">
                  {p.icon}
                </div>
                
                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-brand-black/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-10 group-hover:translate-y-0">
                  <a 
                    href="https://api.whatsapp.com/send?phone=919979740361" 
                    className="bg-brand-yellow text-brand-black px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl transition-all hover:scale-110 active:scale-95"
                  >
                    Inquire Now
                  </a>
                </div>
              </div>

              <div className="p-8">
                <h3 className="font-playfair font-bold text-brand-black text-xl mb-2 leading-tight group-hover:text-brand-yellow transition-colors">{p.name}</h3>
                <p className="text-gray-400 text-[10px] uppercase font-black tracking-[0.2em] mb-6">{p.subtitle}</p>
                <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-[10px] font-black text-brand-black uppercase tracking-widest flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
                    Premium Natural
                  </span>
                  <svg className="w-5 h-5 text-gray-300 transition-all duration-500 group-hover:text-brand-yellow group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" className="mt-16 md:hidden">
          <a
            href="https://api.whatsapp.com/send?phone=919979740361"
            className="w-full flex items-center justify-center gap-3 bg-green-primary text-white font-black py-6 rounded-[2rem] shadow-xl text-xs uppercase tracking-widest"
          >
            Full Catalogue <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
