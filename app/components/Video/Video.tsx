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
    <div className="flex max-w-full flex-col">
      <div className="relative w-full overflow-hidden rounded-t-xl">
        <Image
          src="/images/training-placeholder.png" // TODO: Replace with real video
          alt="Video Placeholder"
          width={1600}
          height={900}
          className="w-full object-cover"
        />

        {showOverlay && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/15">
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

