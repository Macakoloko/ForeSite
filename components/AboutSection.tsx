
import React from 'react';
import type { TeamMember } from '../types';
import AnimatedElement from './AnimatedElement';

const team: TeamMember[] = [
  { name: 'Vanessa', role: 'Fotógrafa & Seller', imageUrl: 'https://picsum.photos/seed/vanessa/400/500' },
  { name: 'Sara', role: 'Produtora & Seller', imageUrl: 'https://picsum.photos/seed/sara/400/500' },
  { name: 'Gabriel', role: 'Videomaker', imageUrl: 'https://picsum.photos/seed/gabriel/400/500' },
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="group relative rounded-xl overflow-hidden aspect-[4/5]">
      <img 
        src={member.imageUrl} 
        alt={member.name} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="relative h-full flex flex-col justify-end p-8 text-white">
        <h3 className="text-2xl font-medium tracking-wide transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
          {member.name}
        </h3>
        <p className="text-md font-light tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 ease-in-out">
          {member.role}
        </p>
      </div>
    </div>
  );
};


const AboutSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-thin tracking-wider text-center">Sobre a foreyer</h2>
          <p className="mt-6 max-w-3xl mx-auto text-center font-light text-dark-subtle">
            Somos uma produtora audiovisual focada em criar conteúdo premium que eleva marcas. Combinamos estética cinematográfica com estratégia de marketing para contar histórias que ressoam e convertem.
          </p>
        </AnimatedElement>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <AnimatedElement key={member.name} delay={`${index * 150}ms`}>
              <TeamMemberCard member={member} />
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;