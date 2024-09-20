'use client';

import Image from 'next/image';

interface IconWithTextProps {
  icon: string;
  label: string;
  alt: string;
}

export default function IconWithText({ icon, label, alt }: IconWithTextProps) {
  return (
    <div className="flex items-center space-x-[3px]">
      <Image src={icon} alt={alt} width={16} height={16} />
      <span className="text-base font-normal">{label}</span>
    </div>
  );
}
