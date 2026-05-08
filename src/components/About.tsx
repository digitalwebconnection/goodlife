// @ts-ignore
import FlyingPosters from './FlyingPosters';
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpeg'
import image3 from '../assets/3.jpg'
import image4 from '../assets/4.webp'



const POSTER_IMAGES = [
  image1,
  image2,
  image3,
  image4,

];

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
              <div className="w-12 h-[2px] bg-brand-teal" />
              <p className="text-brand-black font-black text-[10px] uppercase tracking-[0.5em]">
                Founded 2007
              </p>
            </div>

            <h2 className="text-brand-black mb-8 leading-[1.1] font-serif text-5xl  font-bold">
              18+ Years of <br />
              <span className="text-brand-teal">Natural Healing</span> Mastery
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed max-w-2xl text-base lg:text-lg mb-10">
              <p>
                <strong className="text-brand-black font-black">Mission GoodLife</strong> was founded on a simple yet profound truth: your body has an innate ability to heal itself when given the right natural conditions.
              </p>
              <p className="border-l-4 border-brand-teal pl-6 py-3 italic bg-brand-light/50 text-sm lg:text-base">
                Under the visionary leadership of Mr. Sanjay K. Sinha, we have spent nearly two decades perfecting the art of home-based naturopathy.
              </p>
            </div>

            {/* Compact Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {TRUST_POINTS.map((pt, i) => (
                <div key={i} className="flex flex-col gap-3 group">
                  <div className="w-12 h-12 bg-brand-black flex items-center justify-center text-brand-lime transition-all duration-500 group-hover:bg-brand-lime group-hover:text-white">
                    <div className="w-6 h-6">{pt.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-brand-black font-black text-sm uppercase tracking-tight mb-1 group-hover:text-brand-lime transition-colors">
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

          {/* Right: FlyingPosters WebGL Gallery */}
          <div className="lg:col-span-5" data-aos="fade-left">
            <div className="relative overflow-hidden" style={{ height: '640px' }}>
              
              <FlyingPosters
                items={POSTER_IMAGES}
                planeWidth={480}
                planeHeight={460}
                distortion={1}
                scrollEase={0.1}
                cameraFov={65}
                cameraZ={22}
                autoSpeed={0.1}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
