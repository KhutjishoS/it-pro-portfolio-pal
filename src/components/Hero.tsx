
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/5 via-transparent to-transparent z-[-1]"></div>
      
      <div className="container grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 space-y-6">
          <p className="text-tech-blue font-medium">Hello, my name is</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            John Doe
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground">
            <span className="relative">
              IT Student & Developer
              <span className="absolute bottom-0 left-0 w-full h-1 bg-tech-blue"></span>
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl">
            I'm a final year computer science student with a passion for web development, 
            software engineering and cybersecurity. Currently seeking internship opportunities 
            to apply my skills in a professional environment.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          
          <div className="flex items-center gap-4 pt-2">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-tech-blue transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-tech-blue transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        
        <div className="md:col-span-2 relative">
          <div className="relative w-full h-80 md:h-[450px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-tech-blue to-tech-blue/60 rounded-lg"></div>
            <div className="absolute inset-2 bg-tech-dark rounded-lg flex items-center justify-center">
              <div className="text-white text-center px-6">
                <h3 className="text-xl font-bold mb-3">Profile Picture</h3>
                <p className="text-sm opacity-80">
                  Replace this with your actual photo for a personal touch!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-tech-blue"
        aria-label="Scroll down"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
};

export default Hero;
