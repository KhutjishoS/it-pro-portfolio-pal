
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { setupScrollAnimation } from '@/utils/scroll';

const Index = () => {
  useEffect(() => {
    // Apply animation effect on scroll
    const cleanup = setupScrollAnimation();
    
    // Scroll to top on initial load
    window.scrollTo(0, 0);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none"></div>
      
      <Header />
      
      <main>
        <Hero />
        
        <div className="reveal" data-animation="slide-right" data-delay="200">
          <About />
        </div>
        
        <div className="reveal" data-animation="slide-left" data-delay="200">
          <Projects />
        </div>
        
        <div className="reveal" data-animation="fade-up" data-delay="200">
          <Skills />
        </div>
        
        <div className="reveal" data-animation="zoom" data-delay="200">
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
