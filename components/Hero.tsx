import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-900/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <div className="inline-block animate-fade-in-up">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-900/30 text-primary-300 border border-primary-700/50 mb-4">
              Disponível para novos desafios
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-50 tracking-tight leading-tight">
            Olá, eu sou <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">{PROFILE.name}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto">
            {PROFILE.role}
          </p>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {PROFILE.headline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href="#projetos"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors md:text-lg shadow-lg shadow-primary-900/20"
            >
              Ver Projetos
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
            
            <a
              href="#contato"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-slate-700 text-base font-medium rounded-lg text-slate-300 bg-slate-800/50 hover:bg-slate-800 hover:text-white transition-colors md:text-lg backdrop-blur-sm"
            >
              <Mail className="mr-2 -ml-1 h-5 w-5" />
              Entrar em Contato
            </a>

            <button
              onClick={() => alert('Link para download do CV seria acionado aqui.')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-primary-200 bg-primary-900/20 hover:bg-primary-900/40 transition-colors md:text-lg"
            >
              <Download className="mr-2 -ml-1 h-5 w-5" />
              Baixar CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;