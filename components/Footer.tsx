
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-dark-text/10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs text-dark-subtle tracking-wider font-light">
          &copy; {new Date().getFullYear()} foreyer. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;