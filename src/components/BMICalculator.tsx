import { useMemo, useState } from 'react';

type Unit = 'metric' | 'imperial';

const RANGE_SEGMENTS = [
  { label: 'Under', color: '#60a5fa', limit: '< 18.5', range: [0, 18.5] },
  { label: 'Healthy', color: '#22c55e', limit: '18.5-24.9', range: [18.5, 25] },
  { label: 'Over', color: '#f59e0b', limit: '25-29.9', range: [25, 30] },
  { label: 'High', color: '#ef4444', limit: '30+', range: [30, 60] },
];

const UNIT_CONFIG = {
  metric: {
    heightLabel: 'Height',
    heightUnit: 'cm',
    weightLabel: 'Weight',
    weightUnit: 'kg',
    minHeight: 50,
    maxHeight: 250,
    minWeight: 10,
    maxWeight: 300,
    defaultHeight: 170,
    defaultWeight: 70,
  },
  imperial: {
    heightLabel: 'Height',
    heightUnit: 'in',
    weightLabel: 'Weight',
    weightUnit: 'lbs',
    minHeight: 20,
    maxHeight: 100,
    minWeight: 20,
    maxWeight: 600,
    defaultHeight: 67,
    defaultWeight: 154,
  },
};

export default function BMICalculator() {
  const [unit, setUnit] = useState<Unit>('metric');
  const [height, setHeight] = useState<number | string>(UNIT_CONFIG.metric.defaultHeight);
  const [weight, setWeight] = useState<number | string>(UNIT_CONFIG.metric.defaultWeight);

  const config = UNIT_CONFIG[unit];

  const bmi = useMemo(() => {
    const h = Number(height);
    const w = Number(weight);
    if (!h || !w) return 0;

    const value = unit === 'metric'
      ? w / ((h / 100) * (h / 100))
      : (703 * w) / (h * h);

    return Math.round(value * 10) / 10;
  }, [height, unit, weight]);

  const result = useMemo(() => {
    if (bmi === 0) return null;
    if (bmi < 18.5) {
      return {
        label: 'Underweight',
        color: '#60a5fa',
        bg: 'bg-sky-50',
        text: 'text-sky-600',
        note: 'Consider consulting a nutritionist to help you build strength safely.',
        status: 'Needs Boost'
      };
    }

    if (bmi < 25) {
      return {
        label: 'Healthy Range',
        color: '#22c55e',
        bg: 'bg-emerald-50',
        text: 'text-emerald-600',
        note: 'Excellent! Your body composition is in a balanced and healthy range.',
        status: 'Optimal'
      };
    }

    if (bmi < 30) {
      return {
        label: 'Overweight',
        color: '#f59e0b',
        bg: 'bg-amber-50',
        text: 'text-amber-600',
        note: 'A few lifestyle adjustments could help bring you into the healthy range.',
        status: 'Action Needed'
      };
    }

    return {
      label: 'Obese',
      color: '#ef4444',
      bg: 'bg-rose-50',
      text: 'text-rose-600',
      note: 'Professional guidance is recommended for sustainable health progress.',
      status: 'Critical'
    };
  }, [bmi]);

  const pointerPosition = `${Math.min(Math.max(((bmi - 14) / (40 - 14)) * 100, 0), 100)}%`;

  const switchUnit = (nextUnit: Unit) => {
    setUnit(nextUnit);
    setHeight(UNIT_CONFIG[nextUnit].defaultHeight);
    setWeight(UNIT_CONFIG[nextUnit].defaultWeight);
  };

  return (
    <section id="bmi" className="relative overflow-hidden bg-[#fdfdfb] py-24 lg:py-32">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-brand-yellow/5 blur-[100px]" />
      <div className="absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/3 rounded-full bg-brand-yellow/5 blur-[100px]" />

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div data-aos="fade-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-2 w-2 rounded-full bg-brand-yellow" />
                <span className="text-[12px] font-black uppercase tracking-[0.4em] text-brand-yellow">
                  Wellness Calculator
                </span>
              </div>
              <h2 className="font-playfair text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight text-brand-black">
                Know Your <span className="italic font-normal text-brand-yellow">Body Score</span>
              </h2>
              <p className="mt-4 max-w-xl text-brand-gray font-light leading-relaxed">
                Enter your measurements below to receive an instant analysis of your Body Mass Index and health status.
              </p>
            </div>

            <div data-aos="fade-left" className="flex rounded-2xl bg-white p-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-yellow/10">
              {(['metric', 'imperial'] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => switchUnit(option)}
                  className={`rounded-xl px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${
                    unit === option
                      ? 'bg-brand-black text-white shadow-xl shadow-black/10'
                      : 'text-brand-gray hover:text-brand-black'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Input Section */}
            <div data-aos="fade-right" className="space-y-6">
              <div className="group relative overflow-hidden rounded-[2.5rem] border border-brand-yellow/10 bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_30px_70px_rgba(0,0,0,0.06)] hover:border-brand-yellow/30">
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-brand-black">Your Measurements</h3>
                  <p className="mt-2 text-xs text-brand-gray">Precision is key to accurate diagnostics.</p>
                </div>

                <div className="space-y-8">
                  {/* Height Field */}
                  <div className="relative">
                    <label className="mb-3 block text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray">
                      {config.heightLabel} <span className="text-brand-yellow ml-1">({config.heightUnit})</span>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="000"
                        className="w-full bg-brand-light/50 border-2 border-transparent focus:border-brand-yellow/20 focus:bg-white rounded-2xl px-6 py-5 text-2xl font-playfair font-black text-brand-black outline-none transition-all placeholder:text-brand-gray/20 no-spinner"
                      />
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-10 group-focus-within:opacity-30 transition-opacity">
                        <svg className="h-8 w-8 text-brand-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Weight Field */}
                  <div className="relative">
                    <label className="mb-3 block text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray">
                      {config.weightLabel} <span className="text-brand-yellow ml-1">({config.weightUnit})</span>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="00.0"
                        className="w-full bg-brand-light/50 border-2 border-transparent focus:border-brand-yellow/20 focus:bg-white rounded-2xl px-6 py-5 text-2xl font-playfair font-black text-brand-black outline-none transition-all placeholder:text-brand-gray/20 no-spinner"
                      />
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-10 group-focus-within:opacity-30 transition-opacity">
                        <svg className="h-8 w-8 text-brand-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div data-aos="fade-left" className="relative group lg:h-full">
              <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-brand-yellow/10 flex flex-col justify-center">
                <div className="absolute top-0 right-0 h-32 w-32 translate-x-1/4 -translate-y-1/4 rounded-full bg-brand-yellow/5 blur-[40px]" />
                
                <div className="relative z-10 flex items-center justify-between mb-8">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-gray/50">Analysis Result</span>
                  {result && (
                    <span className={`rounded-full ${result.bg} ${result.text} border border-current/10 px-3 py-1 text-[8px] font-black uppercase tracking-widest`}>
                      {result.status}
                    </span>
                  )}
                </div>

                {!result ? (
                  <div className="text-center py-12">
                    <div className="h-16 w-16 mx-auto mb-4 rounded-full border-2 border-dashed border-brand-yellow/20 flex items-center justify-center">
                      <svg className="h-6 w-6 text-brand-yellow/40 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-xs text-brand-gray/40 italic">Waiting for input...</p>
                  </div>
                ) : (
                  <div className="grid gap-8 items-center sm:grid-cols-[auto_1fr]">
                    <div className="relative flex-shrink-0">
                      <div className="relative flex h-32 w-32 flex-col items-center justify-center rounded-full border-4 border-brand-light bg-white shadow-inner">
                        <span className="text-[8px] font-black uppercase tracking-widest text-brand-yellow mb-0.5">BMI</span>
                        <span className="font-playfair text-4xl font-black text-brand-black">{bmi}</span>
                      </div>
                      <svg className="absolute inset-0 h-full w-full -rotate-90 scale-[1.08]" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="46" fill="none" stroke="#f5f5f5" strokeWidth="3" />
                        <circle
                          cx="50" cy="50" r="46" fill="none" stroke="#FFC107" strokeWidth="3"
                          strokeDasharray="289.02"
                          strokeDashoffset={289.02 - (Math.min(bmi, 40) / 40) * 289.02}
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-bold text-brand-black uppercase tracking-widest mb-1">{result.label}</h4>
                        <p className="text-xs font-light leading-relaxed text-brand-gray/70">{result.note}</p>
                      </div>

                      <div className="space-y-3">
                        <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-brand-light">
                          <div className="grid h-full grid-cols-4">
                            {RANGE_SEGMENTS.map((segment) => (
                              <div key={segment.label} style={{ backgroundColor: segment.color, opacity: 0.15 }} />
                            ))}
                          </div>
                          <div 
                            className="absolute top-0 bottom-0 w-1 bg-brand-black shadow-[0_0_8px_rgba(0,0,0,0.2)] transition-all duration-700"
                            style={{ left: pointerPosition }}
                          />
                        </div>
                        <div className="flex justify-between gap-1">
                          {RANGE_SEGMENTS.map((segment) => (
                            <div key={segment.label} className="text-center">
                              <p className="text-[7px] font-black uppercase tracking-tighter text-brand-gray/40">{segment.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <a
                    href={`https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20my%20BMI%20is%20*${bmi}*.%20Help%20me%20get%20to%20a%20healthy%20range.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-brand-black px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-brand-yellow hover:text-brand-black shadow-lg hover:shadow-brand-yellow/20"
                  >
                    <span className="relative z-10">Get Expert Advice</span>
                    <svg className="relative z-10 h-3 w-3 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
