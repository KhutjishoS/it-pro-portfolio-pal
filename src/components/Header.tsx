
import { useState, useEffect } from 'react';
import { Menu, X, Code, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
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

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-tech-dark/80 shadow-md backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="text-2xl font-bold">
          <a href="#home" className="group flex items-center">
            <div className="mr-2 relative">
              <Terminal size={28} className="text-primary group-hover:text-accent transition-colors" />
              <Code size={16} className="absolute -bottom-1 -right-1 text-accent group-hover:text-primary transition-colors" />
            </div>
            <div>
              <span className="text-foreground font-poppins">Dev</span>
              <span className="text-accent font-poppins">Folio</span>
              <span className="text-primary">.</span>
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
                  className="font-medium hover-underline text-muted-foreground hover:text-accent transition-colors py-2"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

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
        <div className="md:hidden bg-background/95 dark:bg-tech-dark/95 backdrop-blur-md border-t border-accent/10 animate-fade-in">
          <nav className="container py-6">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="block font-medium text-lg py-2 text-muted-foreground hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
