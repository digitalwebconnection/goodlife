const POSTS = [
  {
    title: "5 Natural Detox Drinks from Your Kitchen",
    excerpt: "Discover the power of simple ingredients to jumpstart your metabolism every morning.",
    category: "Natural Healing",
    date: "May 10, 2024",
    id: "blog-1",
    color: "from-brand-light to-brand-yellow/10"
  },
  {
    title: "Why Gym Isn't Mandatory for Weight Loss",
    excerpt: "Science-backed reasons why nutrition and natural movement trump intense gym sessions.",
    category: "Weight Loss",
    date: "May 05, 2024",
    id: "blog-2",
    color: "from-brand-light to-brand-yellow/20"
  },
  {
    title: "Managing PCOS with Naturopathy",
    excerpt: "A holistic guide to balancing hormones using ancient wisdom and modern science.",
    category: "Metabolic Health",
    date: "April 28, 2024",
    id: "blog-3",
    color: "from-brand-light to-brand-yellow/30"
  }
];

export default function BlogPosts() {
  return (
    <section id="blogs" className="section-padding bg-off-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div className="max-w-2xl">
            <p 
              data-aos="fade-down"
              className="inline-block px-5 py-2 rounded-full bg-brand-light text-brand-black font-black text-[10px] uppercase tracking-[0.3em] mb-6 shadow-sm border border-brand-black/10"
            >
              📖 Health Insights
            </p>
            <h2 
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-brand-black leading-[1.1] text-[clamp(2.5rem,5vw,4rem)] font-playfair font-bold"
            >
              Expert Tips for a <br />
              <span className="italic font-normal text-brand-yellow">Healthy Lifestyle</span>
            </h2>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=919979740361"
            data-aos="fade-left"
            data-aos-delay="200"
            className="flex items-center gap-3 text-brand-black font-black text-xs uppercase tracking-[0.2em] group"
          >
            Read All Articles
            <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {POSTS.map((post, i) => (
            <article
              key={post.id}
              data-aos="fade-up"
              data-aos-delay={200 + i * 150}
              className="group cursor-pointer"
            >
              {/* Card Image Placeholder / Color Block */}
              <div className={`relative h-80 rounded-[3rem] overflow-hidden bg-gradient-to-br ${post.color} mb-10 transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-4`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                  <svg className="w-40 h-40" viewBox="0 0 100 100" fill="currentColor"><path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" /></svg>
                </div>
                
                <div className="absolute top-8 left-8">
                  <span className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest text-brand-black shadow-sm border border-white/50">
                    {post.category}
                  </span>
                </div>

                {/* Read more indicator */}
                <div className="absolute bottom-8 right-8 w-14 h-14 rounded-full bg-white flex items-center justify-center text-brand-black opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 shadow-2xl">
                  <svg className="w-6 h-6 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>

              <div className="px-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">{post.date}</p>
                <h3 className="text-2xl lg:text-3xl font-black text-brand-black mb-6 leading-tight font-playfair group-hover:text-brand-yellow transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed mb-8 line-clamp-2 font-medium">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-brand-black font-black text-[10px] uppercase tracking-[0.25em] relative w-fit group/btn py-2">
                  Read Full Article
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-500 group-hover/btn:w-full" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
