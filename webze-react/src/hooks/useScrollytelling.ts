import { useState, useEffect, useRef } from 'react';

interface ScrollytellingOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollytelling = (options: ScrollytellingOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = false
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Intersection Observer for visibility
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observerRef.current.observe(element);

    // Scroll progress calculation
    const handleScroll = () => {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the element has been scrolled through
      const scrollTop = window.pageYOffset;
      const elementTop = rect.top + scrollTop;
      const elementBottom = elementTop + elementHeight;
      
      const viewportTop = scrollTop;
      const viewportBottom = scrollTop + windowHeight;
      
      if (viewportBottom >= elementTop && viewportTop <= elementBottom) {
        const visibleHeight = Math.min(viewportBottom, elementBottom) - Math.max(viewportTop, elementTop);
        const progress = visibleHeight / (elementHeight + windowHeight);
        setScrollProgress(Math.min(Math.max(progress, 0), 1));
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return {
    ref: elementRef,
    isVisible,
    scrollProgress,
    opacity: scrollProgress,
    translateY: (1 - scrollProgress) * 50,
    scale: 0.8 + scrollProgress * 0.2
  };
};

export const useParallax = (speed: number = 0.5) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offsetY;
};

export const useCountUp = (end: number, duration: number = 2000, shouldStart: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, shouldStart]);

  return count;
};
