import { useState } from 'react';

const FAQS = [
  { q: 'Are your plans really 100% natural?', a: 'Yes, absolutely. Every program is built on naturopathic principles — using kitchen ingredients and herbal remedies. We do not use any pills, chemicals, or synthetic supplements.' },
  { q: 'Can I follow the program from home?', a: 'That is the core of what we do! All our programs are specifically designed to be followed from the comfort of your home without any special equipment or gym visits.' },
  { q: 'Is this suitable for people with diabetes or PCOS?', a: 'Yes — we have specialized protocols for individuals managing lifestyle diseases. Our programs target the root cause of metabolic and hormonal imbalances.' },
  { q: 'How soon can I expect results?', a: 'Most clients start noticing metabolic improvements within 2–3 weeks. Significant weight loss typically follows a consistent path between the 4–6 week mark.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-off-white overflow-hidden">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-20">
          <p 
            data-aos="fade-down"
            className="inline-block px-5 py-2 rounded-full bg-brand-light text-brand-black font-black text-[10px] uppercase tracking-[0.3em] mb-6 shadow-sm border border-brand-black/10"
          >
            ❓ Common Questions
          </p>
          <h2 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-900 mb-6 leading-tight text-[clamp(2.5rem,5vw,3.5rem)] font-playfair font-bold"
          >
            Still Curious? Let's <span className="italic font-normal text-brand-yellow">Clear Your Doubts</span>
          </h2>
          <div data-aos="zoom-in" data-aos-delay="200" className="w-24 h-1.5 bg-brand-yellow mx-auto rounded-full opacity-40" />
        </div>

        <div className="space-y-6">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={200 + i * 100}
              className={`group bg-white rounded-[2rem] border-2 transition-all duration-700 ${
                open === i 
                ? 'border-brand-yellow/30 shadow-2xl bg-brand-light/20 -translate-y-2' 
                : 'border-white shadow-sm hover:border-brand-yellow/20 hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-10 py-8 text-left group"
              >
                <span className="font-black text-brand-black text-lg lg:text-xl leading-snug group-hover:text-brand-yellow transition-colors pr-10">
                  {faq.q}
                </span>
                
                {/* Custom Premium Toggle Icon */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-2xl border-2 transition-all duration-700 flex items-center justify-center relative shadow-sm ${
                  open === i ? 'border-brand-yellow bg-brand-yellow rotate-180' : 'border-gray-50 bg-white group-hover:border-brand-yellow/30'
                }`}>
                  <div className={`w-4 h-0.5 bg-current transition-all duration-700 rounded-full ${open === i ? 'text-brand-black' : 'text-gray-400 group-hover:text-brand-yellow'}`} />
                  <div className={`absolute w-4 h-0.5 bg-current transition-all duration-700 rounded-full ${
                    open === i ? 'text-brand-black rotate-0 opacity-0' : 'text-gray-400 rotate-90 group-hover:text-brand-yellow'
                  }`} />
                </div>
              </button>
              
              <div className={`faq-answer ${open === i ? 'open' : ''}`}>
                <div className="px-10 pb-10">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent mb-8" />
                  <p className="text-gray-500 text-base lg:text-lg leading-relaxed max-w-2xl font-medium">{faq.a}</p>
                  
                  <div className="mt-8 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-yellow">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-black/60">Expert Verified Natural Protocol</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-20 bg-brand-black rounded-[3rem] p-10 lg:p-16 text-center shadow-2xl relative overflow-hidden group"
        >
          {/* Animated Glow */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-accent/10 blur-[100px] rounded-full group-hover:scale-125 transition-transform duration-1000" />
          
          <h3 className="text-white font-black text-2xl lg:text-4xl mb-6 font-playfair tracking-tight">Still have questions?</h3>
          <p className="text-white/40 text-[10px] mb-12 uppercase tracking-[0.4em] font-black">Our health experts are just a click away</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <a
              href="https://api.whatsapp.com/send?phone=919979740361"
              className="ripple-btn group bg-brand-yellow hover:bg-white text-brand-black font-black px-12 py-5 rounded-full text-xs uppercase tracking-[0.2em] transition-all duration-500 shadow-xl flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5 text-brand-black" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              WhatsApp Us
            </a>
            <a
              href="tel:9979740361"
              className="border-2 border-white/20 text-white font-black px-12 py-5 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white transition-all duration-500 flex items-center justify-center gap-3"
            >
              📞 Call +91 9979740361
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
