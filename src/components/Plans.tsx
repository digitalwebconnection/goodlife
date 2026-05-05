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
    ],
    cta: 'Place Order Now',
    href: 'https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20know%20about%20the%201-Year%20Plan.',
  },
];

export default function Plans() {
  return (
    <section id="plans" className="section-padding bg-off-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16 lg:mb-24">
          <p 
            data-aos="fade-down"
            className="text-brand-yellow font-black text-[9px] uppercase tracking-[0.5em] mb-4"
          >
            💛 Our Programs
          </p>
          <h2 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-brand-black mb-8 leading-[1.1] max-w-3xl mx-auto text-[clamp(2.5rem,5vw,4rem)] font-playfair font-bold"
          >
            Choose a Plan that Fits<br />
            <span className="text-brand-yellow italic font-normal">Your Body and Your Life</span>
          </h2>
          <div data-aos="zoom-in" data-aos-delay="200" className="w-16 h-[2px] bg-brand-yellow mx-auto opacity-40" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch pt-6">
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              data-aos="fade-up"
              data-aos-delay={200 + i * 150}
              className={`relative flex flex-col transition-all duration-700 hover:-translate-y-4 ${
                plan.featured
                  ? 'bg-brand-black text-white shadow-2xl z-20'
                  : 'bg-white text-brand-black border border-gray-100 shadow-xl'
              }`}
            >
              {/* Badge */}
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-brand-yellow text-brand-black text-[9px] font-black px-6 py-2 uppercase tracking-widest z-30">
                  ★ Recommended
                </div>
              )}

              <div className="p-6 lg:p-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-brand-yellow text-lg">⏱</span>
                  <span className={`text-[9px] font-black uppercase tracking-[0.3em] ${plan.featured ? 'text-white/60' : 'text-gray-400'}`}>
                    {plan.duration}
                  </span>
                </div>

                <h3 className={`font-playfair font-bold text-xl mb-4 leading-tight min-h-[3rem] ${plan.featured ? 'text-white' : 'text-brand-black'}`}>
                  {plan.name}
                </h3>

                <div className="mb-8 pt-6 border-t border-gray-100/10">
                  <p className={`text-[9px] font-black uppercase tracking-[0.2em] mb-2 ${plan.featured ? 'text-white/40' : 'text-gray-400'}`}>Starting from</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold text-brand-yellow">₹</span>
                    <span className={`text-4xl lg:text-5xl font-black font-playfair tracking-tighter ${plan.featured ? 'text-white' : 'text-brand-black'}`}>
                      {plan.price}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-4">
                      <div className={`mt-1.5 w-1 h-1 rounded-none flex-shrink-0 ${plan.featured ? 'bg-brand-yellow' : 'bg-brand-black'}`} />
                      <span className={`text-sm leading-relaxed ${plan.featured ? 'text-white/70' : 'text-gray-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden font-black py-5 text-center text-[10px] uppercase tracking-[0.3em] transition-all duration-500 ${
                    plan.featured
                      ? 'bg-brand-yellow text-brand-black hover:bg-white'
                      : 'bg-brand-black text-brand-yellow hover:bg-brand-yellow hover:text-brand-black'
                  }`}
                >
                  <span className="relative z-10">{plan.cta}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust signal bar */}
        <div data-aos="fade-up" data-aos-delay="600" className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap justify-center gap-x-12 gap-y-6">
          {[
            { l: '100% Natural Healing', i: '✦' },
            { l: 'Zero Side Effects', i: '✦' },
            { l: 'Expert Guidance', i: '✦' },
            { l: 'Instant Support', i: '✦' }
          ].map(t => (
            <div key={t.l} className="flex items-center gap-3">
              <span className="text-brand-yellow text-lg">{t.i}</span>
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">{t.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
