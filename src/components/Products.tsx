const PRODUCTS = [
  {
    name: 'Cholesterol Herbs',
    subtitle: 'Heart Wellness',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
    link: 'https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20inquire%20about%20*Cholesterol%20Herbs*.',
  },
  {
    name: 'Detox Herbs',
    subtitle: 'Natural Cleanser',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    link: 'https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20inquire%20about%20*Detox%20Herbs*.',
  },
  {
    name: 'Fat Burn Blend',
    subtitle: 'Metabolic Support',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800',
    link: 'https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20inquire%20about%20*Fat%20Burn%20Blend*.',
  },
  {
    name: 'Diabetic Herbs',
    subtitle: 'Sugar Control',
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=800',
    link: 'https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20inquire%20about%20*Diabetic%20Herbs*.',
  },
  {
    name: 'Wheat Bran',
    subtitle: 'Organic',
    description: 'Pure botanical support crafted for natural wellness and everyday vitality.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
    link: 'https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20inquire%20about%20*Wheat%20Bran*.',
  },
  {
    name: 'PCOS Balance',
    subtitle: 'Hormonal Support',
    image: 'https://images.unsplash.com/photo-1540331547168-8b63109225b7?auto=format&fit=crop&q=80&w=800',
    link: 'https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20inquire%20about%20*PCOS%20Balance*.',
  }
];

export default function Products() {
  return (
    <section id="products" className="overflow-hidden bg-[#fbfbf8] py-12 lg:py-16">
      <div className="container-custom">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p
              data-aos="fade-down"
              className="mb-4 text-[9px] font-black uppercase tracking-[0.5em] text-brand-yellow"
            >
              Natural Products
            </p>
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-playfair text-[clamp(2.1rem,4vw,3.25rem)] font-bold leading-tight text-brand-black"
            >
              Nature's <span className="font-normal italic text-brand-yellow">Healing Apothecary</span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="160" className="mt-4 max-w-xl text-sm leading-relaxed text-gray-500">
              Carefully selected wellness blends for digestion, metabolism, heart health, detox, and daily balance.
            </p>
          </div>

          <a
            href="https://api.whatsapp.com/send?phone=919979740361"
            data-aos="fade-left"
            data-aos-delay="200"
            className="group hidden items-center gap-4 rounded-full bg-brand-black px-6 py-4 text-[10px] font-black uppercase tracking-[0.24em] text-brand-yellow transition-all duration-500 hover:bg-brand-yellow hover:text-brand-black md:inline-flex"
          >
            View Catalogue
            <span className="h-px w-7 bg-current transition-transform duration-500 group-hover:translate-x-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <article
              key={product.name}
              data-aos="fade-up"
              data-aos-delay={100 + i * 80}
              className="product-card group"
            >
              <div className="relative aspect-[1.35] overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-2 text-[8px] font-black uppercase tracking-[0.22em] text-brand-black backdrop-blur">
                  Mission GoodLife
                </div>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-yellow text-brand-black shadow-[0_12px_28px_rgba(0,0,0,0.22)] transition-all duration-500 group-hover:scale-110 group-hover:bg-white"
                  aria-label={`Inquire about ${product.name}`}
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="p-5">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-[8px] font-black uppercase tracking-[0.26em] text-brand-yellow">
                      {product.subtitle}
                    </p>
                    <h3 className="font-playfair text-2xl font-bold leading-tight text-brand-black transition-colors duration-500 group-hover:text-[#b98500]">
                      {product.name}
                    </h3>
                  </div>
                  <span className="rounded-full border border-brand-yellow/40 bg-[#fff8df] px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.18em] text-[#9a7000]">
                    Organic
                  </span>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-gray-500">
                  {product.description || 'Pure botanical support crafted for natural wellness and everyday vitality.'}
                </p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-[9px] font-black uppercase tracking-[0.22em] text-brand-black">
                    Premium Natural
                  </span>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[9px] font-black uppercase tracking-[0.2em] text-[#b98500] transition-colors hover:text-brand-black"
                  >
                    Inquire
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div data-aos="fade-up" className="mt-8 md:hidden">
          <a
            href="https://api.whatsapp.com/send?phone=919979740361"
            className="flex w-full items-center justify-center gap-4 rounded-full bg-brand-black py-4 text-[10px] font-black uppercase tracking-[0.24em] text-brand-yellow shadow-xl"
          >
            Full Catalogue
            <span className="h-px w-7 bg-current" />
          </a>
        </div>
      </div>
    </section>
  );
}
