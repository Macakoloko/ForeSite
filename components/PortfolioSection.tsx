
import React, { useState, useRef, useEffect } from 'react';
import type { Project } from '../types';
import AnimatedElement from './AnimatedElement';
import Modal from './Modal';
import ProjectCard from './ProjectCard';

const projects: Project[] = [
  { 
    id: 10, 
    category: 'Gastronomia', 
    title: 'Eleven Sports Bar - Porto', 
    imageUrl: 'https://picsum.photos/seed/eleven-main/800/1200', 
    galleryUrls: [
      'https://picsum.photos/seed/eleven-main/1280/853',
      'https://picsum.photos/seed/eleven-nachos/1280/853',
      'https://picsum.photos/seed/eleven-wings/1280/853',
      'https://picsum.photos/seed/eleven-fries/1280/853',
      'https://picsum.photos/seed/eleven-burger/1280/853',
      'https://picsum.photos/seed/eleven-chef/1280/853',
      'https://picsum.photos/seed/eleven-beer/1280/853',
      'https://picsum.photos/seed/eleven-spread/1280/853',
    ],
    size: 'large' 
  },
  { id: 2, category: 'Moda', title: 'Coleção Outono', imageUrl: 'https://picsum.photos/seed/moda/800/1200', videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-posing-for-a-photo-shoot-for-a-brand-4139-large.mp4', size: 'large' },
  { id: 3, category: 'Imobiliário', title: 'Villa Luxo', imageUrl: 'https://picsum.photos/seed/imobiliario/800/600', size: 'normal' },
  { id: 4, category: 'Esportivo', title: 'Força Interior', imageUrl: 'https://picsum.photos/seed/esportivo/800/600', size: 'normal' },
  { id: 5, category: 'Moda', title: 'Urbano Chic', imageUrl: 'https://picsum.photos/seed/moda2/800/1200', size: 'large' },
  { id: 6, category: 'Restauração', title: 'Café Aconchego', imageUrl: 'https://picsum.photos/seed/restauracao2/800/600', size: 'normal' },
  { id: 7, category: 'Produto', title: 'Essência Relógios', imageUrl: 'https://picsum.photos/seed/produto/800/1200', size: 'large' },
  { id: 8, category: 'Viagem', title: 'Aventura Alpina', imageUrl: 'https://picsum.photos/seed/viagem/800/600', size: 'normal' },
  { id: 9, category: 'Corporativo', title: 'Nexus Corp', imageUrl: 'https://picsum.photos/seed/corp/800/600', size: 'normal' },
];

const PortfolioSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        container.scrollTo({
          left: container.scrollLeft + e.deltaY,
        });
      };
      container.addEventListener('wheel', onWheel, { passive: false });
      return () => container.removeEventListener('wheel', onWheel);
    }
  }, []);

  return (
    <>
      <section className="py-20 md:py-32 bg-dark-surface h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-6">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-thin tracking-wider text-center">Portfólio</h2>
            <p className="mt-6 max-w-3xl mx-auto text-center font-light text-dark-subtle">
              Projetos que definem a nossa paixão pela excelência visual.
            </p>
          </AnimatedElement>
        </div>
        <div 
          ref={scrollContainerRef}
          className="w-full mt-16 overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing"
        >
          <div className="px-16">
            <div className="grid grid-flow-col-dense grid-rows-2 gap-4 h-[34rem] auto-cols-[minmax(30vw,1fr)] md:auto-cols-[minmax(25vw,1fr)] lg:auto-cols-[minmax(20vw,1fr)]">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                  scrollContainerRef={scrollContainerRef}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
};

export default PortfolioSection;