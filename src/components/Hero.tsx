
import { ArrowDown, Github, Linkedin, Code, Server, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation timing
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);
  
  const calculateTransform = () => {
    const moveX = (mousePosition.x - 0.5) * 20;
    const moveY = (mousePosition.y - 0.5) * 20;
    return `rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative pt-20 overflow-hidden bg-gradient-to-b from-background via-background to-muted/30"
    >
      <div 
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(124, 58, 237, 0.2) 0%, transparent 50%)`
        }}
      ></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              opacity: Math.random() * 0.6 + 0.2,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container grid md:grid-cols-5 gap-12 items-center relative z-10">
        <div 
          className={`md:col-span-3 space-y-6 text-left transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
            <Sparkles size={16} className="animate-pulse" />
            <p className="text-sm font-medium">Creative Developer Portfolio</p>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            <span className="animated-gradient-text">John Doe</span>
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-accent via-primary/80 to-accent bg-clip-text text-transparent">
            IT Student & Developer
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            I'm a final year computer science student with a passion for web development, 
            software engineering and cybersecurity. Creating intuitive digital experiences 
            that solve real-world problems.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Button 
              asChild 
              size="lg" 
              className="group relative overflow-hidden frosted-glass bg-accent hover:bg-accent/90"
            >
              <a href="#contact">
                Contact Me
                <span className="absolute inset-0 w-full h-full bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              asChild 
              className="group animated-border backdrop-blur-sm"
            >
              <a href="#projects" className="relative">
                <span className="relative z-10">View Projects</span>
              </a>
            </Button>
          </div>
          
          <div className="flex items-center gap-6 pt-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors hover:scale-110 transform duration-200"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors hover:scale-110 transform duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        
        <div 
          className={`md:col-span-2 relative transition-all duration-1000 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } delay-300`}
        >
          <div 
            className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden card-3d"
            style={{
              transform: calculateTransform(),
              transition: 'transform 0.5s ease-out'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 opacity-70 rounded-xl"></div>
            
            <div className="absolute inset-0 backdrop-blur-lg flex items-center justify-center frosted-glass rounded-xl">
              <div className="text-center px-6 relative z-10">
                <div className="bg-gradient-to-br from-background/80 to-background/40 p-8 rounded-xl backdrop-blur-md border border-white/10 shadow-xl">
                  <div className="relative mb-6 w-32 h-32 mx-auto rounded-full overflow-hidden glow">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse-gentle">
                      <span className="text-4xl font-bold text-white">JD</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 animated-gradient-text">John Doe</h3>
                  <p className="text-md opacity-90 mb-5">
                    Web Developer & Cybersecurity Enthusiast
                  </p>
                  
                  <div className="flex justify-center gap-4 flex-wrap">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-primary/20 text-primary-foreground backdrop-blur-sm">
                      <Code size={12} className="mr-1" /> Frontend
                    </span>
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-accent/20 text-accent-foreground backdrop-blur-sm">
                      <Server size={12} className="mr-1" /> Backend
                    </span>
                  </div>
                  
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {['React', 'Node.js', 'Python'].map((skill, index) => (
                      <div key={index} className="text-xs py-1 px-2 bg-background/50 rounded-md backdrop-blur-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-primary/10 animate-pulse-gentle blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-accent/10 animate-float blur-xl"></div>
          <div className="absolute top-1/3 left-10 w-12 h-12 rounded-md bg-primary/20 animate-rotation blur-md"></div>
        </div>
      </div>
      
      <a 
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-accent hover:text-accent/80 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={28} className="glow" />
      </a>
    </section>
  );
};

export default Hero;
