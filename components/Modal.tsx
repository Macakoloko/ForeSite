import React, { useEffect, useState } from 'react';
import type { Project } from '../types';
import { X } from 'lucide-react';

interface ModalProps {
  project: Project;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  const [currentImageUrl, setCurrentImageUrl] = useState(project.imageUrl);

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

  useEffect(() => {
    // Reset image when project changes
    setCurrentImageUrl(project.imageUrl);
  }, [project]);

  const hasGallery = project.galleryUrls && project.galleryUrls.length > 0;
  const hasVideo = project.videoUrl;

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className={`bg-dark-bg w-full ${hasGallery ? 'max-w-6xl' : 'max-w-4xl'} max-h-[90vh] rounded-lg overflow-hidden relative animate-scale-up-fade-in flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-dark-subtle hover:text-dark-text z-20 p-2 rounded-full bg-dark-bg/50 hover:bg-dark-bg/80 transition-all"
        >
          <X size={24} />
        </button>

        <div className="flex-grow w-full bg-black flex items-center justify-center">
            {hasVideo ? (
                <video src={project.videoUrl} controls autoPlay loop className="max-w-full max-h-full object-contain" />
            ) : hasGallery ? (
                <img src={currentImageUrl} alt={project.title} className="max-w-full max-h-full object-contain" />
            ) : (
                <img src={project.imageUrl} alt={project.title} className="max-w-full max-h-full object-contain" />
            )}
        </div>
        
        <div className="flex-shrink-0 p-6 bg-dark-surface">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-light tracking-wider">{project.title}</h3>
              <p className="text-md text-dark-subtle mt-1">{project.category}</p>
            </div>
          </div>
          {hasGallery && (
            <div className="mt-4 pt-4 border-t border-dark-text/10">
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                {project.galleryUrls?.map((url, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentImageUrl(url)}
                    className={`cursor-pointer rounded-md overflow-hidden aspect-square transition-all duration-200 ${currentImageUrl === url ? 'ring-2 ring-offset-2 ring-offset-dark-bg ring-white' : 'opacity-60 hover:opacity-100'}`}
                  >
                    <img src={url} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
