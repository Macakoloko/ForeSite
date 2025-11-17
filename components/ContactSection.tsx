import React from 'react';
import AnimatedElement from './AnimatedElement';
import { Instagram, Youtube, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-thin tracking-wider text-center">Contato</h2>
          <p className="mt-6 max-w-2xl mx-auto text-center font-light text-dark-subtle">
            Vamos criar algo incrível juntos. Entre em contato para agendar uma reunião.
          </p>
        </AnimatedElement>

        <AnimatedElement delay="200ms">
          <form className="mt-12 max-w-xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              <input type="text" placeholder="Nome" className="bg-transparent border-b border-dark-text/20 focus:border-dark-text outline-none py-3 transition-colors duration-300 font-light" />
              <input type="email" placeholder="Email" className="bg-transparent border-b border-dark-text/20 focus:border-dark-text outline-none py-3 transition-colors duration-300 font-light" />
              <textarea placeholder="Mensagem" rows={3} className="bg-transparent border-b border-dark-text/20 focus:border-dark-text outline-none py-3 transition-colors duration-300 font-light resize-none"></textarea>
            </div>
            <div className="mt-8 text-center">
              <button type="submit" className="px-10 py-3 text-sm font-light tracking-wider bg-dark-text text-dark-bg rounded-lg hover:opacity-80 transition-all duration-300 transform hover:scale-105">
                Enviar Mensagem
              </button>
            </div>
          </form>
        </AnimatedElement>

        <AnimatedElement delay="400ms">
            <div className="mt-16 flex justify-center space-x-6">
                <a href="#" className="text-dark-subtle hover:text-dark-text transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-dark-subtle hover:text-dark-text transition-colors"><Youtube size={20} /></a>
                <a href="#" className="text-dark-subtle hover:text-dark-text transition-colors"><Linkedin size={20} /></a>
            </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default ContactSection;