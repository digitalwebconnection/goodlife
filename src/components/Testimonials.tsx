import { useEffect, useState } from 'react';

const TESTIMONIALS = [
  { 
    name: 'Mrs. Rekha Sharma', 
    location: 'Ahmedabad',
    text: 'I lost 12kg in just 3 months following Sanjay sir’s naturopathy plan. No gym, just kitchen-based detox and the right meal timing. It’s life-changing!', 
    rating: 5,
    tag: 'Weight Loss'
  },
  { 
    name: 'Mr. Rajesh Patel', 
    location: 'Surat',
    text: 'My blood sugar levels have stabilized and I feel more energetic than ever. The detox herbs are incredibly effective and 100% natural.', 
    rating: 5,
    tag: 'Metabolic Health'
  },
  { 
    name: 'Mrs. Anjali Gupta', 
    location: 'Mumbai',
    text: 'The 90-day plan reversed my PCOS symptoms naturally. I never thought home remedies could be this powerful. Highly recommend Mission GoodLife!', 
    rating: 5,
    tag: 'PCOS Management'
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="relative section-padding overflow-hidden bg-white">
      {/* Background Cinematic Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full text-green-primary" viewBox="0 0 100 100" fill="currentColor">
          <pattern id="leaf-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M10 5 Q12 10 10 15 Q8 10 10 5" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Branding & Trust */}
          <div data-aos="fade-right">
            <p className="inline-block px-5 py-2 rounded-full bg-green-sage text-green-primary font-black text-[10px] uppercase tracking-[0.3em] mb-8 shadow-sm border border-green-primary/10">
              💎 Success Stories
            </p>
            <h2 className="text-gray-900 mb-10 leading-[1.05] text-[clamp(3rem,6vw,4.5rem)] font-playfair font-bold">
              Real People.<br />
              <span className="italic font-normal text-amber-accent">Real Transformations.</span>
            </h2>
            
            <div className="flex items-center gap-8 mb-16 pt-8 border-t border-gray-100">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-gray-900 font-playfair">4.9/5</span>
                <div className="flex text-amber-accent mt-2">
                  {[1,2,3,4,5].map(i => <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>)}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-3">Google Rating</span>
              </div>
              <div className="w-px h-16 bg-gray-100" />
              <div className="flex flex-col">
                <span className="text-4xl font-black text-gray-900 font-playfair">190+</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-5">Verified Reviews</span>
              </div>
            </div>

            <div className="flex gap-4">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-700 ${active === i ? 'w-16 bg-green-primary' : 'w-4 bg-gray-200 hover:bg-gray-300'}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Premium Carousel Card */}
          <div data-aos="fade-left" data-aos-delay="200" className="relative group">
            {/* Background Glow */}
            <div className="absolute -inset-10 bg-amber-accent/5 blur-[120px] rounded-full animate-pulse" />
            
            <div className="relative bg-white rounded-[4rem] p-12 lg:p-20 shadow-[0_50px_120px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden min-h-[500px] flex flex-col justify-center">
              
              {/* Quote Mark Decoration */}
              <div className="absolute top-10 left-10 text-[15rem] font-playfair text-green-primary/5 leading-none pointer-events-none select-none">“</div>

              <div key={active} className="animate-reveal relative z-10">
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-20 h-20 rounded-full bg-green-sage2/30 flex items-center justify-center text-4xl shadow-inner border border-white">
                    {TESTIMONIALS[active].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-gray-900 font-playfair tracking-tight">{TESTIMONIALS[active].name}</h4>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-green-primary">{TESTIMONIALS[active].location}</p>
                  </div>
                  <div className="ml-auto hidden sm:flex px-4 py-1.5 rounded-full bg-green-sage text-green-primary text-[9px] font-black uppercase tracking-widest border border-green-primary/10">
                    {TESTIMONIALS[active].tag}
                  </div>
                </div>

                <p className="text-xl lg:text-3xl font-medium text-gray-700 leading-relaxed mb-12 italic font-playfair">
                  "{TESTIMONIALS[active].text}"
                </p>

                <div className="flex items-center gap-4 py-8 border-t border-gray-50">
                  <div className="flex text-amber-accent">
                    {[1,2,3,4,5].map(i => <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>)}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Verified Client Success</span>
                </div>
              </div>

              {/* Floating Google Icon */}
              <div className="absolute bottom-10 right-12 w-10 h-10 opacity-30 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0">
                <svg viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
