import { useEffect, useState } from 'react';

const TESTIMONIALS = [
  {
    name: 'Mrs. Rekha Sharma',
    location: 'Ahmedabad',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    text: 'Nice service and proper guidance,help me lot',
    tag: 'Weight Loss'
  },
  {
    name: 'Mr. Bhavin Shah',
    location: 'Ahmedabad',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    text: 'I have been using from last couple of months and I have positive impact on body.',
    tag: 'Metabolic Health'
  },
  {
    name: 'Mrs. Anjali Gupta',
    location: 'Ahmedabad',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    text: 'Amazing products and very effective. They keep in touch every day and guide us about our diet plan and monitor our progress.',
    tag: 'PCOS Management'
  },
];


const QuoteIcon = () => (
  <svg className="w-14 h-14 text-brand-lime/20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.017 21L14.017 18C14.017 16.899 15.119 15.897 16.119 15.897L16.119 14.003C13.911 14.003 12.017 15.897 12.017 18.097L12.017 21L14.017 21ZM5.017 21L5.017 18C5.017 16.899 6.119 15.897 7.119 15.897L7.119 14.003C4.911 14.003 3.017 15.897 3.017 18.097L3.017 21L5.017 21Z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-4 h-4 text-brand-teal" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1.5L5 4v5.5c0 5.25 3.75 10.25 7 11 3.25-.75 7-5.75 7-11V4l-7-2.5zm0 3.5l4 1.43V10c0 3.95-2.55 7.5-4 8.12-1.45-.62-4-4.17-4-8.12V6.43L12 5z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
  </svg>
);

export default function PremiumTestimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-12 lg:py-18 bg-[#FDFCF8] overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-teal/5 skew-x-12 translate-x-20 z-0" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-lime/5 rounded-full blur-3xl opacity-60" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20" data-aos="fade-up">
            <div className="flex items-center gap-3 text-brand-teal font-bold tracking-[0.2em] text-[10px] lg:text-xs uppercase mb-6">
              Voice of the People
            </div>
            <h2 className="text-3xl font-serif font-bold lg:text-6xl  text-brand-black leading-[1.1] max-w-3xl">
              Healing through
              <span className="  text-brand-orange block sm:inline lg:ml-3"> Nature&apos;s Wisdom.</span>
            </h2>
          </div>

          <div className="relative min-h-[450px] grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="space-y-8">
                <QuoteIcon />
                <p className="text-2xl lg:text-4xl font-medium text-slate-800 leading-snug italic font-serif">
                  "{TESTIMONIALS[active].text}"
                </p>

                <div className="flex items-center gap-4 pt-6">
                  <div className="w-16 h-16 rounded-full bg-brand-teal flex items-center justify-center text-white text-xl font-serif shadow-lg">
                    {TESTIMONIALS[active].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">{TESTIMONIALS[active].name}</h4>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <MapPinIcon />
                      {TESTIMONIALS[active].location}
                      <span className="mx-2">•</span>
                      <span className="text-brand-teal font-semibold">{TESTIMONIALS[active].tag}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square max-w-sm mx-auto">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="50%" cy="50%" r="48%"
                    className="stroke-slate-100 fill-none"
                    strokeWidth="1"
                  />
                  <circle
                    cx="50%" cy="50%" r="48%"
                    className="stroke-brand-teal fill-none"
                    strokeWidth="3"
                    strokeDasharray="100"
                    strokeDashoffset={100 - ((active + 1) / TESTIMONIALS.length) * 100}
                  />
                </svg>

                <div className="absolute inset-4 rounded-full bg-white shadow-2xl overflow-hidden border-8 border-[#FDFCF8]">
                  <img
                    src={TESTIMONIALS[active].image}
                    alt={TESTIMONIALS[active].name}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-green-100 flex items-center gap-2 shadow-lg">
                    <ShieldIcon />
                    <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest whitespace-nowrap">Verified Plan</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-12 gap-3">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${active === i ? 'w-12 bg-brand-teal' : 'w-2 bg-slate-200'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

