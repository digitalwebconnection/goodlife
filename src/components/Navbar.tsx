import { useEffect, useState } from 'react';
import Logo from './Logo';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Plans', href: '#plans' },
  { label: 'Products', href: '#products' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  return (
    <>
      <header
        className={`glass-nav ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'bg-white! border-none! top-0! left-0! right-0! rounded-none! h-24!' : ''}`}
      >
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center group transition-all duration-500 hover:scale-[1.05]"
          >
            <Logo inverted={false} />
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 hover:translate-y-[-2px] relative group text-white/90 hover:text-brand-amber"
              >
                {link.label}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-amber rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
              </a>
            ))}
            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20Slim%20at%20of%20*Home*."
                target="_blank"
                rel="noopener noreferrer"
                className="ripple-btn shimmer-hover px-4 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500 flex items-center gap-3 shadow-lg bg-brand-teal text-white shadow-brand-teal/20"
              >
                Consult Now
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
          </nav>



          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden relative z-110 p-2 transition-colors duration-500 ${menuOpen ? 'text-brand-black' : 'text-white'
              }`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-current transition-all duration-500 rounded-full ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-full bg-current transition-all duration-300 rounded-full ${menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`} />
              <span className={`block h-0.5 w-full bg-current transition-all duration-500 rounded-full ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Full Overlay Mobile Menu */}
      <div
        className={`fixed inset-0 z-100 bg-white transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${menuOpen ? 'visible pointer-events-auto opacity-100' : 'invisible pointer-events-none opacity-0'
          }`}
        style={{
          clipPath: menuOpen ? 'circle(150% at 100% 0%)' : 'circle(0% at 100% 0%)'
        }}
      >
        {/* Decorative Background for Mobile Menu */}
        <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-brand-amber/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-brand-teal/5 blur-[100px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2" />

        <div className="container-custom h-full flex flex-col items-center justify-center relative z-10">
          <nav className="flex flex-col items-center gap-10">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-4xl sm:text-5xl font-black font-playfair text-brand-black hover:text-brand-orange transition-all duration-500 transform ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                style={{ transitionDelay: `${i * 100 + 300}ms` }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div
            className={`mt-16 flex flex-col items-center gap-6 transition-all duration-700 delay-1000 ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Get in touch</p>
            <a href="tel:9979740361" className="text-2xl font-bold text-brand-black font-playfair tracking-tight hover:text-brand-teal transition-colors">
              +91 9979740361
            </a>
            <div className="flex gap-6 mt-4">
              {['📸', '▶️', '💬'].map((icon, idx) => (
                <div key={idx} className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-xl bg-white shadow-sm hover:border-brand-lime hover:text-brand-lime transition-all cursor-pointer">
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
