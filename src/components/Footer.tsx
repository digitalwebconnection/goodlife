import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-brand-black pt-16 pb-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div data-aos="fade-up">
            <div className="mb-8">
              <Logo className="w-58 h-auto origin-left" />
            </div>
            <p className="text-gray-100 text-sm leading-relaxed mb-8 max-w-sm font-jakarta uppercase tracking-wider">
              India's premier home-based naturopathy program. Transforming lives through kitchen-based wellness since 2007.
            </p>
            <div className="flex gap-6">
              {[
                { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.351-.2 6.77-2.618 6.97-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.01 4.01 0 110-8.019 4.01 4.01 0 010 8.019zm7.846-10.405a1.441 1.441 0 11-2.881 0 1.441 1.441 0 012.881 0z" /></svg>, label: 'Instagram' },
                { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" /></svg>, label: 'YouTube' },
                { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>, label: 'WhatsApp' },
                { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>, label: 'LinkedIn' }
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-100 hover:text-brand-amber transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-white font-bold text-base font-playfair mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Programs', 'Products', 'Blogs'].map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(' ', '-')}`} className="text-gray-100 hover:text-brand-amber transition-colors text-sm font-medium">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-white font-bold text-base font-playfair mb-8">Programs</h4>
            <ul className="space-y-4">
              {['45-Day Detox', '90-Day Metabolic', '1-Year Transformation', 'Diabetes Care', 'PCOS Support'].map(l => (
                <li key={l}>
                  <a href="#plans" className="text-gray-100 hover:text-white transition-colors text-sm font-medium">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-white font-bold text-base font-playfair mb-8">Newsletter</h4>
            <p className="text-gray-100 text-sm leading-relaxed mb-8">
              Get health tips from <br className="hidden lg:block" /> Mr. Sanjay K. Sinha.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/3 border border-white/60 rounded-none px-4 py-3 text-white text-sm outline-none focus:border-brand-amber transition-all duration-300 font-jakarta placeholder:text-gray-100"
              />
              <button className="bg-brand-amber hover:bg-white text-brand-black py-3 rounded-none transition-all duration-500 font-black text-[10px] uppercase tracking-widest">
                Join Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/50 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-gray-100 text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Mission GoodLife. All Rights Reserved.
          </p>
    
        </div>
      </div>
    </footer>
  );
}
