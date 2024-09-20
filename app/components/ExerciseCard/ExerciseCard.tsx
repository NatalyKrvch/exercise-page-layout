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
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-16 h-16 relative">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      <div className="my-[13px] mx-[12px] cursor-default">
        <h4 className="text-sm text-darkGrayFont font-semibold">{title}</h4>
        <p className="text-sm text-lightGrayFont font-medium">{duration}</p>
      </div>
    </div>
  )
}
