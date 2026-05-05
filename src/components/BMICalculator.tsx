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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p 
              data-aos="fade-down"
              className="text-brand-yellow font-black text-[9px] uppercase tracking-[0.5em] mb-4"
            >
              🔬 Free Health Tool
            </p>
            <h2 
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-brand-black mb-6 leading-tight text-[clamp(2rem,4vw,3rem)] font-playfair font-bold"
            >
              Know Your <span className="italic font-normal text-brand-yellow">Body Score</span>
            </h2>
            <div data-aos="zoom-in" data-aos-delay="200" className="w-16 h-[2px] bg-brand-yellow mx-auto opacity-40" />
          </div>

          <div 
            data-aos="zoom-in"
            data-aos-delay="300"
            className="bg-white shadow-2xl flex flex-col md:flex-row transition-all duration-700 hover:shadow-3xl"
          >
            
            {/* Left: Inputs */}
            <div className="flex-1 p-10 lg:p-14 bg-white border border-gray-100">
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-brand-black font-bold text-xl font-playfair tracking-tight">Calculator</h3>
                {/* Unit Toggle */}
                <div className="flex border border-gray-200">
                  {(['metric', 'imperial'] as const).map((u) => (
                    <button
                      key={u}
                      onClick={() => { setUnit(u); setBmi(null); setHeight(''); setWeight(''); }}
                      className={`px-4 py-2 text-[8px] font-black uppercase tracking-widest transition-all ${unit === u ? 'bg-brand-black text-white' : 'bg-white text-gray-400 hover:text-gray-600'}`}
                    >
                      {u}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={calcBMI} className="space-y-8">
                <div className="flex flex-col gap-3 group">
                  <label className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-black group-focus-within:text-brand-yellow transition-colors">Height ({unit === 'metric' ? 'cm' : 'in'})</label>
                  <input
                    type="number"
                    required
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder={unit === 'metric' ? '170' : '67'}
                    className="bg-gray-50 border-b-2 border-gray-200 focus:border-brand-yellow outline-none py-3 px-0 transition-all text-sm font-medium rounded-none"
                  />
                </div>

                <div className="flex flex-col gap-3 group">
                  <label className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-black group-focus-within:text-brand-yellow transition-colors">Weight ({unit === 'metric' ? 'kg' : 'lbs'})</label>
                  <input
                    type="number"
                    required
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder={unit === 'metric' ? '70' : '154'}
                    className="bg-gray-50 border-b-2 border-gray-200 focus:border-brand-yellow outline-none py-3 px-0 transition-all text-sm font-medium rounded-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-black hover:bg-brand-yellow hover:text-brand-black text-white font-black py-5 rounded-none transition-all duration-500 uppercase tracking-[0.4em] text-[10px]"
                >
                  Calculate My BMI Score
                </button>
              </form>
            </div>

            {/* Right: Gauge & Results */}
            <div className="flex-1 bg-brand-light p-10 lg:p-14 flex flex-col items-center justify-center relative overflow-hidden border-t md:border-t-0 md:border-l border-gray-100">
              {bmi === null ? (
                <div className="text-center relative z-10">
                  <div className="w-32 h-32 border-2 border-dashed border-brand-black/10 flex items-center justify-center mb-8 bg-white/50">
                    <span className="text-4xl opacity-40">📊</span>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-black/40">Waiting for data</p>
                </div>
              ) : (
                <div className="w-full text-center animate-reveal relative z-10">
                  <div className="mb-8">
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 block mb-2">Analysis Result</span>
                    <div className="relative inline-block">
                      <span className="text-7xl lg:text-9xl font-black font-playfair text-brand-black tracking-tighter leading-none">{bmi}</span>
                      <div className="absolute -right-4 -top-2 w-3 h-3 bg-brand-yellow" />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-500 block mt-4">BMI SCORE — PERFECTLY CALCULATED</span>
                  </div>

                  <h4 className="text-2xl font-bold font-playfair mb-8 transition-all duration-500" style={{ color: getBmiColor() }}>{category}</h4>
                  
                  {/* Color Band Bar */}
                  <div className="w-full h-[6px] bg-gray-200 rounded-none mt-12 mb-4 flex overflow-hidden border border-white">
                    <div className="h-full w-[18.5%] bg-blue-400/80" />
                    <div className="h-full w-[6.5%] bg-brand-yellow" />
                    <div className="h-full w-[5%] bg-orange-400/80" />
                    <div className="h-full w-[70%] bg-red-500/80" />
                  </div>
                  <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-gray-400 mb-14 px-1">
                    <span className={bmi! < 18.5 ? 'text-brand-black' : ''}>Under</span>
                    <span className={bmi! >= 18.5 && bmi! < 25 ? 'text-brand-black underline decoration-brand-yellow decoration-2' : ''}>Healthy</span>
                    <span className={bmi! >= 25 && bmi! < 30 ? 'text-brand-black' : ''}>Over</span>
                    <span className={bmi! >= 30 ? 'text-brand-black' : ''}>Obese</span>
                  </div>

                  <a
                    href={`https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20my%20BMI%20is%20*${bmi}*.%20Help%20me%20get%20to%20Healthy%20range.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-brand-black text-brand-yellow font-black px-8 py-4 rounded-none text-[9px] uppercase tracking-[0.3em] transition-all duration-500 hover:bg-brand-yellow hover:text-brand-black"
                  >
                    Get Free Assessment
                    <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
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
