'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const PRODUCTS = [
  {
    name: 'Cholesterol Herbs',
    subtitle: 'Heart Wellness',
    image:
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
    link:
      'https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20inquire%20about%20*Cholesterol%20Herbs*.',
  },
  {
    name: 'Detox Herbs',
    subtitle: 'Natural Cleanser',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    link:
      'https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20inquire%20about%20*Detox%20Herbs*.',
  },
  {
    name: 'Fat Burn Blend',
    subtitle: 'Metabolic Support',
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800',
    link:
      'https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20inquire%20about%20*Fat%20Burn%20Blend*.',
  },
  {
    name: 'PCOS Balance',
    subtitle: 'Hormonal Support',
    image:
      'https://images.unsplash.com/photo-1540331547168-8b63109225b7?auto=format&fit=crop&q=80&w=800',
    link:
      'https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20inquire%20about%20*PCOS%20Balance*.',
  },
  {
    name: 'Diabetic Herbs',
    subtitle: 'Sugar Control',
    image:
      'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=800',
    link:
      'https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20inquire%20about%20*Diabetic%20Herbs*.',
  },
  {
    name: 'Wheat Bran',
    subtitle: 'Organic Wellness',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
    link:
      'https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20inquire%20about%20*Wheat%20Bran*.',
  },
];

export default function PremiumProducts() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#ffffff] py-18">

        {/* BLOBS */}
        <div className="blob blob1" />
        <div className="blob blob2" />
        <div className="blob blob3" />

        <div className="container mx-auto px-5 relative z-10">

          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mx-auto mb-10 max-w-4xl text-center"
          >
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#d4af37]/60 bg-white/70 px-7 py-2 backdrop-blur-2xl">
              <Sparkles className="h-5 w-5 text-[#d4af37]" />
              <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#c59a25]">
                Premium Herbal Collection
              </span>
            </div>

            <h2 className="text-7xl font-serif font-black leading-[0.95] tracking-[-4px] text-[#111]">
              Nature’s Healing
              <span className="block  font-medium text-[#d4af37]">
                Apothecary
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-4xl text-lg leading-relaxed text-[#666]">
              Scientifically curated herbal wellness blends designed
              for metabolism, detoxification, hormonal balance, and
              holistic vitality.
            </p>
          </motion.div>

          {/* PRODUCTS */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {PRODUCTS.map((product, i) => (
              <motion.article
                key={product.name}
                initial={{
                  opacity: 0,
                  y: 120,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                whileHover={{
                  y: -18,
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.12,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden  border border-black/20 shadow-xl shadow-black/60 bg-white/90 "
              >

                {/* SHINE */}
                <div className="shine-effect" />

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <motion.img
                    whileHover={{
                      scale: 1.12,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    src={product.image}
                    alt={product.name}
                    className="h-60 w-full object-cover"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                  {/* GLOW */}
                  <div className="absolute bottom-[-70px] left-1/2 h-[140px] w-[220px] -translate-x-1/2 rounded-full bg-[#ffd86b]/40 blur-3xl" />

                  {/* TAG */}
                  <div className="absolute left-2 top-2 rounded-xl border border-white/20 bg-white px-5 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-black backdrop-blur-xl">
                    Herbal Formula
                  </div>

                  {/* FLOAT BUTTON */}
                  <motion.a
                    whileHover={{
                      scale: 1.15,
                      rotate: 10,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-[#ffe08c] to-[#d4af37] text-black shadow-[0_20px_40px_rgba(212,175,55,0.95)]"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </motion.a>
                </div>

                {/* CONTENT */}
                <div className="relative z-10 p-6">

                  <div className="mb-5 flex items-start justify-between gap-4">

                    <div>
                      <p className="mb-3 text-sm font-black uppercase tracking-widest text-[#d4af37]">
                        {product.subtitle}
                      </p>

                      <h3 className="text-2xl font-black leading-none tracking-[-1px] text-[#111] transition-all duration-500 group-hover:text-[#b89025]">
                        {product.name}
                      </h3>
                    </div>

                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-[#d4af37] to-[#ffe08c] text-sm font-black text-black shadow-xl">
                      100%
                    </div>
                  </div>

                  <p className="text-[15px] leading-[1.9] text-black">
                    Premium herbal formulation designed to naturally
                    support wellness, energy, metabolism, and inner balance.
                  </p>

                  {/* FOOTER */}
                  <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-5">

                    <div className="text-[10px] font-black uppercase tracking-[0.28em] text-[#111]">
                      Organic Wellness
                    </div>

                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] border border-[#b89025] px-3 py-2 rounded-lg font-black uppercase tracking-[0.28em] text-[#b89025] transition-all duration-300 hover:text-black"
                    >
                      Inquire Now
                    </a>
                  </div>
                </div>

                {/* BORDER */}
                <div className="pointer-events-none absolute inset-0 rounded-[34px] border border-white/50" />
              </motion.article>
            ))}
          </div>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              href="https://api.whatsapp.com/send?phone=919979740361"
              className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#111] to-[#222] px-12 py-4 text-[11px] font-black uppercase tracking-[0.35em] text-[#f7d66d] shadow-[0_25px_60px_rgba(0,0,0,0.2)]"
            >
              Explore Full Catalogue
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* STYLE TAG */}
      <style >{`
        .blob {
          position: absolute;
          border-radius: 999px;
          filter: blur(90px);
          animation: floatBlob 10s ease-in-out infinite;
        }

        .blob1 {
          width: 340px;
          height: 340px;
          background: rgba(255, 200, 0, 0.18);
          top: -100px;
          left: -100px;
        }

        .blob2 {
          width: 280px;
          height: 280px;
          background: rgba(0, 255, 163, 0.12);
          bottom: 0;
          right: 0;
        }

        .blob3 {
          width: 220px;
          height: 220px;
          background: rgba(255, 140, 0, 0.12);
          top: 40%;
          left: 50%;
        }

        @keyframes floatBlob {
          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-40px);
          }

          100% {
            transform: translateY(0px);
          }
        }

        .shine-effect {
          position: absolute;
          top: -120%;
          left: -120%;
          width: 240%;
          height: 240%;
          background: linear-gradient(
            120deg,
            transparent 20%,
            rgba(255,255,255,0.45),
            transparent 70%
          );
          transform: rotate(25deg);
          transition: 1.2s;
          z-index: 5;
          pointer-events: none;
        }

        .group:hover .shine-effect {
          top: -20%;
          left: -20%;
        }
      `}</style>
    </>
  );
}