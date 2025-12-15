import React from 'react';
import { SKILLS, SOFT_SKILLS } from '../constants';
import SectionHeading from './ui/SectionHeading';
import Badge from './ui/Badge';
import { CheckCircle2, Code2, Database, Layout, Server } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (title: string) => {
    if (title.includes('Frontend')) return <Layout size={20} />;
    if (title.includes('Backend')) return <Database size={20} />;
    if (title.includes('Arquitetura')) return <Code2 size={20} />;
    if (title.includes('DevOps')) return <Server size={20} />;
    return <Code2 size={20} />;
  };

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Stack Tecnológica">Competências Técnicas</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SKILLS.map((category) => (
            <div key={category.title} className="bg-slate-800/40 rounded-xl p-6 border border-slate-700 hover:border-primary-600/50 transition-colors">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary-900/30 rounded-lg text-primary-400">
                  {getIcon(category.title)}
                </div>
                <h3 className="text-xl font-bold text-slate-100">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-slate-50 mb-8">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {SOFT_SKILLS.map((skill) => (
              <div key={skill} className="flex items-center space-x-2 bg-slate-950 px-4 py-2 rounded-full border border-slate-800 text-slate-300">
                <CheckCircle2 size={16} className="text-primary-500" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;