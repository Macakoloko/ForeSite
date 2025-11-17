import React, { useEffect, useRef, useState } from 'react';

export const useScrollObserver = (options?: IntersectionObserverInit & { rootRef?: React.RefObject<Element> }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { ...options, root: options?.rootRef?.current ?? null });

    observer.observe(node);

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [ref, options]);

  return { ref, isVisible };
};
