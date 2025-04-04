
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
        const element = entry.target;
        const animationType = element.getAttribute('data-animation') || 'fade';
        
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
};
