import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ParticleCard, GlobalSpotlight } from './MagicBento';

const CHALLENGES = [
  {
    title: 'Weight Gain Issues',
    desc: 'No more crash diets or exhausting gym routines. Heal your body naturally with sustainable wellness methods.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 20a6 6 0 0 0-12 0" />
        <circle cx="12" cy="10" r="4" />
      </svg>
    ),
  },
  {
    title: 'Diabetes & PCOS',
    desc: 'Balance hormones and improve metabolic health with customized naturopathy-based healing programs.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21s-7-4.35-7-11a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 6.65-7 11-7 11Z" />
      </svg>
    ),
  },
  {
    title: 'Body Detox',
    desc: 'Cleanse toxins naturally and recharge your energy through powerful food-based healing therapies.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m12 3-2.5 6.5L3 12l6.5 2.5L12 21l2.5-6.5L21 12l-6.5-2.5Z" />
      </svg>
    ),
  },
  {
    title: 'Expert Consultation',
    desc: 'Get personalized 1-on-1 guidance from experienced naturopathy experts focused on long-term healing.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
];

export default function HealthChallenges() {
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-14 overflow-hidden bg-[#fffdf7]">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FFC300]/10 blur-[140px] rounded-full" />
      </div>

      <GlobalSpotlight
        gridRef={gridRef}
        glowColor="255, 195, 0"
        spotlightRadius={350}
      />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="text-center mb-10"
>
  <span className="
    inline-flex 
    items-center 
    gap-2 
    px-5 
    py-2 
    rounded-full 
    bg-[#FFC300]/10 
    border 
    border-[#FFC300]/20 
    text-[#B8860B] 
    text-xs 
    font-bold 
    tracking-[0.25em] 
    uppercase
    shadow-[0_4px_20px_rgba(255,195,0,0.25)]
  ">
    ✨ Natural Healing
  </span>

  <h2
    className="
      mt-6 
      text-[clamp(2rem,5vw,4rem)] 
      leading-tight 
      font-black 
      text-[#111] 
      max-w-4xl 
      mx-auto
      drop-shadow-[0_8px_25px_rgba(0,0,0,0.18)]
    "
  >
    Transform Your Health <br />

    <span
      className="
        text-[#FFC300]
        font-semibold

        drop-shadow-[0_6px_18px_rgba(255,255,255,0.85)]
      "
    >
      The Natural Way
    </span>
  </h2>

  <p
    className="
      max-w-4xl 
      mx-auto 
      mt-4 
      text-gray-500 
      leading-relaxed 
      text-base 
      md:text-lg
      drop-shadow-[0_2px_10px_rgba(0,0,0,0.08)]
    "
  >
    Discover personalized naturopathy solutions designed to heal your
    body, restore energy, and improve long-term wellness naturally.
  </p>
</motion.div>

        {/* Cards */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {CHALLENGES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
              }}
              viewport={{ once: true }}
            >
              <ParticleCard
                enableTilt
                enableMagnetism
                clickEffect
                particleCount={14}
                glowColor="255,195,0"
                className="
    group
    relative
    overflow-hidden
    rounded-lg
    border
    border-white/20
    bg-white/10
    backdrop-blur-2xl
    p-6
    h-full
    transition-all
    duration-700
    hover:-translate-y-4
    hover:scale-[1.02]
    shadow-[0_10px_60px_rgba(0,0,0,0.08)]
    hover:shadow-[0_25px_120px_rgba(255,195,0,0.18)]
  "
              >
                {/* Animated Aurora Background */}
                <motion.div
                  animate={{
                    backgroundPosition: [
                      '0% 50%',
                      '100% 50%',
                      '0% 50%',
                    ],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="
      absolute
      inset-0
      opacity-80
      bg-size-[300%_300%]
        bg-linear-to-br
      from-[#fff6d6]
      via-[#ffe38a]
      to-[#fff9eb]
    "
                />

                {/* Mesh Glow */}
                <motion.div
                  animate={{
                    x: [0, 40, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="
      absolute
      -top-24
      -right-24
      w-72
      h-72
      rounded-full
      bg-[#FFC300]/30
      blur-[90px]
    "
                />

                <motion.div
                  animate={{
                    x: [0, -30, 0],
                    y: [0, 20, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="
      absolute
      -bottom-20
      -left-20
      w-60
      h-60
      rounded-full
      bg-orange-300/20
      blur-[80px]
    "
                />

                {/* Rotating Beam */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="
      absolute
      top-1/2
      left-1/2
      w-[140%]
      h-[140%]
      opacity-20
      -translate-x-1/2
      -translate-y-1/2
      bg-linear-to-r
      from-transparent
      via-white
      to-transparent
    "
                  style={{
                    clipPath: 'polygon(48% 0%, 52% 0%, 100% 100%, 0% 100%)',
                  }}
                />

                {/* Noise Overlay */}
                <div
                  className="
      absolute
      inset-0
      opacity-[0.03]
      mix-blend-overlay
      bg-[url('/noise.png')]
    "
                />

                {/* Content */}
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative z-10"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotate: 12,
                      scale: 1.12,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                    }}
                    className="
        w-16
        h-16
        rounded-2xl
        bg-black
        text-[#FFC300]
        flex
        items-center
        justify-center
        shadow-[0_15px_40px_rgba(0,0,0,0.15)]
      "
                  >
                    <div className="w-8 h-8">
                      {item.icon}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="mt-8 text-2xl font-black text-[#111] leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* CTA */}
                  <motion.a
                    whileHover={{ x: 4 }}
                    href="#contact"
                    className="
        inline-flex
        items-center
        gap-2
        mt-8
        font-bold
        uppercase
        tracking-widest
        text-sm
        text-black
      "
                  >
                    Explore More

                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 5 7 7-7 7" />
                    </svg>
                  </motion.a>
                </motion.div>

                {/* Border Glow */}
                <div
                  className="
      absolute
      inset-0
      rounded-[34px]
      border
      border-white/30
      pointer-events-none
    "
                />
              </ParticleCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}