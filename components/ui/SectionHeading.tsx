import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4 tracking-tight">
        {children}
      </h2>
      {subtitle && (
        <div className="w-20 h-1 bg-primary-500 rounded-full mx-auto" />
      )}
    </div>
  );
};

export default SectionHeading;