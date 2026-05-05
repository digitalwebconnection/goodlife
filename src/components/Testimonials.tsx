import { useState } from 'react';

const TESTIMONIALS = [
  { 
    name: 'Mrs. Rekha Sharma', 
    location: 'Ahmedabad',
    text: 'I lost 12kg in just 3 months following Sanjay sir’s naturopathy plan. No gym, just kitchen-based detox and the right meal timing. It’s life-changing!', 
    tag: 'Weight Loss'
  },
  { 
    name: 'Mr. Rajesh Patel', 
    location: 'Surat',
    text: 'My blood sugar levels have stabilized and I feel more energetic than ever. The detox herbs are incredibly effective and 100% natural.', 
    tag: 'Metabolic Health'
  },
  { 
    name: 'Mrs. Anjali Gupta', 
    location: 'Mumbai',
    text: 'The 90-day plan reversed my PCOS symptoms naturally. I never thought home remedies could be this powerful. Highly recommend Mission GoodLife!', 
    tag: 'PCOS Management'
  },
  { 
    name: 'Mr. Vikram Singh', 
    location: 'Delhi',
    text: 'Simplified my daily routine and improved my gut health significantly. The kitchen-based approach is so easy to follow and sustainable.', 
    tag: 'Gut Health'
  },
  { 
    name: 'Mrs. Priya Mehta', 
    location: 'Pune',
    text: 'Lost 8kg and my skin is glowing! Sanjay sirs guidance on water intake and meal timing is pure magic. 100% natural and effective.', 
    tag: 'Transformation'
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="relative py-12 lg:py-16 overflow-hidden bg-off-white">
      <div className="container-custom">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-brand-yellow font-black text-[9px] uppercase tracking-[0.5em] mb-4">
            💎 Success Stories
          </p>
          <h2 className="text-brand-black leading-tight text-[clamp(2rem,4vw,3rem)] font-playfair font-bold">
            Real People. <br />
            <span className="italic font-normal text-brand-yellow">Real Transformations.</span>
          </h2>
        </div>

        {/* Carousel Section with Side Arrows */}
        <div className="relative max-w-4xl mx-auto px-12 md:px-20">
          {/* Navigation Arrows */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 border border-gray-200 flex items-center justify-center hover:bg-brand-black hover:border-brand-black hover:text-white transition-all duration-500 z-10 bg-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 border border-gray-200 flex items-center justify-center hover:bg-brand-black hover:border-brand-black hover:text-white transition-all duration-500 z-10 bg-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
          </button>
          <div className="overflow-hidden">
            <div key={active} className="animate-reveal">
              <div className="bg-white p-8 md:p-12 border border-gray-100 shadow-2xl relative">
                {/* Quote Mark */}
                <div className="absolute top-8 right-8 text-brand-yellow opacity-10">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.899 15.119 15.897 16.119 15.897L16.119 14.003C13.911 14.003 12.017 15.897 12.017 18.097L12.017 21L14.017 21ZM5.017 21L5.017 18C5.017 16.899 6.119 15.897 7.119 15.897L7.119 14.003C4.911 14.003 3.017 15.897 3.017 18.097L3.017 21L5.017 21Z" />
                  </svg>
                </div>

                <div className="mb-6">
                  <span className="inline-block bg-brand-yellow text-brand-black text-[8px] font-black px-4 py-1 uppercase tracking-widest mb-4">
                    {TESTIMONIALS[active].tag}
                  </span>
                  <p className="text-lg md:text-2xl font-medium text-brand-black leading-relaxed italic font-playfair">
                    "{TESTIMONIALS[active].text}"
                  </p>
                </div>

                <div className="pt-8 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-brand-light flex items-center justify-center text-lg font-bold font-playfair text-brand-black">
                      {TESTIMONIALS[active].name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-black text-base leading-tight">{TESTIMONIALS[active].name}</h4>
                      <p className="text-[8px] font-black uppercase tracking-widest text-gray-400 mt-1">{TESTIMONIALS[active].location}</p>
                    </div>
                  </div>
                  <div className="flex text-brand-yellow gap-0.5">
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

