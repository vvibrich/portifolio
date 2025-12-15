import React, { useState } from 'react';
import { PROJECTS_PERSONAL, PROJECTS_PROFESSIONAL } from '../constants';
import SectionHeading from './ui/SectionHeading';
import Badge from './ui/Badge';
import { ExternalLink, Rocket } from 'lucide-react';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-primary-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-900/10 flex flex-col h-full">
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-slate-50 group-hover:text-primary-400 transition-colors">
          {project.name}
        </h3>
        {project.status && (
           <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 border border-slate-700 px-2 py-0.5 rounded">
             {project.status}
           </span>
        )}
      </div>
      
      <p className="text-slate-400 mb-6 flex-grow">
        {project.description}
      </p>

      <div className="space-y-4 mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <Badge key={tech} variant="outline">{tech}</Badge>
          ))}
        </div>

        {project.link ? (
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors mt-4"
          >
            Acessar projeto <ExternalLink size={14} className="ml-1" />
          </a>
        ) : (
           <span className="inline-block mt-4 text-sm text-slate-600 cursor-not-allowed">
             Link indisponível
           </span>
        )}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pro' | 'personal'>('pro');

  return (
    <section id="projetos" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Portfólio">Projetos Realizados</SectionHeading>

        <div className="flex justify-center mb-12">
          <div className="bg-slate-800 p-1 rounded-lg inline-flex">
            <button
              onClick={() => setActiveTab('pro')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'pro' 
                  ? 'bg-primary-600 text-white shadow-lg' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Profissionais
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'personal' 
                  ? 'bg-primary-600 text-white shadow-lg' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Pessoais e Inovação
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === 'pro' 
            ? PROJECTS_PROFESSIONAL.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))
            : PROJECTS_PERSONAL.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))
          }
        </div>
      </div>
    </section>
  );
};

export default Projects;