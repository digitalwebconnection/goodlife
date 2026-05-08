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
// import Plans from './components/Plans';
import Contact from './components/Contact';
import BMICalculator from './components/BMICalculator';
import Products from './components/Products';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
// import CTABanner from './components/CTABanner';
// import BlogPosts from './components/BlogPosts';
import Footer from './components/Footer';
import WellnessHeroSection from './components/WellnessSection';
import TestimonialsGallery from './components/TestimonialsGallery';

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
        {/* <Plans /> */}

        <BMICalculator />
        <WellnessHeroSection />
        <Products />
        <Contact />
        <FAQ />
        <TestimonialsGallery />
        <Testimonials />
        {/* <CTABanner /> */}
        {/* <BlogPosts /> */}
      </main>
      <Footer />
    </>
  );
}
