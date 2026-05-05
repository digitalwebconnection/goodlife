import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-brand-black pt-28 pb-14 overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-brand-yellow opacity-5 blur-[120px] rounded-full translate-x-1/4 translate-y-1/4" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <a href="#hero" className="flex items-center gap-3 mb-10 group">
              <Logo inverted className="scale-125 origin-left" />
            </a>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-sm">
              India's premier home-based naturopathy program. Transforming lives through the medicine in your kitchen since 2007.
            </p>
            <div className="flex gap-6">
              {['📸', '▶️', '💬', '🔗'].map((icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-xl bg-white/[0.02] hover:bg-brand-yellow/10 hover:border-brand-yellow transition-all duration-500 hover:-translate-y-2"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-12">
            
            <div data-aos="fade-up" data-aos-delay="100">
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.4em] mb-10">Quick Links</h4>
              <ul className="space-y-6">
                {['Home', 'About Us', 'Programs', 'Products', 'Blogs'].map(l => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-brand-yellow transition-colors text-sm font-bold flex items-center gap-2 group">
                      <div className="w-1 h-1 rounded-full bg-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.4em] mb-10">Programs</h4>
              <ul className="space-y-6">
                {['45-Day Detox', '90-Day Metabolic', '1-Year Transformation', 'Diabetes Care', 'PCOS Support'].map(l => (
                  <li key={l}>
                    <a href="#plans" className="text-gray-400 hover:text-brand-yellow transition-colors text-sm font-bold flex items-center gap-2 group">
                      <div className="w-1 h-1 rounded-full bg-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.4em] mb-10">Newsletter</h4>
              <p className="text-gray-400 text-xs leading-relaxed mb-8">Get weekly health tips from Mr. Sanjay K. Sinha.</p>
              <form className="relative group">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white text-sm outline-none focus:border-brand-yellow/30 focus:bg-white/[0.05] transition-all"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-brand-yellow hover:bg-white text-brand-black px-5 rounded-xl transition-all duration-500 font-black text-[10px] uppercase tracking-widest">
                  Join
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-14 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Mission GoodLife. All Rights Reserved.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-gray-600 hover:text-white transition-colors text-[9px] font-black uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors text-[9px] font-black uppercase tracking-widest">Terms of Service</a>
          </div>
        </div>

        {/* Cinematic Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-full text-center opacity-[0.02] z-0">
          <span className="text-[25vw] font-black font-playfair text-white whitespace-nowrap">MISSION GOODLIFE</span>
        </div>
      </div>
    </footer>
  );
}
