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
    <section id="faq" className="py-4 lg:py-6 bg-off-white overflow-hidden">
      <div className="container-custom max-w-5xl" data-aos="fade-up">
        <div className="text-center mb-12">
          <p 
            className="text-brand-yellow font-black text-[9px] uppercase tracking-[0.5em] mb-4"
          >
            ❓ Common Questions
          </p>
          <h2 
            className="text-brand-black mb-6 leading-tight text-[clamp(2rem,4vw,3rem)] font-playfair font-bold"
          >
            Still Curious? Let's <br />
            <span className="italic font-normal text-brand-yellow">Clear Your Doubts</span>
          </h2>
          <div className="w-16 h-[2px] bg-brand-yellow mx-auto opacity-40" />
        </div>

        <div className="border-t border-gray-100">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`border-b border-gray-100 transition-all duration-500 ${open === i ? 'bg-gray-50' : 'bg-white hover:bg-gray-50/50'}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-6 text-left group"
              >
                <span className={`font-bold text-base lg:text-lg transition-colors duration-500 ${open === i ? 'text-brand-yellow' : 'text-brand-black'}`}>
                  {faq.q}
                </span>
                
                <div className={`flex-shrink-0 transition-transform duration-500 ${open === i ? 'rotate-45 text-brand-yellow' : 'text-gray-300 group-hover:text-brand-black'}`}>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" /></svg>
                </div>
              </button>
              
              <div className={`faq-answer ${open === i ? 'open' : ''}`}>
                <div className="px-6 pb-8">
                  <p className="text-gray-500 text-sm lg:text-base leading-relaxed max-w-3xl">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="mt-12 bg-brand-black p-10 lg:p-14 text-center shadow-2xl relative overflow-hidden group"
        >
          <h3 className="text-white font-bold text-2xl lg:text-3xl mb-4 font-playfair tracking-tight">Still have questions?</h3>
          <p className="text-gray-400 text-[9px] mb-10 uppercase tracking-[0.4em] font-black">Our health experts are just a click away</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <a
              href="https://api.whatsapp.com/send?phone=919979740361"
              className="bg-brand-yellow text-brand-black font-black px-10 py-4 rounded-none text-[10px] uppercase tracking-[0.3em] transition-all duration-500 hover:bg-white shadow-xl flex items-center justify-center gap-3"
            >
              WhatsApp Us
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </a>
            <a
              href="tel:9979740361"
              className="border-2 border-white/20 text-white font-black px-10 py-4 rounded-none text-[10px] uppercase tracking-[0.3em] hover:bg-white/10 hover:border-white transition-all duration-500 flex items-center justify-center gap-3"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
