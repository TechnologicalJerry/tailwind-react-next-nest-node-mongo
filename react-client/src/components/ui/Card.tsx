import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  footer?: React.ReactNode;
}

export default function Card({ children, className = '', title, footer }: CardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all duration-300 hover:border-blue-300/50 ${className}`}>
      {title && (
        <div className="px-6 py-4 border-b border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 tracking-tight">{title}</h3>
        </div>
      )}
      <div className="px-6 py-5">{children}</div>
      {footer && (
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 rounded-b-xl text-sm text-slate-500">{footer}</div>
      )}
    </div>
  );
}
