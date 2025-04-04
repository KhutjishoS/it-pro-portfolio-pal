
import { useState, useEffect } from 'react';
import { Menu, X, Code, Terminal, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];
  
  const isActive = (href: string) => {
    return activeSection === href.replace('#', '');
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/70 backdrop-blur-lg shadow-md border-b border-white/5 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="text-2xl font-bold">
          <a href="#home" className="group flex items-center">
            <div className="mr-2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-lg blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-background rounded-lg p-1 flex items-center justify-center">
                <Terminal size={22} className="text-primary group-hover:text-accent transition-colors" />
                <Code size={12} className="absolute -bottom-1 -right-1 text-accent group-hover:text-primary transition-colors" />
              </div>
            </div>
            <div>
              <span className="text-foreground font-poppins">Dev</span>
              <span className="text-accent font-poppins">Folio</span>
              <span className="text-primary animate-pulse">.</span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className={`font-medium relative py-2 transition-colors ${
                    isActive(link.href) 
                      ? 'text-accent' 
                      : 'text-muted-foreground hover:text-accent'
                  }`}
                >
                  {link.name}
                  
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"></span>
                  )}
                  
                  {!isActive(link.href) && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-300"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Let's Talk Button (Desktop) */}
        <div className="hidden md:block">
          <Button 
            asChild 
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            size="sm"
          >
            <a href="#contact" className="group">
              <Sparkles size={14} className="mr-2 animate-pulse-gentle" />
              Let's Talk
              <span className="absolute inset-0 w-full h-full bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden hover:bg-accent/10 hover:text-accent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/90 backdrop-blur-xl animate-fade-in border-t border-accent/10">
          <nav className="container py-6">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className={`block font-medium text-lg py-2 ${
                      isActive(link.href) 
                        ? 'text-accent' 
                        : 'text-muted-foreground hover:text-accent'
                    } transition-colors`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                    {isActive(link.href) && (
                      <span className="inline-block ml-2 w-2 h-2 rounded-full bg-accent"></span>
                    )}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <Button 
                  asChild 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                >
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    <Sparkles size={14} className="mr-2" />
                    Let's Talk
                  </a>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
