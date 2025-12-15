import React from 'react';
import { PROFILE, SOCIAL_LINKS } from '../constants';
import SectionHeading from './ui/SectionHeading';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading subtitle="Vamos conversar?">Contato</SectionHeading>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-800 shadow-2xl mb-12">
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de fazer parte de suas visões.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <a href={`mailto:${PROFILE.email}`} className="flex items-center space-x-3 text-slate-300 hover:text-primary-400 transition-colors bg-slate-950/50 px-6 py-4 rounded-xl border border-slate-700 w-full md:w-auto justify-center">
              <Mail className="w-6 h-6" />
              <span className="text-lg">{PROFILE.email}</span>
            </a>

            <div className="flex items-center space-x-3 text-slate-300 bg-slate-950/50 px-6 py-4 rounded-xl border border-slate-700 w-full md:w-auto justify-center">
              <MapPin className="w-6 h-6 text-primary-500" />
              <span className="text-lg">{PROFILE.location}</span>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            {/* Using placeholders for social links as they weren't strictly provided, but are essential for a portfolio */}
            <a href={SOCIAL_LINKS.linkedin} className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-primary-600 transition-all">
              <Linkedin size={24} />
            </a>
            <a href={SOCIAL_LINKS.github} className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
              <Github size={24} />
            </a>
          </div>
        </div>

        <footer className="text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} {PROFILE.name}. Todos os direitos reservados.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;