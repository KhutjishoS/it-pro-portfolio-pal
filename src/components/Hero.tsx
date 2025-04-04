
import { ArrowDown, Github, Linkedin, Code, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20 hero-gradient overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20 z-[-1]"></div>
      
      <div className="container grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 space-y-6 text-left">
          <p className="text-accent font-medium tracking-wider">Hello, my name is</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="gradient-text">John Doe</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground">
            <span className="relative">
              IT Student & Developer
              <span className="absolute bottom-0 left-0 w-full h-1 bg-accent"></span>
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl">
            I'm a final year computer science student with a passion for web development, 
            software engineering and cybersecurity. Currently seeking internship opportunities 
            to apply my skills in a professional environment.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild size="lg" className="group relative overflow-hidden">
              <a href="#contact">
                Contact Me
                <span className="absolute inset-0 w-full h-full bg-white/10 group-hover:translate-x-full transition-transform duration-300"></span>
              </a>
            </Button>
            
            <Button variant="outline" size="lg" asChild className="group hover:border-accent/50">
              <a href="#projects" className="relative">
                View Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            </Button>
          </div>
          
          <div className="flex items-center gap-6 pt-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} className="hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} className="hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
        
        <div className="md:col-span-2 relative">
          <div className="relative w-full h-80 md:h-[450px] rounded-lg overflow-hidden glass-card animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent/60 opacity-40 rounded-lg"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6 relative z-10">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
                  <div className="relative mb-6 w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">JD</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 gradient-text">John Doe</h3>
                  <p className="text-sm opacity-80 mb-4">
                    Web Developer & Cybersecurity Enthusiast
                  </p>
                  <div className="flex justify-center gap-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary-foreground">
                      <Code size={12} className="mr-1" /> Frontend
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent-foreground">
                      <Server size={12} className="mr-1" /> Backend
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-10 right-10 w-10 h-10 rounded-full bg-primary/30 backdrop-blur-sm animate-pulse-gentle"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-accent/20 backdrop-blur-sm animate-float"></div>
          <div className="absolute top-40 left-10 w-6 h-6 rounded-md bg-primary/40 backdrop-blur-sm animate-rotation"></div>
        </div>
      </div>
      
      <a 
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-accent hover:text-accent/80 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={28} />
      </a>
      
      <div className="wave-divider hidden md:block">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
