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
      className="relative overflow-hidden bg-white"
    >

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <p
            data-aos="fade-down"
            className="text-[#000000] font-black text-lg uppercase tracking-widest mb-2"
          >
            Verified Impact Data
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-brand-black text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold leading-tight"
          >
            Numbers That Speak <br />
            <span className="text-[#FFC300]  font-semibold">For Themselves</span>
          </h2>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="w-20 h-[2px] bg-[#FFC300] mx-auto mt-8 opacity-40"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-4 p-4 lg:p-0">
          {STATS.map((stat, i) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const count = useCounter(stat.target, visible);
            const isCompleted = count >= stat.target;

            return (
              <div
                key={stat.id}
                data-aos="fade-up"
                data-aos-delay={300 + i * 150}
                className="relative bg-[#FFC300]/20 group transition-all duration-500 border border-gray-100 hover:border-brand-black hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:z-10"
              >
                <div className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-30 group-hover:opacity-100 transition-opacity duration-700">
                </div>
                <div className="relative z-10 py-8 px-6 flex flex-col items-center lg:items-start w-full h-full">
                  {/* <div className="flex items-center gap-2 transition-opacity mb-8">
                    <div className="w-1.5 h-1.5 rounded-none bg-[#FFC300]" />
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-black/80">Impact Marker</p>
                  </div> */}

                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2 transition-colors group-hover:text-brand-black">
                    {stat.label}
                  </p>

                  <div className="font-playfair text-5xl lg:text-6xl leading-none font-bold text-brand-black tracking-tighter mb-8 relative">
                    <span className="relative z-10">
                      {stat.target >= 1000 ? (count >= 1000 ? `${Math.floor(count / 1000)}k` : count) : count}
                    </span>
                    <span className="text-xl lg:text-2xl text-[#FFC300] ml-1 italic drop-shadow-sm">{stat.suffix}</span>
                  </div>

                  {/* Animated Accent Bar */}
                  <div className="w-full h-px bg-white/5 relative overflow-hidden mt-auto">
                    <div
                      className="absolute inset-0 bg-linear-to-r from-transparent via-[#FFC300] to-transparent transition-all duration-1500 ease-out"
                      style={{
                        transform: isCompleted ? 'translateX(0)' : 'translateX(-100%)',
                        transitionDelay: `${i * 100}ms`
                      }}
                    />
                  </div>

                  <div className="flex items-center gap-2 mt-6 transition-all duration-700">
                    <svg className="w-4 h-4 text-[#FFC300]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                    <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest">Verified Success</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
