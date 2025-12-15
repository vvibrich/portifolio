import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary' }) => {
  const baseClasses = "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200";
  
  const variants = {
    primary: "bg-primary-900/30 text-primary-300 border border-primary-700/50 hover:bg-primary-900/50",
    secondary: "bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700",
    outline: "bg-transparent text-slate-400 border border-slate-700"
  };

  return (
    <span className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </span>
  );
};

export default Badge;