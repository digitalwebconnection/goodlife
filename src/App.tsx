import { useEffect } from 'react';
import Lenis from 'lenis';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import HealthChallenges from './components/HealthChallenges';
import SlimAtHome from './components/SlimAtHome';
import About from './components/About';
import StatsCounter from './components/StatsCounter';
import Plans from './components/Plans';
import Contact from './components/Contact';
import BMICalculator from './components/BMICalculator';
import Products from './components/Products';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
// import CTABanner from './components/CTABanner';
// import BlogPosts from './components/BlogPosts';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <HealthChallenges />
        <SlimAtHome />
        <About />
        <StatsCounter />
        <Plans />
        <Contact />
        <BMICalculator />
        <Products />
        <FAQ />
        <Testimonials />
        {/* <CTABanner /> */}
        {/* <BlogPosts /> */}
      </main>
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href="https://api.whatsapp.com/send?phone=919979740361&text=Hi,%20I%20want%20to%20Slim%20at%20of%20*Home*."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full shadow-2xl flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110"
        style={{ boxShadow: '0 4px 30px rgba(37,211,102,0.5)' }}
      >
        💬
      </a>
    </>
  );
}
