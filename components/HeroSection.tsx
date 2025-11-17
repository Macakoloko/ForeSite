import React, { useRef, useEffect } from 'react';

interface HeroSectionProps {
  onNavigate: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
        if (heroContentRef.current) {
            const scrollY = window.scrollY;
            if (scrollY < window.innerHeight) {
              heroContentRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
              heroContentRef.current.style.opacity = `${1 - scrollY / (window.innerHeight / 1.5)}`;
            }
        }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-ripples-on-the-surface-of-dark-water-3245-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div ref={heroContentRef} className="relative z-20 px-6 text-white transition-transform ease-out">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-widest animate-subtle-slide-up" style={{ animationDelay: '0.5s' }}>
          FOREYER
        </h1>
        <p className="mt-4 text-lg md:text-xl font-light tracking-wider animate-subtle-slide-up" style={{ animationDelay: '1s' }}>
          Produção Audiovisual Premium
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-subtle-slide-up" style={{ animationDelay: '1.5s' }}>
          <button
            onClick={onNavigate}
            className="w-full sm:w-auto px-8 py-3 text-sm font-light tracking-wider border border-white/50 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm transform hover:scale-105"
          >
            Ver Portfólio
          </button>
          <button
             onClick={() => window.open('https://calendly.com', '_blank')}
            className="w-full sm:w-auto px-8 py-3 text-sm font-light tracking-wider bg-white/90 text-black rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105"
          >
            Agendar Reunião
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;