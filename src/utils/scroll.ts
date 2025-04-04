
export const setupScrollAnimation = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add different animation classes based on data attribute
        const element = entry.target as HTMLElement;
        const animationType = element.getAttribute('data-animation') || 'fade';
        const delay = element.getAttribute('data-delay') || '0';
        
        element.style.transitionDelay = `${delay}ms`;
        
        switch(animationType) {
          case 'slide-right':
            element.classList.add('active-slide-right');
            break;
          case 'slide-left':
            element.classList.add('active-slide-left');
            break;
          case 'zoom':
            element.classList.add('active-zoom');
            break;
          case 'fade-up':
            element.classList.add('active-fade-up');
            break;
          default:
            element.classList.add('active');
        }
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  const elements = document.querySelectorAll('.reveal');
  elements.forEach(element => {
    observer.observe(element);
  });
  
  // Parallax effect
  const handleParallax = () => {
    const elements = document.querySelectorAll('.parallax');
    
    elements.forEach((element) => {
      const speed = parseFloat((element as HTMLElement).dataset.speed || '0.2');
      const yPos = -(window.scrollY * speed);
      (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
    });
  };
  
  window.addEventListener('scroll', handleParallax);
  
  // Mouse move effects
  const handleMouseMove = (e: MouseEvent) => {
    const elements = document.querySelectorAll('.mouse-move');
    
    elements.forEach((element) => {
      const speed = parseFloat((element as HTMLElement).dataset.speed || '0.05');
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;
      
      (element as HTMLElement).style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };
  
  document.addEventListener('mousemove', handleMouseMove);
  
  return () => {
    window.removeEventListener('scroll', handleParallax);
    document.removeEventListener('mousemove', handleMouseMove);
  };
};
