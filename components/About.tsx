import React from 'react';
import { ABOUT_TEXT, EDUCATION } from '../constants';
import SectionHeading from './ui/SectionHeading';
import { GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-slate-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Perfil Profissional">Sobre Mim</SectionHeading>
        
        <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800 shadow-xl backdrop-blur-sm">
          <p className="text-lg text-slate-300 leading-relaxed whitespace-pre-line mb-8">
            {ABOUT_TEXT}
          </p>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-900/20 rounded-lg text-primary-400">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-50">Formação Acadêmica</h3>
                <p className="text-primary-400 font-medium mt-1">{EDUCATION.degree}</p>
                <p className="text-slate-400">{EDUCATION.school}</p>
                <p className="text-slate-500 text-sm">{EDUCATION.period}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;