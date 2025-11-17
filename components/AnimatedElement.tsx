
import React from 'react';
import { useScrollObserver } from '../hooks/useScrollObserver';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up';
  delay?: string; // e.g., '200ms'
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className = '', animation = 'slide-up', delay = '0ms' }) => {
  const { ref, isVisible } = useScrollObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
      style={{
        animation: isVisible ? `${animation} 1s ease-out forwards` : 'none',
        animationDelay: delay,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
