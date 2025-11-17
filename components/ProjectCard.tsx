
import React from 'react';
import { useScrollObserver } from '../hooks/useScrollObserver';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, scrollContainerRef }) => {
  const { ref, isVisible } = useScrollObserver({
    threshold: 0.2,
    rootRef: scrollContainerRef,
  });

  const sizeClasses = project.size === 'large' ? 'row-span-2' : 'row-span-1';

  return (
    <div
      ref={ref}
      className={`relative cursor-pointer overflow-hidden rounded-xl group transition-all duration-700 ease-in-out ${sizeClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      onClick={onClick}
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-start p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="text-left text-white">
          <h3 className="text-xl font-light tracking-wider">{project.title}</h3>
          <p className="text-sm font-thin">{project.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
