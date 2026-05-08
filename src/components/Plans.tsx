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

const TRUST_SIGNALS = [
  '100% Natural Healing',
  'Zero Side Effects',
  'Expert Guidance',
  'Instant Support',
];

export default function Plans() {
  return (
    <section id="plans" className="overflow-hidden bg-off-white py-12 lg:py-16">
      <div className="container-custom">
        <div className="mb-10 text-center">
          <p
            data-aos="fade-down"
            className="mb-4 text-[12px] font-black uppercase tracking-[0.5em] text-[#FFC300]"
          >
            Our Programs
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="mx-auto mb-8 max-w-3xl font-playfair text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] text-brand-black"
          >
            Choose a Plan that Fits<br />
            <span className="font-normal italic text-[#FFC300]">Your Body and Your Life</span>
          </h2>
          <div data-aos="zoom-in" data-aos-delay="200" className="mx-auto h-[2px] w-16 bg-[#FFC300] opacity-40" />
        </div>

        <div className="grid items-stretch gap-5 pt-2 lg:grid-cols-3 lg:gap-6">
          {PLANS.map((plan, i) => (
            <article
              key={plan.name}
              data-aos="fade-up"
              data-aos-delay={200 + i * 150}
              className={`group relative flex min-h-full flex-col overflow-hidden rounded-lg transition-all duration-500 hover:-translate-y-2 ${plan.featured
                  ? 'bg-brand-black text-white shadow-[0_24px_70px_rgba(0,0,0,0.28)] ring-1 ring-[#FFC300]/50 lg:-mt-3 lg:mb-3'
                  : 'bg-white text-brand-black shadow-[0_18px_55px_rgba(0,0,0,0.08)] ring-1 ring-gray-100 hover:shadow-[0_26px_70px_rgba(0,0,0,0.14)] hover:ring-[#FFC300]/45'
                }`}
            >
              <div className={`h-2 w-full ${plan.featured ? 'bg-[#FFC300]' : 'bg-[linear-gradient(90deg,#000_0%,#000_58%,#FFC107_58%,#FFC107_100%)]'}`} />

              {plan.featured && (
                <div className="absolute right-4 top-4 rounded bg-[#FFC300] px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.22em] text-brand-black shadow-lg">
                  Recommended
                </div>
              )}

              <div className={`pointer-events-none absolute inset-x-0 top-2 h-24 ${plan.featured
                  ? 'bg-[radial-gradient(circle_at_18%_20%,rgba(255,193,7,0.2),transparent_36%),linear-gradient(135deg,rgba(255,193,7,0.12),transparent_55%)]'
                  : 'bg-[radial-gradient(circle_at_18%_20%,rgba(255,193,7,0.16),transparent_34%),linear-gradient(135deg,rgba(0,0,0,0.04),transparent_56%)]'
                }`} />
              <div className="pointer-events-none absolute -right-12 top-12 h-32 w-32 rounded-full border border-[#FFC300]/20 transition-transform duration-700 group-hover:scale-125" />
              <div className="pointer-events-none absolute -right-6 top-20 h-14 w-14 rounded-full bg-[#FFC300]/10 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-[#FFC300]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex h-full flex-col p-5 lg:p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <span
                      className={`mb-3 inline-flex h-8 w-8 items-center justify-center rounded border text-xs font-black shadow-sm ${plan.featured
                          ? 'border-[#FFC300]/50 bg-[#FFC300] text-brand-black'
                          : 'border-brand-black bg-brand-black text-[#FFC300]'
                        }`}
                    >
                      {i + 1}
                    </span>
                  </div>
                </div>

                <div className="mb-4 min-h-[3.25rem]">
                  <p className={`mb-2 text-[9px] font-black uppercase tracking-[0.3em] ${plan.featured ? 'text-[#FFC300]' : 'text-gray-400'}`}>
                    {plan.duration}
                  </p>
                  <h3 className={`font-playfair text-[1.35rem] font-bold leading-[1.08] lg:text-2xl ${plan.featured ? 'text-white' : 'text-brand-black'}`}>
                    {plan.name}
                  </h3>
                </div>

                <div className={`mb-5 rounded-md border px-4 py-3.5 ${plan.featured
                    ? 'border-white/10 bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
                    : 'border-gray-100 bg-gray-50/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]'
                  }`}>
                  <p className={`mb-1.5 text-[8px] font-black uppercase tracking-[0.24em] ${plan.featured ? 'text-white/45' : 'text-gray-400'}`}>
                    Starting from
                  </p>
                  <div className="flex items-end justify-between gap-3">
                    <div className="flex items-end gap-2">
                      <span className="pb-1 text-base font-black text-[#FFC300]">Rs</span>
                      <span className={`font-playfair text-4xl font-black leading-none tracking-normal ${plan.featured ? 'text-white' : 'text-brand-black'}`}>
                        {plan.price}
                      </span>
                    </div>
                    <span className={`hidden rounded px-2 py-1 text-[8px] font-black uppercase tracking-[0.18em] sm:inline-flex ${plan.featured ? 'bg-[#FFC300] text-brand-black' : 'bg-white text-brand-black ring-1 ring-gray-200'
                      }`}>
                      Plan
                    </span>
                  </div>
                </div>

                <ul className="mb-5 flex-1 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span
                        className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded text-[9px] font-black ${plan.featured
                            ? 'bg-[#FFC300] text-brand-black'
                            : 'bg-brand-black text-[#FFC300]'
                          }`}
                      >
                        +
                      </span>
                      <span className={`text-xs leading-relaxed lg:text-[13px] ${plan.featured ? 'text-white/72' : 'text-gray-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={`rounded-md p-1 ${plan.featured ? 'bg-white/10' : 'bg-gray-50'}`}>
                  <a
                    href={plan.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative flex items-center justify-center gap-3 overflow-hidden rounded py-3.5 text-center text-[9px] font-black uppercase tracking-[0.24em] transition-all duration-500 ${plan.featured
                        ? 'bg-[#FFC300] text-brand-black hover:bg-white'
                        : 'bg-brand-black text-[#FFC300] hover:bg-[#FFC300] hover:text-brand-black'
                      }`}
                  >
                    <span className="relative z-10">{plan.cta}</span>
                    <span className="relative z-10 h-px w-5 bg-current transition-transform duration-500 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div data-aos="fade-up" data-aos-delay="600" className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 border-t border-gray-100 pt-6">
          {TRUST_SIGNALS.map((signal) => (
            <div key={signal} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-[#FFC300]" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">{signal}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
