'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, CheckCircle2 } from 'lucide-react';
import Masonry from './Masonry';

const IMAGE_URLS = [
  'https://missiongoodlife.in/wp-content/uploads/2025/07/bur_2-1.webp',
  'https://missiongoodlife.in/wp-content/uploads/2025/07/bur_24-1.webp',
  'https://missiongoodlife.in/wp-content/uploads/2025/07/bur_29-1.webp',
  'https://missiongoodlife.in/wp-content/uploads/2025/07/bur_5-1.webp',
  'https://missiongoodlife.in/wp-content/uploads/2025/07/bur_1-1.webp',
  'https://missiongoodlife.in/wp-content/uploads/2025/07/bur_13-1.webp',
  'https://missiongoodlife.in/wp-content/uploads/2025/07/bur_14-1.webp',
  'https://missiongoodlife.in/wp-content/uploads/2025/07/bur_22-1.webp',
  'https://missiongoodlife.in/wp-content/uploads/2025/07/bur_15-1.webp',
];

export default function PremiumGallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const masonryItems = useMemo(() => {
    return IMAGE_URLS.map((src, index) => ({
      id: index,
      img: src,
      // Randomizing heights slightly for that organic masonry feel
      height: [600, 800, 700, 900, 650, 750][index % 6],
    }));
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#fdfdfb] py-8 lg:py-12">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(var(--color-brand-teal) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="container relative z-10 mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="mx-auto mb-10 max-w-5xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-teal/20 bg-brand-teal/5 px-5 py-2"
          >
            <CheckCircle2 className="h-4 w-4 text-brand-teal" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-teal">
              Verified Results
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-6xl font-serif font-bold leading-[0.9] tracking-tighter text-slate-900 drop-shadow-[0_2px_60px_rgba(0,0,0,0.18)]"
          >
            Stories of 
            <span className="font-normal text-brand-orange"> Resilience.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg font-light leading-relaxed text-slate-500 max-w-5xl mx-auto"
          >
            Behind every image is a dedicated journey of health. Witness the power of natural naturopathy through our community's success.
          </motion.p>
        </div>

        {/* MASONRY GALLERY */}
        <Masonry 
          items={masonryItems}
          stagger={0.1}
          animateFrom="bottom"
          renderItem={(item) => (
            <div
              className="group relative h-full w-full cursor-pointer overflow-hidden bg-white shadow-xl shadow-black/50 ring-1 ring-slate-200/50 transition-all hover:shadow-2xl hover:shadow-brand-teal/10"
              onClick={() => setSelectedImg(item.img)}
            >
              {/* Overlay Info */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-900/40 opacity-0 backdrop-blur-[2px] transition-all duration-500 group-hover:opacity-100">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="rounded-full bg-white/20 p-4 text-white backdrop-blur-md border border-white/30"
                >
                  <Maximize2 className="h-6 w-6" />
                </motion.div>
                <span className="mt-4 text-[10px] font-black uppercase tracking-widest text-white">View Full Transformation</span>
              </div>

              {/* Image */}
              <img
                src={item.img}
                alt={`Success Story ${item.id}`}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />

              {/* Floating Badge (Glassmorphic) */}
              <div className="absolute bottom-4 left-4 z-20 overflow-hidden rounded-xl border border-white/30 bg-white/10 px-3 py-1.5 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                <span className="text-[9px] font-bold text-white uppercase tracking-tighter">Mission GoodLife Member</span>
              </div>
            </div>
          )}
        />
      </div>

      {/* LIGHTBOX / FULLSCREEN PREVIEW */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-xl"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-8 right-8 z-110 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20">
              <X className="h-6 w-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImg} 
                className="max-h-[85vh] w-auto rounded-3xl shadow-2xl ring-1 ring-white/10" 
                alt="Enlarged Testimonial" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-8 text-center">
                 <p className="text-white/60 text-sm font-light italic">Actual results may vary based on individual metabolism and routine adherence.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}