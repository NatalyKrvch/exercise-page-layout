'use client'

import Accordion from '@/app/components/Accordion/Accordion'
import { trainingData } from './mockData'
import SimpleCard from '../components/SimpleCard/SimpleCard'
import Video from '../components/Video/Video'
import BackButton from '../components/BackButton/BackButton'

export default function ExercisePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="flex flex-col w-full max-w-[1040px]">
        <div className="w-full">
          <BackButton
            onClick={() => console.log('Back to home clicked')}
            text="Back to Home"
            className="ml-0"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col flex-[2]">
            <Video />
            <p className='text-lg font-normal text-darkGrayFont'>
              This training will help you to form the core muscles which is
              necessary for more advanced exercises.
            </p>
          </div>

          <div className="flex flex-col flex-[1] rounded-lg">
            <SimpleCard
              title="Training plan"
              className="cursor-default mb-2 text-[20px] font-semibold text-darkGrayFont"
            />
            {trainingData.map((section, index) => (
              <Accordion
                key={`${section.title}-${index}`}
                title={section.title}
                summary={section.summary}
                exercises={section.exercises}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
