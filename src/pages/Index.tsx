
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import DocumentUpload from '@/components/DocumentUpload';
import Footer from '@/components/Footer';
import { setupScrollAnimation } from '@/utils/scroll';

const Index = () => {
  useEffect(() => {
    // Apply animation effect on scroll
    setupScrollAnimation();
    
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
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        
        <div className="reveal">
          <About />
        </div>
        
        <div className="reveal">
          <Projects />
        </div>
        
        <div className="reveal">
          <Skills />
        </div>
        
        <div className="reveal">
          <DocumentUpload />
        </div>
        
        <div className="reveal">
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
