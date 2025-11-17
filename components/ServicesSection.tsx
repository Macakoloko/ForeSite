
import React, { useRef, MouseEvent, useState } from 'react';
import type { Service } from '../types';
import AnimatedElement from './AnimatedElement';
import ServiceModal from './ServiceModal';

const services: Service[] = [
  { name: 'Pack 3 Reels', price: '190', description: 'Ideal para manter a consistência nas redes sociais. Criamos 3 Reels de alta qualidade, otimizados para engajamento, com edição dinâmica e música em alta.' },
  { name: 'Vídeo Comercial Curto', price: '250', description: 'Um vídeo de até 60 segundos para campanhas online. Foco em mensagem direta, apelo visual forte e call-to-action eficaz para promover um produto ou serviço.' },
  { name: 'Editorial de Moda Básico', price: '350', description: 'Sessão fotográfica e de vídeo para coleções de moda. Entregamos um conjunto de visuais coesos e impactantes para catálogos, redes sociais e websites.' },
  { name: 'Vídeo Institucional Rápido', price: '400', description: 'Apresente a sua empresa de forma profissional. Um vídeo curto que comunica a missão, os valores e os diferenciais da sua marca de maneira clara e sofisticada.' },
  { name: 'Plano Moda Essencial', price: '380', isMonthly: true, description: 'Produção mensal de conteúdo para marcas de moda. Inclui 1 sessão de fotos e 4 vídeos curtos (Reels/TikTok) para manter o seu perfil sempre atualizado e relevante.' },
  { name: 'Plano Restaurante Premium', price: '650', isMonthly: true, description: ' cobertura completa para restaurantes. Produção mensal de fotos de pratos, vídeos do ambiente e conteúdo para redes sociais, destacando a sua gastronomia.' },
  { name: 'Plano Moda Editorial Mensal', price: '700', isMonthly: true, description: 'O pacote definitivo para marcas de moda. Inclui 2 editoriais completos por mês, com produção de vídeo e fotografia, ideal para lançamento de coleções e campanhas.' },
];

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };
  
  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onClick={onClick}
      className="service-card border border-dark-text/10 p-8 text-center h-full flex flex-col justify-between rounded-lg relative overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:border-dark-text/20 hover:shadow-xl hover:shadow-black/20 cursor-pointer"
    >
        <div className="relative z-10 flex flex-col flex-grow justify-center">
            <h3 className="text-lg font-light tracking-wider">{service.name}</h3>
            <p className="mt-4 text-4xl font-thin">
            €{service.price}
            {service.isMonthly && <span className="text-base font-light tracking-normal">/mês</span>}
            </p>
        </div>
    </div>
  )
}


const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-thin tracking-wider text-center">Serviços</h2>
            <p className="mt-6 max-w-3xl mx-auto text-center font-light text-dark-subtle">
              Soluções audiovisuais desenhadas para cada necessidade.
            </p>
          </AnimatedElement>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedElement key={service.name} delay={`${index * 100}ms`}>
                <ServiceCard service={service} onClick={() => setSelectedService(service)} />
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
      {selectedService && (
        <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </>
  );
};

export default ServicesSection;
