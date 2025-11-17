import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-dark-bg flex flex-col items-center justify-center z-[200] animate-fade-out" style={{ animation: 'fadeOut 1s ease-in-out forwards', animationDelay: '1.5s' }}>
      <style>{`
        @keyframes fadeOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }
      `}</style>
      <div className="text-2xl font-bold tracking-[0.5em] text-dark-text animate-subtle-slide-up">
        FOREYER
      </div>
       <div className="absolute bottom-10 text-xs text-dark-subtle tracking-widest animate-subtle-slide-up" style={{ animationDelay: '0.5s' }}>
        PRODUÇÃO AUDIOVISUAL
      </div>
    </div>
  );
};