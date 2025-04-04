
import { Github, Linkedin, Mail, Twitter, ArrowUpRight, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 bg-gradient-to-b from-muted/20 to-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="text-3xl font-bold mb-2">
              <span className="text-foreground">Dev</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Folio</span>
              <span className="text-primary animate-pulse">.</span>
            </div>
            <p className="text-muted-foreground mt-2 max-w-md">
              Building innovative digital experiences and software solutions that make a difference.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4 items-center md:items-end">
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted/30 p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all transform hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted/30 p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all transform hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted/30 p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all transform hover:scale-110"
                aria-label="Twitter Profile"
              >
                <Twitter size={18} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="bg-muted/30 p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all transform hover:scale-110"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            
            <a 
              href="#home" 
              className="text-sm text-muted-foreground hover:text-accent inline-flex items-center gap-1 group"
            >
              Back to top
              <ArrowUpRight size={14} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-muted-foreground/10 mt-10 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 flex-wrap">
            &copy; {currentYear} John Doe. All rights reserved. Made with 
            <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
            <span>and modern web technologies</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
