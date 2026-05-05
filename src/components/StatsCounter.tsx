import { useEffect, useRef, useState } from 'react';

const STATS = [
  { target: 20000, suffix: '+', label: 'Transformations', id: 'impact-1' },
  { target: 18, suffix: '+', label: 'Years Experience', id: 'impact-2' },
  { target: 4.9, suffix: '/5', label: 'Google Rating', id: 'impact-3' },
  { target: 95, suffix: '%', label: 'Success Rate', id: 'impact-4' },
];

function useCounter(target: number, isVisible: boolean, duration = 2500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const isFloat = target % 1 !== 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { 
        setCount(target); 
        clearInterval(timer); 
      } else {
        setCount(isFloat ? Math.round(start * 10) / 10 : Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);
  return count;
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={ref}
      className="relative section-padding overflow-hidden bg-brand-black"
    >
      {/* Cinematic Background Composition */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30" 
             style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 left-0 w-[80%] h-[80%] opacity-20 blur-[150px]" 
             style={{ background: 'radial-gradient(ellipse at 20% 20%, rgba(255,193,7,0.5), transparent)' }} />
        <div className="absolute bottom-0 right-0 w-[80%] h-[80%] opacity-20 blur-[150px]" 
             style={{ background: 'radial-gradient(ellipse at 80% 80%, rgba(255,193,7,0.3), transparent)' }} />
        <div className="noise-overlay opacity-[0.08]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-28">
          <p 
            data-aos="fade-down"
            className="text-brand-light/40 text-[10px] font-black uppercase tracking-[0.5em] mb-6"
          >
            Verified Impact Data
          </p>
          <h2 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold leading-tight"
          >
            Numbers That Speak <br />
            <span className="italic font-normal text-brand-yellow/80">For Themselves</span>
          </h2>
          <div 
            data-aos="zoom-in" 
            data-aos-delay="200"
            className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-yellow to-transparent mx-auto mt-10"
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 lg:divide-x divide-white/5 border-y border-white/5">
          {STATS.map((stat, i) => {
            const count = useCounter(stat.target, visible);
            const isCompleted = count >= stat.target;
            
            return (
              <div 
                key={stat.id} 
                data-aos="fade-up"
                data-aos-delay={300 + i * 150}
                className="relative py-16 px-10 flex flex-col items-center lg:items-start group transition-all duration-700 hover:bg-white/[0.02]"
              >
                <div className="absolute top-6 left-10 flex items-center gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white">Impact Marker</p>
                </div>

                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-light/40 mb-6 transition-colors group-hover:text-brand-light mt-4">
                  {stat.label}
                </p>
                
                <div className="font-playfair text-[5.5rem] lg:text-[8.5rem] leading-none font-bold text-white/95 tracking-tighter mb-6 relative">
                  <span className="relative z-10">
                    {stat.target >= 1000 ? (count >= 1000 ? `${Math.floor(count / 1000)}k` : count) : count}
                  </span>
                  <span className="text-3xl lg:text-5xl text-brand-yellow/60 ml-2 italic">{stat.suffix}</span>
                  {/* Backdrop Number Shadow */}
                  <div className="absolute -top-4 -left-4 text-white/[0.03] text-[10rem] pointer-events-none select-none z-0">
                    {stat.target >= 1000 ? 'K' : '#'}
                  </div>
                </div>

                {/* Animated Accent Bar */}
                <div className="w-full h-[1px] bg-white/5 relative overflow-hidden mt-auto">
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-yellow to-transparent transition-all duration-1500 ease-out" 
                    style={{ 
                      transform: isCompleted ? 'translateX(0)' : 'translateX(-100%)',
                      transitionDelay: `${i * 100}ms`
                    }} 
                  />
                </div>

                <div className="flex items-center gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  <svg className="w-4 h-4 text-brand-yellow" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                  <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">Verified Success</span>
                </div>
              </div>
            );
          })}
        </div>

        <div 
          data-aos="fade-up"
          data-aos-delay="1000"
          className="mt-24 text-center"
        >
          <a 
            href="#testimonials" 
            className="text-white/30 hover:text-white transition-colors text-[11px] font-black uppercase tracking-[0.4em] flex flex-col items-center gap-4 group"
          >
            <span>Explore Success Stories</span>
            <div className="w-px h-16 bg-gradient-to-b from-brand-yellow to-transparent group-hover:h-24 transition-all duration-700" />
          </a>
        </div>
      </div>
    </section>
  );
}
