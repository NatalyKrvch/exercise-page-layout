'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import ExerciseCard from '../ExerciseCard/ExerciseCard'

interface Exercise {
  title: string
  duration: string
  imageUrl: string
}

interface AccordionProps {
  title: string
  exercises: Exercise[]
  summary: string
}

export default function Accordion({
  title,
  exercises,
  summary,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div className="mb-2 rounded-lg bg-white px-4 py-3">
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-darkGrayFont">{title}</h3>

        <span
          className={`flex size-6 items-center justify-center transition-transform duration-300${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <Image
            src="/icons/arrow-down-icon.svg"
            alt="Arrow Icon"
            width={13}
            height={8}
          />
        </span>
      </div>

      <p className="mt-[2px] cursor-default text-sm font-medium text-lightGrayFont">
        {summary}
      </p>

      <div
        ref={contentRef}
        className={`transition-max-height overflow-hidden duration-500 ease-in-out ${
          isOpen ? 'max-h-[1000px]' : 'max-h-0'
        }`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
      >
        <div className="mt-4 space-y-4">
          {exercises.map((exercise, index) => (
            <ExerciseCard
              key={`${exercise.title}-${index}`}
              title={exercise.title}
              duration={exercise.duration}
              imageUrl={exercise.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
