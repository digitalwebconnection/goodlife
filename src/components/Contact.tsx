import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-0 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.08)] border border-gray-100 bg-white">
          
          {/* Left Panel - Cinematic Dark */}
          <div
            data-aos="fade-right"
            className="relative p-12 lg:p-20 flex flex-col justify-center bg-[radial-gradient(ellipse_150%_120%_at_50%_0%,#000000,#1A1A1A)] overflow-hidden"
          >
            {/* Animated Background Decoration */}
            <div className="absolute top-10 right-10 w-80 h-80 opacity-10 pointer-events-none group">
              <svg viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="0.5" className="animate-[spin_30s_linear_infinite]">
                <path d="M50 10 C30 10 10 30 10 50 C10 70 30 90 50 90 C70 90 90 70 90 50 C90 30 70 10 50 10 Z" />
                <path d="M50 10 V90 M10 50 H90" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="25" />
              </svg>
            </div>
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-30 blur-[100px] bg-brand-yellow animate-pulse" />

            <p className="text-brand-yellow font-black text-[10px] uppercase tracking-[0.5em] mb-8">🌿 Free Consultation</p>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-10 leading-[1.05] font-playfair">
              Let's Talk About Your <span className="italic text-brand-yellow font-normal">Health Goals</span>
            </h2>
            <p className="text-green-100/50 leading-relaxed mb-12 text-lg">
              Not sure which plan is right for you? Our experts are ready to guide you on your natural transformation journey.
            </p>

            <ul className="space-y-6 mb-16">
              {[
                { l: 'Zero Pressure Environment', i: '🌱' },
                { l: '100% Free Initial Assessment', i: '🛡️' },
                { l: 'Personalized Natural Guidance', i: '🧭' },
              ].map((item) => (
                <li key={item.l} className="flex items-center gap-5 text-white/90 text-base font-bold group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-brand-yellow group-hover:text-brand-black transition-all duration-500 group-hover:scale-110">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  {item.l}
                </li>
              ))}
            </ul>

            <a
              href="https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20Slim%20at%20of%20*Home*."
              target="_blank"
              rel="noopener noreferrer"
              className="ripple-btn group inline-flex items-center gap-5 bg-brand-yellow hover:bg-white text-brand-black font-black px-10 py-6 rounded-full w-fit transition-all duration-700 shadow-2xl hover:shadow-brand-yellow/40"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Right Panel - Premium Form */}
          <div data-aos="fade-left" className="bg-white p-12 lg:p-20 flex flex-col justify-center">
            <h3 className="text-4xl font-black text-gray-900 mb-3 font-playfair tracking-tight">Send a Message</h3>
            <p className="text-gray-400 text-[10px] mb-12 uppercase tracking-[0.4em] font-black">Expert consultation within 24 hours</p>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-20 text-center animate-reveal">
                <div className="w-24 h-24 rounded-full bg-brand-light flex items-center justify-center text-5xl mb-8 shadow-inner border border-brand-black/10">
                  ✨
                </div>
                <h4 className="text-3xl font-black text-brand-black mb-4 font-playfair">Message Sent!</h4>
                <p className="text-gray-500 text-base max-w-sm leading-relaxed">Our health experts will reach out to you personally via email or WhatsApp.</p>
                <button onClick={() => setSent(false)} className="mt-10 text-brand-black font-black text-[10px] uppercase tracking-[0.3em] hover:opacity-70 transition-opacity underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="floating-label-group">
                  <input
                    type="text"
                    required
                    placeholder=" "
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <label>Full Name</label>
                </div>
                
                <div className="floating-label-group">
                  <input
                    type="email"
                    required
                    placeholder=" "
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  <label>Email Address</label>
                </div>

                <div className="floating-label-group">
                  <textarea
                    required
                    rows={4}
                    placeholder=" "
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                  <label>How can we help you transform?</label>
                </div>

                <div className="pt-8">
                  <button
                    type="submit"
                    className="ripple-btn group w-full bg-brand-black hover:bg-brand-yellow hover:text-brand-black text-white font-black py-6 rounded-2xl transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:scale-[1.02] flex items-center justify-center gap-4 uppercase tracking-[0.2em] text-xs"
                  >
                    Send Message
                    <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
