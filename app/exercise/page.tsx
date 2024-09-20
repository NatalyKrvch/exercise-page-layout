'use client'

import Accordion from '@/app/components/Accordion/Accordion'
import { trainingData } from './mockData'
import SimpleCard from '../components/SimpleCard/SimpleCard'
import Video from '../components/Video/Video'
import BackButton from '../components/BackButton/BackButton'

export default function ExercisePage() {
  return (
    <div className="flex min-h-screen justify-center bg-gray-100">
      <div className="flex w-full max-w-[1040px] flex-col">
        <div className="w-full">
          <BackButton
            onClick={() => console.log('Back to home clicked')}
            text="Back to Home"
            className="ml-0"
          />
        </div>

        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex flex-[2] flex-col">
            <Video />
            <p className='text-lg font-normal text-darkGrayFont'>
              This training will help you to form the core muscles which is
              necessary for more advanced exercises.
            </p>
          </div>

          <div className="flex flex-[1] flex-col rounded-lg">
            <SimpleCard
              title="Training plan"
              className="mb-2 cursor-default text-[20px] font-semibold text-darkGrayFont"
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
