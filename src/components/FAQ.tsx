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
          <h2
            className="text-brand-black font-serif mb-2 leading-tight text-[clamp(2rem,4vw,3rem)]  font-bold"
          >
            Still Curious? Let's <br />
            <span className="italic font-normal text-[#FFC300]">Clear Your Doubts</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#FFC300] mx-auto " />
        </div>

        <div className="border-t border-gray-100">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={` transition-all duration-500 ${open === i ? 'bg-gray-50 border border-[#FFC300]'  : 'bg-white  hover:bg-gray-50/50 border-b border-[#FFC300] '}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-6 text-left group"
              >
                <span className={`font-bold text-base lg:text-lg transition-colors duration-500 ${open === i ? 'text-[#FFC300]' : 'text-brand-black'}`}>
                  {faq.q}
                </span>

                <div className={`shrink-0 transition-transform duration-500 ${open === i ? 'rotate-45 text-[#FFC300]' : 'text-gray-300 group-hover:text-brand-black'}`}>
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
      </div>
    </section>
  );
}
