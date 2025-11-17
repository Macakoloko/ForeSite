import React from 'react';
import type { Testimonial } from '../types';
import AnimatedElement from './AnimatedElement';

const testimonials: Testimonial[] = [
  {
    quote: "A foreyer transformou nossa visão em realidade. A qualidade cinematográfica superou todas as expectativas.",
    author: "Ana Costa",
    company: "CEO, Moda & Cia"
  },
  {
    quote: "Profissionalismo e criatividade do início ao fim. O resultado foi um vídeo impactante que impulsionou nossas vendas.",
    author: "Miguel Santos",
    company: "Diretor de Marketing, Lux Imóveis"
  }
];

const ClientLogo: React.FC<{ name: string }> = ({ name }) => (
  <div className="h-12 flex items-center justify-center text-dark-subtle grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
    <span className="text-2xl font-thin tracking-widest">{name}</span>
  </div>
);

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-dark-surface">
      <div className="container mx-auto px-6">
        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-thin tracking-wider text-center">Clientes & Prova Social</h2>
        </AnimatedElement>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
            <AnimatedElement><ClientLogo name="NEXUS" /></AnimatedElement>
            <AnimatedElement delay="100ms"><ClientLogo name="AURA" /></AnimatedElement>
            <AnimatedElement delay="200ms"><ClientLogo name="VRTX" /></AnimatedElement>
            <AnimatedElement delay="300ms"><ClientLogo name="SOLSTICE" /></AnimatedElement>
            <AnimatedElement delay="400ms"><ClientLogo name="ECLIPSE" /></AnimatedElement>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <AnimatedElement key={index} delay={`${index * 150}ms`}>
              <div className="text-center">
                <blockquote className="text-xl font-light italic text-dark-text">"{testimonial.quote}"</blockquote>
                <p className="mt-4 text-md font-semibold tracking-wider">{testimonial.author}</p>
                <p className="text-sm text-dark-subtle">{testimonial.company}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;