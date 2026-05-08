'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VIDEOS = [
  {
    title: 'Natural Weight Loss Journey',
    description:
      'See how Goodlife helped transform lifestyle and wellness naturally.',
    thumbnail:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://youtube.com/shorts/n2WwRmjnGa4?si=Rm6i623bao7gM5Vr',
  },
  {
    title: 'PCOS Recovery Experience',
    description:
      'Real success story with herbal wellness and healthy routines.',
    thumbnail:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://youtube.com/shorts/CYoyERAPbt0?si=3Rc0aHR5WigDTpsy',
  },
  {
    title: 'Fat Loss Transformation',
    description:
      'Discover how natural detox and discipline changed lives.',
    thumbnail:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://youtube.com/shorts/O-rJIeFkaaE?si=H-VCR904X5N8HFtL',
  },
  {
    title: 'Healthy Lifestyle Results',
    description:
      'Simple wellness habits with long-term transformation benefits.',
    thumbnail:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://youtube.com/shorts/Gy--1BuKvpo?si=Cpn4Txu9dv80iBG4',
  },
];

export default function GoodlifeVideos() {
  return (
    <section className="bg-[#f8f8f5] py-10">
      <div className="max-w-7xl mx-auto px-5">

        {/* HEADING */}
        <div className="mx-auto mb-10 max-w-4xl text-center">

          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.35em] text-[#FFC300]">
            Real Video Stories
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-6xl font-bold leading-[0.9] tracking-[-3px] text-[#111]"
          >
            What Goodlife
            <span className="font-normal text-[#FFC300]">
              {' '}Says
            </span>
          </motion.h2>

          <p className="mt-6 text-lg leading-relaxed text-[#666]">
            Watch inspiring wellness stories, health transformations,
            and natural healing experiences from our community.
          </p>
        </div>

        {/* VIDEO GRID */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {VIDEOS.map((video, index) => (
            <motion.a
              key={index}
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-lg border border-black/25 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)]"
            >

              {/* THUMBNAIL */}
              <div className="relative overflow-hidden">

                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* PLAY BUTTON */}
                <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-2xl backdrop-blur-xl transition-all duration-500 group-hover:scale-110">

                  <Play className="ml-1 h-8 w-8 fill-[#FFC300] text-[#FFC300]" />
                </div>

                {/* TOP LABEL */}
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-[#111] backdrop-blur-xl">
                  Goodlife Video
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-2xl font-black leading-tight tracking-[-1px] text-[#111] transition-colors duration-300 group-hover:text-[#c59a25]">
                  {video.title}
                </h3>

                <p className="mt-4 text-[15px] leading-[1.9] text-[#666]">
                  {video.description}
                </p>

                {/* BUTTON */}
                <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-5">

                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#111]">
                    Watch Video
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff7d8] text-[#FFC300] transition-all duration-300 group-hover:bg-[#FFC300] group-hover:text-white">
                    <Play className="ml-0.5 h-4 w-4 fill-current" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}