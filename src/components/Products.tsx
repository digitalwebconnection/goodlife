import { useEffect, useRef } from 'react';

const PRODUCTS = [
  { 
    name: 'Wheat Bran', 
    subtitle: 'Digestive Fiber', 
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800',
    link: 'https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20inquire%20about%20*Wheat%20Bran*.'
  },
  { 
    name: 'Cholesterol Herbs', 
    subtitle: 'Heart Wellness', 
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
    link: 'https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20inquire%20about%20*Cholesterol%20Herbs*.'
  },
  { 
    name: 'Detox Herbs', 
    subtitle: 'Natural Cleanser', 
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    link: 'https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20inquire%20about%20*Detox%20Herbs*.'
  },
  { 
    name: 'Fat Burn Blend', 
    subtitle: 'Metabolic Support', 
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800',
    link: 'https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20inquire%20about%20*Fat%20Burn%20Blend*.'
  },
  { 
    name: 'Diabetic Herbs', 
    subtitle: 'Sugar Control', 
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=800',
    link: 'https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20inquire%20about%20*Diabetic%20Herbs*.'
  }
];

export default function Products() {
  return (
    <section id="products" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <p 
              data-aos="fade-down"
              className="text-brand-yellow font-black text-[9px] uppercase tracking-[0.5em] mb-4"
            >
              🛒 Natural Products
            </p>
            <h2 
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-brand-black leading-tight text-[clamp(2rem,4vw,3rem)] font-playfair font-bold"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map((p, i) => (
            <div
              key={p.name}
              data-aos="fade-up"
              data-aos-delay={100 + i * 100}
              className="group bg-white border border-gray-100 transition-all duration-700 hover:shadow-2xl"
            >
              <div className="h-64 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/40 transition-colors duration-500" />
                
                {/* Brand Overlay */}
                <div className="absolute top-6 left-6">
                  <span className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-400">Mission GoodLife</span>
                </div>

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-brand-black/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-white font-playfair italic text-lg mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{p.subtitle}</span>
                  <a 
                    href={p.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-yellow text-brand-black px-8 py-4 rounded-none text-[9px] font-black uppercase tracking-widest transition-all hover:bg-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200"
                  >
                    Inquire Now
                  </a>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-playfair font-bold text-brand-black text-2xl leading-tight group-hover:text-brand-yellow transition-colors">{p.name}</h3>
                  <span className="text-[8px] font-black text-brand-yellow uppercase tracking-widest border border-brand-yellow/30 px-2 py-1">Organic</span>
                </div>
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-[0.2em] mb-8 leading-relaxed">Pure botanical extract for natural wellness and longevity.</p>
                
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[9px] font-black text-brand-black uppercase tracking-widest flex items-center gap-2">
                    Premium Natural
                  </span>
                  <svg className="w-4 h-4 text-brand-yellow transition-all duration-500 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
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
