import founderPic from '../assets/pic.jpg';

const TRUST_POINTS = [
  {
    title: '18+ Years Exp.',
    desc: 'Dedicated healing since 2007.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    )
  },
  {
    title: '20K+ Success',
    desc: 'Stories across the globe.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    title: '100% Home',
    desc: 'No gym or pills required.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-white overflow-hidden min-h-[80vh] flex items-center py-12 lg:py-24">
      {/* Decorative vertical background text */}
      <div className="absolute top-0 right-0 h-full hidden lg:flex items-center opacity-[0.03] select-none pointer-events-none">
        <span className="text-[15vh] font-black font-playfair uppercase tracking-tighter vertical-text origin-center rotate-90 inline-block whitespace-nowrap">
          Heritage & Vision
        </span>
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Text Content */}
          <div className="lg:col-span-7" data-aos="fade-right">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-brand-yellow" />
              <p className="text-brand-black font-black text-[10px] uppercase tracking-[0.5em]">
                Founded 2007
              </p>
            </div>

            <h2 className="text-brand-black mb-8 leading-[1.1] text-[clamp(2.2rem,5vw,3.5rem)] font-playfair font-bold">
              18+ Years of <br />
              <span className="text-brand-yellow">Natural Healing</span> Mastery
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed max-w-2xl text-base lg:text-lg mb-10">
              <p>
                <strong className="text-brand-black font-black">Mission GoodLife</strong> was founded on a simple yet profound truth: your body has an innate ability to heal itself when given the right natural conditions.
              </p>
              <p className="border-l-4 border-brand-yellow pl-6 py-3 italic bg-brand-light/50 text-sm lg:text-base">
                Under the visionary leadership of Mr. Sanjay K. Sinha, we have spent nearly two decades perfecting the art of home-based naturopathy.
              </p>
            </div>

            {/* Compact Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {TRUST_POINTS.map((pt, i) => (
                <div key={i} className="flex flex-col gap-3 group">
                  <div className="w-12 h-12 bg-brand-black flex items-center justify-center text-brand-yellow transition-all duration-500 group-hover:bg-brand-yellow group-hover:text-brand-black">
                    <div className="w-6 h-6">{pt.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-brand-black font-black text-sm uppercase tracking-tight mb-1 group-hover:text-brand-yellow transition-colors">
                      {pt.title}
                    </h4>
                    <p className="text-gray-500 text-xs">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Founder Card & Stats */}
          <div className="lg:col-span-5" data-aos="fade-left">
            <div className="relative bg-brand-black text-white shadow-2xl overflow-hidden max-w-md ml-auto">
              {/* Founder Image Area */}
              <div className="relative h-84 overflow-hidden group">
                <img
                  src={founderPic}
                  alt="Mr. Sanjay K. Sinha"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="font-black text-[9px] uppercase tracking-[0.4em] text-brand-yellow mb-1">Founder & Chief Health Coach</p>
                  <p className="font-playfair font-bold text-xl tracking-tight">Mr. Sanjay K. Sinha</p>
                </div>
              </div>

              {/* Bottom Quote Section */}
              <div className="border-t border-white/10 bg-white/[0.03] p-8 lg:p-10">
                <div className="relative">
                  <svg className="absolute -top-2 -left-2 w-8 h-8 text-brand-yellow opacity-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.895 14.912 16 16.017 16H19.017V14H17.017C15.912 14 15.017 13.105 15.017 12V9C15.017 7.895 15.912 7 17.017 7H20.017C21.122 7 22.017 7.895 22.017 9V18C22.017 19.657 20.674 21 19.017 21H14.017ZM3.017 21V18C3.017 16.895 3.912 16 5.017 16H8.017V14H6.017C4.912 14 4.017 13.105 4.017 12V9C4.017 7.895 4.912 7 6.017 7H9.017C10.122 7 11.017 7.895 11.017 9V18C11.017 19.657 9.674 21 8.017 21H3.017Z" />
                  </svg>
                  <p className="text-sm lg:text-base font-medium leading-relaxed italic text-gray-400 relative z-10">
                    "Your health is your greatest asset. Our mission is to give you the keys to unlock your body's natural healing potential."
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
