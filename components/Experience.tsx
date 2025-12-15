import React from 'react';
import { EXPERIENCE } from '../constants';
import SectionHeading from './ui/SectionHeading';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Trajetória">Experiência Profissional</SectionHeading>

        <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-slate-950 border-2 border-primary-500 ring-4 ring-slate-950"></span>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-50">{exp.role}</h3>
                <span className="text-sm font-medium text-primary-400 bg-primary-900/10 px-3 py-1 rounded-full mt-1 sm:mt-0 w-fit">
                  {exp.period}
                </span>
              </div>
              
              <div className="flex items-center text-slate-400 mb-4">
                <Briefcase size={16} className="mr-2" />
                <span className="font-semibold">{exp.company}</span>
              </div>
              
              <p className="text-slate-300 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}

          {/* Others */}
          <div className="relative pl-8 md:pl-12">
            <span className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-slate-700"></span>
            <h4 className="text-lg font-semibold text-slate-200 mb-2">Outros projetos relevantes</h4>
            <p className="text-slate-400">
              Kurz App, SouTag, SmartRacks, Prontuei, Mapa Solidário.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;