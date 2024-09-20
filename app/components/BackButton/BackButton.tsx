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
      className={`flex items-center p-3 focus:outline-none ${className}`}
      style={{ backgroundColor: 'transparent' }}
    >
      <span className="mr-[10px] flex size-6 items-center justify-center">
        <Image
          src="/icons/arrow-left-icon.svg"
          alt="Back arrow"
          width={16}
          height={16}
          className="object-cover"
        />
      </span>
      <span className='text-base font-semibold text-darkGrayFont'>{text}</span>
    </button>
  )
}
