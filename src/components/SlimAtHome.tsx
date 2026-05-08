import { useState, useEffect } from 'react';

const BENEFITS = [
  {
    title: 'Kitchen-based natural remedies',
    desc: 'No chemicals or synthetic supplements.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Morning detox drinks & spices',
    desc: 'Activate your metabolism using simple ingredients.',
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Smart meal timing guidance',
    desc: 'Learn when to eat for maximum fat burning.',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop'
  },
];

export default function SlimAtHome() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % BENEFITS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="slim-at-home" className="py-10 lg:py-8 bg-white overflow-hidden">
      <div className="container-custom max-w-7xl mx-auto text-center items-center justify-center">
        <div className="inline-flex gap-3 items-center justify-center px-4 py-1 bg-brand-light border border-brand-black/5 text-brand-black text-[10px] font-black uppercase tracking-[0.4em] mb-8">
          Slim at Home Program
        </div>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center text-left">

          {/* Left Visual: Sharp & Clean Image */}
          <div className="lg:col-span-6 relative" data-aos="fade-right">
            <div className="relative aspect-square overflow-hidden shadow-2xl  shadow-black">
              {BENEFITS.map((benefit, idx) => (
                <img
                  key={idx}
                  src={benefit.image}
                  alt={benefit.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${idx === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                    }`}
                />
              ))}
              <div className="absolute inset-0 bg-brand-black/20" />

              {/* Floating Badge */}
              <div className="absolute  bottom-6 left-6 shadow-2xl shadow-black bg-brand-orange text-white p-6  transition-transform hover:-translate-y-2">
                <p className="text-4xl font-black font-playfair mb-1">20K+</p>
                <p className="text-[10px] font-black uppercase tracking-[0.3em]">Transformations</p>
              </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -top-10 -left-10 w-40 shadow-2xl shadow-black h-40 bg-brand-orange/30 -z-10" />
          </div>

          {/* Right Content: Clean Typography & Lists */}
          <div className="lg:col-span-6" data-aos="fade-left">

            <h2 className="text-brand-black mb-6 leading-[1.1] text-5xl font-playfair font-bold">
              No Gym. No Pills.<br />
              <span className="text-brand-orange font-sans font-normal">Just Real Results.</span>
            </h2>

            <p className="text-gray-900 text-sm lg:text-base leading-relaxed mb-8 max-w-xl">
              Discover a powerful yet simple way to lose weight naturally from your kitchen.
              No expensive memberships — just nature's wisdom guided by 18+ years of expertise.
            </p>

            {/* Sharp Benefit Cards */}
            <div className="space-y-3">
              {BENEFITS.map((b, i) => (
                <div
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="flex items-center gap-6 p-4 rounded-xl border border-gray-100 hover:border-brand-orange/30 hover:bg-brand-orange/5 transition-all duration-300 cursor-pointer group"
                >
                  <div className={`text-4xl font-playfair font-black transition-colors duration-500 ${i === activeIndex ? 'text-brand-orange' : 'text-brand-orange/20 group-hover:text-brand-orange/50'
                    }`}>
                    0{i + 1}
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
              className="ripple-btn group mt-8 rounded-lg inline-flex items-center gap-4 bg-brand-black text-brand-orange font-black px-8 py-4  shadow-xl transition-all duration-500 hover:bg-brand-orange hover:text-white"
            >
              Discover the Plan
              <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
