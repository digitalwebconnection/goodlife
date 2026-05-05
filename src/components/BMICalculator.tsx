import { useEffect, useRef, useState } from 'react';

export default function BMICalculator() {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');

  const calcBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!h || !w) return;
    let result: number;
    if (unit === 'metric') result = w / ((h / 100) * (h / 100));
    else result = (703 * w) / (h * h);
    result = Math.round(result * 10) / 10;
    setBmi(result);
    if (result < 18.5) setCategory('Underweight');
    else if (result < 25) setCategory('Normal Weight ✅');
    else if (result < 30) setCategory('Overweight ⚠️');
    else setCategory('Obese 🚨');
  };

  const getBmiColor = () => {
    if (!bmi) return '#000000';
    if (bmi < 18.5) return '#3b82f6';
    if (bmi < 25) return '#FFC107';
    if (bmi < 30) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <section id="bmi" className="section-padding bg-off-white overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p 
              data-aos="fade-down"
              className="inline-block px-5 py-2 rounded-full bg-brand-light text-brand-black font-black text-[10px] uppercase tracking-[0.3em] mb-6 shadow-sm border border-brand-black/10"
            >
              🔬 Free Health Tool
            </p>
            <h2 
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-brand-black mb-6 leading-tight text-[clamp(2.5rem,5vw,3.5rem)] font-playfair font-bold"
            >
              Know Your <span className="italic font-normal text-brand-yellow">Body Score</span>
            </h2>
            <div data-aos="zoom-in" data-aos-delay="200" className="w-24 h-1.5 bg-brand-black mx-auto rounded-full opacity-20" />
          </div>

          <div 
            data-aos="zoom-in"
            data-aos-delay="300"
            className="bg-white rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.06)] overflow-hidden border border-gray-100 flex flex-col md:flex-row transition-all duration-700 hover:shadow-[0_50px_120px_rgba(0,0,0,0.1)]"
          >
            
            {/* Left: Inputs */}
            <div className="flex-1 p-10 lg:p-14">
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-gray-900 font-black text-xl font-playfair tracking-tight">Calculator</h3>
                {/* Unit Toggle */}
                <div className="bg-gray-100 rounded-full p-1.5 flex relative w-48 shadow-inner">
                  <div 
                    className="absolute top-1.5 bottom-1.5 bg-white rounded-full shadow-md transition-all duration-500 w-[calc(50%-6px)]"
                    style={{ left: unit === 'metric' ? '6px' : 'calc(50%)' }}
                  />
                  {(['metric', 'imperial'] as const).map((u) => (
                    <button
                      key={u}
                      onClick={() => { setUnit(u); setBmi(null); setHeight(''); setWeight(''); }}
                      className={`relative z-10 flex-1 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-colors duration-500 ${unit === u ? 'text-brand-black' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      {u}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={calcBMI} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Height ({unit === 'metric' ? 'cm' : 'in'})</label>
                  <div className="relative group">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 transition-colors group-focus-within:text-brand-yellow">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 21V3M17 21V3M7 8H17M7 16H17"/></svg>
                    </div>
                    <input
                      type="number"
                      required
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder={unit === 'metric' ? '170' : '67'}
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-yellow/30 focus:bg-white rounded-2xl pl-16 pr-6 py-5 text-gray-900 font-black text-lg transition-all outline-none shadow-inner"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Weight ({unit === 'metric' ? 'kg' : 'lbs'})</label>
                  <div className="relative group">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 transition-colors group-focus-within:text-brand-yellow">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M16 16c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v8Z"/><path d="M20 12h2M2 12h2M12 2v2M12 20v2"/></svg>
                    </div>
                    <input
                      type="number"
                      required
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder={unit === 'metric' ? '70' : '154'}
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-yellow/30 focus:bg-white rounded-2xl pl-16 pr-6 py-5 text-gray-900 font-black text-lg transition-all outline-none shadow-inner"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="ripple-btn w-full bg-brand-black hover:bg-brand-yellow hover:text-brand-black text-white font-black py-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-500 transform hover:scale-[1.02] uppercase tracking-[0.2em] text-xs"
                >
                  Calculate My BMI Score
                </button>
              </form>
            </div>

            {/* Right: Gauge & Results */}
            <div className="flex-1 bg-brand-light p-10 lg:p-14 flex flex-col items-center justify-center border-l border-gray-50 relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full text-brand-black" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.1">
                  <circle cx="50" cy="50" r="40" />
                  <path d="M50 10 V90 M10 50 H90" />
                </svg>
              </div>

              {bmi === null ? (
                <div className="text-center group transition-all duration-700 hover:scale-110 relative z-10">
                  <div className="w-40 h-40 rounded-full border-4 border-dashed border-brand-yellow/30 flex items-center justify-center mb-8 bg-white/50 backdrop-blur-sm shadow-xl">
                    <span className="text-6xl animate-pulse">📊</span>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-black/60">Waiting for data</p>
                </div>
              ) : (
                <div className="w-full text-center animate-reveal relative z-10">
                  <div className="relative w-56 h-56 mx-auto mb-10">
                    {/* Gauge SVG */}
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="8" strokeDasharray="282.7" strokeDashoffset="70.6" strokeLinecap="round" />
                      <circle 
                        cx="50" cy="50" r="45" fill="none" 
                        stroke={getBmiColor()} 
                        strokeWidth="10" 
                        strokeDasharray="282.7" 
                        strokeDashoffset={282.7 - (Math.min(100, (bmi / 40) * 100) / 100) * 212} 
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/40 backdrop-blur-md rounded-full m-8 shadow-inner border border-white/50">
                      <span className="text-6xl font-black font-playfair text-gray-900 tracking-tighter">{bmi}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">BMI SCORE</span>
                    </div>
                  </div>

                  <h4 className="text-3xl font-black font-playfair mb-3 transition-all duration-500 transform scale-110" style={{ color: getBmiColor() }}>{category}</h4>
                  
                  {/* Color Band Bar */}
                  <div className="w-full h-3 bg-gray-200 rounded-full mt-12 mb-3 flex overflow-hidden shadow-inner border border-white">
                    <div className="h-full w-[18.5%] bg-blue-400" />
                    <div className="h-full w-[6.5%] bg-green-500" />
                    <div className="h-full w-[5%] bg-amber-500" />
                    <div className="h-full w-[70%] bg-red-500" />
                  </div>
                  <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-gray-400 mb-12">
                    <span>Under</span>
                    <span>Healthy</span>
                    <span>Over</span>
                    <span>Obese</span>
                  </div>

                  <a
                    href={`https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20my%20BMI%20is%20*${bmi}*.%20Help%20me%20get%20to%20Healthy%20range.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ripple-btn group inline-flex items-center gap-4 bg-white text-brand-black font-black px-10 py-4 rounded-full text-xs shadow-xl border border-brand-black/10 hover:bg-brand-black hover:text-white transition-all duration-500"
                  >
                    <svg className="w-5 h-5 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    Get Free Assessment
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
