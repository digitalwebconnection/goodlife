import { useEffect, useRef } from 'react';

const PLANS = [
  {
    name: 'Weight Loss & Related Disease Plan',
    duration: '45 Days',
    price: '4,500',
    featured: false,
    features: [
      'Personalised diet & nutrition plan',
      'Kitchen-based natural remedies',
      'WhatsApp daily support',
      'Weekly progress tracking',
      'Recipe guide & meal planner',
      'Final assessment & report',
    ],
    cta: 'Place Order Now',
    href: 'https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20know%20about%20the%2045-Day%20Plan.',
  },
  {
    name: 'Weight Loss With Chronic Disease Plan',
    duration: '90 Days',
    price: '8,500',
    featured: true,
    features: [
      'Everything in 45-Day Plan',
      'Chronic disease management',
      'Advanced naturopathy protocols',
      'Bi-weekly expert video calls',
      'Specialised herbal recommendations',
      'Comprehensive follow-up',
    ],
    cta: 'Place Order Now',
    href: 'https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20know%20about%20the%2090-Day%20Plan.',
  },
  {
    name: 'Advanced 1-Year Weight Loss Plan',
    duration: '12 Months',
    price: '24,999',
    featured: false,
    features: [
      'All benefits of 90-Day Plan',
      'Full-year personalised coaching',
      'Monthly in-depth assessments',
      'Lifestyle disease reversal',
      'Priority WhatsApp support',
      'Exclusive product bundle',
    ],
    cta: 'Place Order Now',
    href: 'https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20know%20about%20the%201-Year%20Plan.',
  },
];

export default function Plans() {
  return (
    <section id="plans" className="section-padding bg-off-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-24">
          <p 
            data-aos="fade-down"
            className="inline-block px-5 py-2 rounded-full bg-brand-light text-brand-black font-black text-[10px] uppercase tracking-[0.3em] mb-6 shadow-sm border border-brand-black/10"
          >
            💛 Our Programs
          </p>
          <h2 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-brand-black mb-8 leading-[1.1] max-w-3xl mx-auto text-[clamp(2.5rem,5vw,3.5rem)] font-playfair font-bold"
          >
            Choose a Plan that Fits<br />
            <span className="text-brand-yellow italic font-normal">Your Body and Your Life</span>
          </h2>
          <div data-aos="zoom-in" data-aos-delay="200" className="w-24 h-1.5 bg-brand-black mx-auto rounded-full opacity-20" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch pt-10">
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              data-aos="fade-up"
              data-aos-delay={200 + i * 150}
              className={`relative rounded-[3rem] flex flex-col transition-all duration-700 hover:-translate-y-5 ${
                plan.featured
                  ? 'bg-gradient-to-br from-brand-black via-brand-dark to-brand-black text-white shadow-[0_40px_100px_rgba(0,0,0,0.3)] lg:scale-110 z-20 hover:shadow-[0_50px_120px_rgba(0,0,0,0.4)]'
                  : 'bg-white text-gray-800 shadow-sm border border-gray-100 hover:shadow-2xl'
              }`}
            >
              {/* Most Popular Sticker */}
              {plan.featured && (
                <div className="absolute -top-5 -right-2 bg-brand-yellow text-brand-black text-[11px] font-black px-8 py-3 rounded-l-full shadow-lg transform rotate-3 z-30">
                  ⭐ RECOMMENDED
                </div>
              )}

              <div className="p-10 lg:p-12 flex flex-col h-full relative overflow-hidden">
                {/* Decorative Pattern for featured */}
                {plan.featured && (
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <svg className="w-32 h-32" viewBox="0 0 100 100" fill="currentColor"><circle cx="50" cy="50" r="40"/><path d="M50 10v80M10 50h80"/></svg>
                  </div>
                )}

                <span className={`inline-block text-[10px] font-black uppercase tracking-[0.25em] px-5 py-2 rounded-full mb-8 w-fit shadow-inner ${
                  plan.featured ? 'bg-white/10 text-white/60 border border-white/20' : 'bg-brand-light text-brand-black'
                }`}>
                  ⏱ {plan.duration}
                </span>

                <h3 className={`font-playfair font-bold text-3xl mb-3 leading-tight ${plan.featured ? 'text-white' : 'text-brand-black'}`}>
                  {plan.name}
                </h3>

                <div className="my-10 flex flex-col">
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 ${plan.featured ? 'text-white/40' : 'text-gray-400'}`}>Starting from</span>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-2xl font-bold ${plan.featured ? 'text-white/40' : 'text-gray-400'}`}>₹</span>
                    <span className={`text-6xl lg:text-7xl font-black font-playfair tracking-tighter ${plan.featured ? 'text-brand-yellow' : 'text-brand-black'}`}>
                      {plan.price}
                    </span>
                  </div>
                </div>

                <div className={`h-px w-full mb-10 ${plan.featured ? 'bg-white/10' : 'bg-gradient-to-r from-transparent via-gray-100 to-transparent'}`} />

                <ul className="space-y-5 flex-1 mb-12">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-start gap-4 text-base leading-relaxed ${plan.featured ? 'text-white/80' : 'text-gray-600'}`}>
                      <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${plan.featured ? 'bg-brand-yellow shadow-lg' : 'bg-brand-black'}`} />
                      <span className="font-medium">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`ripple-btn shimmer-hover w-full text-center font-black py-5 rounded-2xl transition-all duration-500 shadow-xl text-sm uppercase tracking-widest ${
                    plan.featured
                      ? 'bg-brand-yellow hover:bg-white text-brand-black shadow-brand-yellow/20'
                      : 'bg-brand-black hover:bg-brand-yellow hover:text-brand-black text-white shadow-brand-black/10'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust signal bar */}
        <div data-aos="fade-up" data-aos-delay="600" className="mt-24 pt-12 border-t border-gray-100 flex flex-wrap justify-center gap-x-12 gap-y-6">
          {[
            { l: '100% Natural Healing', i: '🌿' },
            { l: 'Zero Side Effects', i: '🛡️' },
            { l: 'Expert Guidance', i: '🏆' },
            { l: 'Instant Support', i: '💬' }
          ].map(t => (
            <div key={t.l} className="flex items-center gap-3">
              <span className="text-xl">{t.i}</span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{t.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
