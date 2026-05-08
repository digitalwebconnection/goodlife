import { motion } from 'framer-motion';
import {
    ArrowRight,
    Sparkles,
    HeartPulse,
    Activity,
    ShieldCheck,
} from 'lucide-react';

export default function WellnessHeroSection() {
    return (
        <>
            <section className="relative h-160  w-full overflow-hidden flex items-center">

                {/* LAYER 1: BASE IMAGE BACKGROUND */}
                <div
                    className="absolute inset-0 bg-fixed bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://missiongoodlife.in/wp-content/uploads/2025/07/bootom.jpg')",
                    }}
                />

                {/* LAYER 2: SOPHISTICATED VIGNETTE & GLASS OVERLAY */}
                {/* This ensures text is readable regardless of the image brightness */}
                <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/20 " />

                {/* LAYER 3: COLOR ACCENTS (Blobs) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="blob blob1" />
                    <div className="blob blob2" />
                </div>

                {/* CONTENT CONTAINER */}
                <div className="container relative z-20 mx-auto px-6 md:px-0    ">
                    <div className="max-w-4xl">

                        {/* BADGE */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="mb-6 inline-flex items-center gap-3 rounded-full border border-amber-200 bg-white/80 px-6 py-2.5 shadow-sm backdrop-blur-md"
                        >
                            <Sparkles className="h-4 w-4 text-[#FFC300]" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-900">
                                Premium Naturopathy Care
                            </span>
                        </motion.div>

                        {/* MAIN HEADING */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="text-8xl font-black leading-[0.9] tracking-tighter text-white"
                        >
                            Transformative <br />
                            <span className="italic font-serif  text-[#FFC300]">Health Mastery</span>
                        </motion.h1>

                        {/* DESCRIPTION */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-white font-light"
                        >
                            Experience a home-based healing journey crafted to restore your
                            body's natural rhythm. Specializing in sustainable weight loss,
                            detoxification, and metabolic excellence.
                        </motion.p>

                        {/* ACTION BUTTONS */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="mt-10 flex flex-wrap gap-4"
                        >
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="https://api.whatsapp.com/send?phone=919979740361"
                                className="group relative overflow-hidden rounded-full bg-neutral-900 px-10 py-3 text-[11px] font-black uppercase tracking-[0.3em] text-white shadow-2xl transition-all"
                            >
                                <div className="absolute inset-0 origin-left scale-x-0 bg-[#FFC300] transition-transform duration-500 group-hover:scale-x-100" />
                                <span className="relative z-10 flex items-center gap-3 group-hover:text-neutral-900 transition-colors duration-500">
                                    Begin Now <ArrowRight className="h-4 w-4" />
                                </span>
                            </motion.a>

                            <motion.a
                                whileHover={{ backgroundColor: 'rgba(255,255,255,1)' }}
                                href="#plans"
                                className="rounded-full border border-[#FFC300] bg-white/50 px-10 py-3 text-[11px] font-black uppercase tracking-[0.3em] text-neutral-900 backdrop-blur-md transition-all"
                            >
                                View Curated Plans
                            </motion.a>
                        </motion.div>

                        {/* MINI STATS BAR */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 1 }}
                            className="mt-16 pt-8 border-t border-neutral-200/50 flex flex-wrap gap-x-12 gap-y-6"
                        >
                            {[
                                { icon: HeartPulse, val: "20K+", label: "Success Stories" },
                                { icon: ShieldCheck, val: "18+", label: "Years Mastery" },
                                { icon: Activity, val: "4.9★", label: "Client Trust" }
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <stat.icon className="h-8 w-8 text-[#FFC300]" />
                                    <div>
                                        <div className="text-xl font-bold text-white leading-none">{stat.val}</div>
                                        <div className="text-[10px] uppercase tracking-widest text-neutral-100 mt-1">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                    </div>
                </div>
            </section>

            <style >{`
        .blob {
          position: absolute;
          border-radius: 999px;
          filter: blur(80px);
          animation: float 10s ease-in-out infinite;
          opacity: 0.4;
          z-index: 5;
        }
        .blob1 {
          width: 500px;
          height: 500px;
          background: #fbbf24;
          top: -10%;
          left: -10%;
        }
        .blob2 {
          width: 400px;
          height: 400px;
          background: #fef3c7;
          bottom: 10%;
          right: 20%;
          animation-delay: -5s;
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -50px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }
      `}</style>
        </>
    );
}