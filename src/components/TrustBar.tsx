const TRUST_ITEMS = [
  '20,000+ Transformations',
  '18+ Years Expert Healing',
  '4.9/5 Google Rating',
  '100% Natural — No Pills',
  'Wellness Awards Winner',
  'Specialized Programs',
  'Home-Based — No Gym',
];

export default function TrustBar() {
  const items = [...TRUST_ITEMS, ...TRUST_ITEMS, ...TRUST_ITEMS]; 

  return (
    <section id="trust" className="overflow-hidden py-8 bg-brand-black border-y border-white/5 relative z-20">
      <div className="absolute inset-0 bg-brand-yellow/5 pointer-events-none" />
      <div className="marquee-track flex items-center">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-12 px-12 group">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow transition-all duration-700 group-hover:bg-brand-yellow group-hover:text-brand-black group-hover:scale-110">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap transition-colors group-hover:text-brand-yellow">
                {item}
              </span>
            </div>
            
            {/* Separator */}
            <div className="flex items-center opacity-20 group-hover:opacity-100 transition-opacity duration-700 scale-75 group-hover:scale-100">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
