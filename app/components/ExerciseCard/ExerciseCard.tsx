'use client'

import Image from 'next/image'

interface ExerciseCardProps {
  title: string
  duration: string
  imageUrl: string
}

export default function ExerciseCard({
  title,
  duration,
  imageUrl,
}: ExerciseCardProps) {
  return (
    <div className="mb-4 flex items-center space-x-4">
      <div className="relative size-16">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      <div className="mx-[12px] my-[13px] cursor-default">
        <h4 className="text-sm font-semibold text-darkGrayFont">{title}</h4>
        <p className="text-sm font-medium text-lightGrayFont">{duration}</p>
      </div>
    </div>
  )
}
