
import React, { useEffect } from 'react';
import type { Service } from '../types';
import { X } from 'lucide-react';

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Em uma aplicação real, aqui seria o envio dos dados para um servidor.
    // Para esta demonstração, exibimos um alerta e fechamos o modal.
    alert(`Obrigado pelo seu interesse em "${service.name}"! Entraremos em contato em breve.`);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-dark-surface w-full max-w-lg max-h-[90vh] rounded-xl overflow-auto relative animate-scale-up-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-dark-subtle hover:text-dark-text z-10 p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-light tracking-wider">{service.name}</h3>
          <p className="mt-2 text-3xl md:text-4xl font-thin text-dark-subtle">
            €{service.price}
            {service.isMonthly && <span className="text-base font-light tracking-normal">/mês</span>}
          </p>
          <p className="mt-6 text-md font-light text-dark-subtle leading-relaxed">
            {service.description}
          </p>

          <div className="mt-8 pt-8 border-t border-dark-text/10">
             <h4 className="text-xl font-light tracking-wider text-center">Peça um Orçamento</h4>
             <form className="mt-6 max-w-xl mx-auto" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                <input type="hidden" name="service" value={service.name} />
                <input type="text" name="name" placeholder="Nome" className="bg-transparent border-b border-dark-text/20 focus:border-dark-text outline-none py-3 transition-colors duration-300 font-light" required />
                <input type="email" name="email" placeholder="Email" className="bg-transparent border-b border-dark-text/20 focus:border-dark-text outline-none py-3 transition-colors duration-300 font-light" required />
                </div>
                <div className="mt-8 text-center">
                <button type="submit" className="px-10 py-3 text-sm font-light tracking-wider bg-dark-text text-dark-bg rounded-lg hover:opacity-80 transition-all duration-300 transform hover:scale-105">
                    Solicitar
                </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
