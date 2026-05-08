import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const HERO_IMAGES = [
    "https://blog.nasm.org/hubfs/lose-water-weight.jpg" ,
  "https://i.ytimg.com/vi/MGx82dfjs9I/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBJBAeWbn-C8B247irxarx3vHtXmw", // Healthy food/transformation
  "https://images.moneycontrol.com/static-mcnews/2026/04/20260429041104_Mridul-Arora-weight-loss-journey.jpg?impolicy=website&width=1600&height=900", // Fitness/Yoga wellness
 // Nature/Meditation
];

const STATS = [
  { value: '4.9/5', label: 'Google Rating' },
  { value: '100%', label: 'Natural Flow' },
  { value: 'Award', label: 'Winner 2024' },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000); // Slightly longer for the cross-fade effect
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden bg-black">

      {/* BACKGROUND LAYER: Cross-Fade & Ken Burns */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <motion.img
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 7, ease: "linear" }}
              src={HERO_IMAGES[activeIndex]}
              alt="Wellness"
              className="w-full h-full object-cover"
            />
            {/* Dark gradient to ensure text readability */}
            <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>


      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC300] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFC300]"></span>
                </span>
                <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">India's Premier Naturopathy</span>
              </motion.div>

              <h1 className="font-playfair font-black text-white leading-[1.05] tracking-tight mb-6 text-[clamp(2.5rem,6vw,5rem)] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                Transform Your<br />
                Health, <span className="italic text-[#FFC300]">Naturally.</span>
              </h1>

              <div className="flex items-center gap-4 mb-8 pl-4 border-l-2 border-[#FFC300]">
                <h2 className="text-lg sm:text-xl font-light text-white/90 leading-relaxed italic">
                  Weight Loss that Heals, <span className="font-bold text-white not-italic underline decoration-[#FFC300] underline-offset-8">NOT Hurts</span>
                </h2>
              </div>

              <div className="flex flex-wrap gap-5">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#plans"
                  className="px-12 py-4 rounded-full bg-[#FFC300] text-black font-black flex items-center gap-3 text-lg uppercase tracking-widest shadow-xl"
                >
                  Explore Plans
                </motion.a>
                <motion.a
                  whileHover={{ backgroundColor: "rgba(255,255,255,1)", color: "#000" }}
                  href="#contact"
                  className="px-12 py-4 rounded-full border-2 border-white/20 text-white font-black text-lg uppercase tracking-widest backdrop-blur-sm transition-all"
                >
                  Get Started
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Side Stats */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="grid gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
                >
                  <h4 className="text-3xl font-black text-[#FFC300] mb-1">{stat.value}</h4>
                  <p className="text-white/50 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Modern Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <div className="flex gap-2">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-700 ${index === activeIndex ? 'w-12 bg-[#FFC300]' : 'w-4 bg-white/20 hover:bg-white/40'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}