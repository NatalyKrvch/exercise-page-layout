'use client';

import { useState } from 'react';
import Image from 'next/image';
import { mockTrainingData } from '../TrainingInfoCard/mockData';
import TrainingInfoCard from '../TrainingInfoCard/TrainingInfoCard';
import MainButton from '../MainButton/MainButton';


export default function Video() {
  const [showOverlay, setShowOverlay] = useState(true);

  const handleButtonClick = () => {
    setShowOverlay(false);
  };

  return (
    <div className="flex flex-col max-w-full">
      <div className="w-full rounded-t-xl overflow-hidden relative">
        <Image
          src="/images/training-placeholder.png" // TODO: Replace with real video
          alt="Video Placeholder"
          width={1600}
          height={900}
          className="object-cover w-full"
        />

        {showOverlay && (
          <div className="absolute inset-0 bg-black bg-opacity-15 flex justify-center items-center">
            <MainButton onClick={handleButtonClick} text='BEGIN TRAINING'/>
          </div>
        )}
      </div>

      <div className="relative top-[-30px] w-full">
        <TrainingInfoCard
          title={mockTrainingData.title}
          level={mockTrainingData.level}
          stress={mockTrainingData.stress}
          duration={mockTrainingData.duration}
          calories={mockTrainingData.calories}
        />
      </div>
    </div>
  );
}

