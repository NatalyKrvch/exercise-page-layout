'use client'

import Image from 'next/image'

interface BackButtonProps {
  onClick: () => void
  text: string
  className?: string
}

export default function BackButton({
  onClick,
  text,
  className = '',
}: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-3 py-3 focus:outline-none ${className}`}
      style={{ backgroundColor: 'transparent' }}
    >
      <span className="flex items-center justify-center w-6 h-6 mr-[10px]">
        <Image
          src="/icons/arrow-left-icon.svg"
          alt="Back arrow"
          width={16}
          height={16}
          className="object-cover"
        />
      </span>
      <span className='text-darkGrayFont text-base font-semibold'>{text}</span>
    </button>
  )
}
