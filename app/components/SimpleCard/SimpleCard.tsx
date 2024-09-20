'use client';

import React from 'react';

interface CardProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export default function SimpleCard({ title, children, className }: CardProps) {
  return (
    <div className={`bg-white rounded-lg p-3 ${className}`}>
      <h3>{title}</h3>
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
}
