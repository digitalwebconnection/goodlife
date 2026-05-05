export default function CTABanner() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden bg-brand-black">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,193,7,0.1),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-20" 
             style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="noise-overlay opacity-10" />
      </div>

      <div className="container-custom relative z-10">
        <div 
          data-aos="zoom-in"
          className="max-w-3xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-none p-8 lg:p-12 text-center relative overflow-hidden group shadow-[0_40px_120px_rgba(0,0,0,0.5)]"
        >
          {/* Animated Glows */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-yellow opacity-10 blur-[120px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-yellow opacity-5 blur-[120px] rounded-full group-hover:scale-150 transition-transform duration-1000" />

          <div className="relative z-10">
            <p 
              data-aos="fade-down" 
              data-aos-delay="200"
              className="text-brand-yellow font-black text-[10px] uppercase tracking-[0.6em] mb-10"
            >
              🚀 Limited Slots Available
            </p>
            
            <h2 
              data-aos="fade-up" 
              data-aos-delay="300"
              className="text-white text-3xl lg:text-5xl font-black font-playfair leading-[1.1] mb-8 tracking-tight"
            >
              🌱 Start Your<br />
              <span className="italic font-normal text-brand-yellow">Health Journey</span>
            </h2>
            
            <p 
              data-aos="fade-up" 
              data-aos-delay="400"
              className="text-white/40 text-base lg:text-lg leading-relaxed max-w-xl mx-auto mb-12"
            >
              Join 20,000+ happy clients who transformed their health naturally from home. 
              Book your 100% free consultation today.
            </p>

            <div 
              data-aos="fade-up" 
              data-aos-delay="500"
              className="flex flex-col sm:flex-row items-center justify-center gap-8"
            >
              <a
                href="https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20Slim%20at%20of%20*Home*."
                className="ripple-btn group w-full sm:w-auto bg-brand-yellow hover:bg-white text-brand-black font-black px-10 py-5 rounded-full text-xs uppercase tracking-[0.2em] transition-all duration-700 shadow-[0_15px_40px_rgba(255,193,7,0.2)] flex items-center justify-center gap-3 hover:scale-105"
              >
                Book Free Consultation
                <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-black bg-brand-dark shadow-xl" />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-brand-black bg-white/10 backdrop-blur-md flex items-center justify-center text-[8px] font-black text-white">
                  +20k
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-30">
              {['No Pills', 'No Gym', 'No Side Effects', 'Home Based'].map(t => (
                <div key={t} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-brand-yellow" />
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Background botanical line art */}
          <svg className="absolute bottom-0 right-0 w-64 h-64 text-white opacity-[0.03] translate-x-1/4 translate-y-1/4 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 90C50 90 20 60 20 40C20 20 40 10 50 10C60 10 80 20 80 40C80 60 50 90 50 90Z"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
