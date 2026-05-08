import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#ffffff] py-10 lg:py-32">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFC300]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-[#FFC300]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">

            {/* Left Content */}
            <div data-aos="fade-right" data-aos-duration="1000">
              <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#FFC300] animate-pulse" />
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
                  Let's Connect
                </p>
              </div>

              <h2 className="mb-6 font-playfair text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] text-[#191919]">
                Ready for a <br className="hidden lg:block" />
                <span className="relative">
                  healthier
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-[#FFC300]/30 -z-10 skew-x-12" />
                </span> routine?
              </h2>

              <p className="mb-10 max-w-md text-base lg:text-lg leading-relaxed text-gray-600">
                Share your goals and we will suggest the most practical next step for your body, lifestyle, and schedule.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <a
                  href="https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20Slim%20at%20of%20*Home*."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden inline-flex items-center gap-4 rounded-full bg-[#191919] px-8 py-5 text-[10px] font-black uppercase tracking-[0.25em] text-white transition-all duration-500 hover:shadow-2xl hover:shadow-[#191919]/30 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 w-full h-full bg-[#FFC300] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-[#191919]">Chat Now</span>
                  <span className="relative z-10 h-px w-6 bg-[#FFC300] transition-all duration-500 group-hover:bg-[#191919] group-hover:translate-x-2 group-hover:w-8" />
                </a>

                <div className="flex flex-col border-l-2 border-gray-200 pl-6">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">WhatsApp</span>
                  <a href="tel:+919979740361" className="font-playfair text-2xl font-bold text-[#191919] hover:text-[#FFC300] transition-colors duration-300">
                    +91 99797 40361
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Form */}
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="relative group"
            >
              <div className="absolute -inset-1 bg-linear-to-r from-[#FFC300]/60 to-transparent  shadow-xl shadow-black  transition duration-1000 group-hover:duration-200" />

              <div className="relative border border-white/60 bg-white/80 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)] sm:p-10">
                {sent ? (
                  <div className="flex min-h-[400px] flex-col items-center justify-center text-center animate-reveal">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#FFC300] shadow-[0_0_40px_rgba(255,193,7,0.4)] text-[#191919] scale-in-center">
                      <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-playfair text-3xl font-black text-[#191919] mb-3">Message Received</h3>
                    <p className="max-w-xs text-base leading-relaxed text-gray-600 mb-8">
                      Our experts are reviewing your goals and will reach out shortly.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="text-[10px] font-black uppercase tracking-[0.2em] text-[#191919] border-b-2 border-[#FFC300] pb-1 transition-all hover:text-gray-500 hover:border-gray-500"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative">
                    <div className={`transition-all duration-300 ${focusedField === 'name' ? '-translate-y-1' : ''}`}>
                      <label className="block text-[9px] font-black uppercase tracking-[0.2em] mb-2 ml-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jane Doe"
                        className="w-full rounded-md border bg-gray-50/50 px-5 py-4 text-sm text-gray-800 placeholder-gray-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] outline-none transition-all duration-300 focus:bg-white focus:ring-2 focus:ring-[#FFC300]/50 focus:shadow-[0_8px_30px_rgba(255,193,7,0.1)]"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>

                    <div className={`transition-all duration-300 ${focusedField === 'email' ? '-translate-y-1' : ''}`}>
                      <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-black mb-2 ml-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="jane@example.com"
                        className="w-full rounded-md border bg-gray-50/50 px-5 py-4 text-sm text-gray-800 placeholder-gray-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] outline-none transition-all duration-300 focus:bg-white focus:ring-2 focus:ring-[#FFC300]/50 focus:shadow-[0_8px_30px_rgba(255,193,7,0.1)]"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>

                    <div className={`transition-all duration-300 ${focusedField === 'message' ? '-translate-y-1' : ''}`}>
                      <label className="block text-[9px] font-black uppercase tracking-[0.2em] mb-2 ml-1">Health Goal or Question</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your goal, condition, or plan interest."
                        className="w-full resize-none rounded-md border bg-gray-50/50 px-5 py-4 text-sm text-gray-800 placeholder-gray-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] outline-none transition-all duration-300 focus:bg-white focus:ring-2 focus:ring-[#FFC300]/50 focus:shadow-[0_8px_30px_rgba(255,193,7,0.1)]"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>

                    <button
                      type="submit"
                      className="group relative w-full overflow-hidden rounded-2xl bg-[#191919] px-6 py-5 text-[11px] font-black uppercase tracking-[0.3em] text-white shadow-[0_15px_30px_rgba(25,25,25,0.2)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(25,25,25,0.3)] mt-2"
                    >
                      <div className="absolute inset-0 w-full h-full bg-[#FFC300] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500" />
                      <span className="relative z-10 flex items-center justify-center gap-3 transition-colors duration-500 group-hover:text-[#191919]">
                        Send Message
                        <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
