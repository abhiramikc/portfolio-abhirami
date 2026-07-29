import { useRef, useEffect, useState } from 'react';

interface UseInViewOptions {
  threshold?: number | number[];
  triggerOnce?: boolean;
  margin?: string;
}

export const useInView = (options: UseInViewOptions = {}) => {
  const { threshold = 0.1, triggerOnce = false, margin = '0px' } = options;
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) {
            setHasBeenInView(true);
          }
        } else {
          if (!triggerOnce) {
            setInView(false);
          }
        }
      },
      {
        threshold,
        rootMargin: margin,
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, triggerOnce, margin]);

  return {
    ref,
    inView: triggerOnce ? hasBeenInView || inView : inView,
  };
};
