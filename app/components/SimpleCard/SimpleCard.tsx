'use client';

import React from 'react';

interface CardProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export default function SimpleCard({ title, children, className }: CardProps) {
  return (
    <div className={`rounded-lg bg-white p-3 ${className}`}>
      <h3>{title}</h3>
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
}
