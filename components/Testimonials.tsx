import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { Quote, Linkedin, User } from 'lucide-react';
import { TESTIMONIALS } from '../utils/testimonials';

const Testimonials: React.FC = () => {
    return (
        <section id="depoimentos" className="py-20 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading subtitle="Recomendações">O que dizem sobre mim</SectionHeading>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-slate-950 p-8 rounded-2xl border border-slate-800 relative hover:border-primary-500/30 transition-colors duration-300"
                        >
                            <Quote className="text-primary-600/20 absolute top-6 right-6" size={48} />

                            <div className="relative z-10">
                                <p className="text-slate-300 mb-8 leading-relaxed italic">
                                    "{testimonial.text}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center overflow-hidden shrink-0">
                                        {testimonial.image ? (
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <User className="text-slate-500" size={24} />
                                        )}
                                    </div>

                                    <div className="flex-grow min-w-0">
                                        <h4 className="text-slate-50 font-semibold truncate text-sm sm:text-base">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-primary-400 text-xs truncate">
                                            {testimonial.role} @ {testimonial.company}
                                        </p>
                                    </div>

                                    <a
                                        href={testimonial.linkedinUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-500 hover:text-[#0077b5] transition-colors ml-2"
                                        title="Ver perfil no LinkedIn"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://www.linkedin.com/in/vvibrich/details/recommendations/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-slate-400 hover:text-white transition-colors text-sm"
                    >
                        Ver todas as recomendações no LinkedIn <Linkedin size={14} className="ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
