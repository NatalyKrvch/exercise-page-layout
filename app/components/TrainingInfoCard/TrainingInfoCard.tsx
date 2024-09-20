'use client'

import IconWithText from '../IconWithText/IconWithText'

interface TrainingInfoCardProps {
  title: string
  level: string
  stress: string
  duration: string
  calories: string
}

export default function TrainingInfoCard({
  title,
  level,
  stress,
  duration,
  calories,
}: TrainingInfoCardProps) {
  const infoItems = [
    { icon: '/icons/star-icon.svg', label: level, alt: 'Level Icon' },
    { icon: '/icons/joints-icon.svg', label: stress, alt: 'Joints Icon' },
    { icon: '/icons/duration-icon.svg', label: duration, alt: 'Duration Icon' },
    { icon: '/icons/energy-icon.svg', label: calories, alt: 'Calories Icon' },
  ]

  return (
    <div className="bg-darkBackground text-white p-4 rounded-xl flex flex-col space-y-4">
      <h3 className="text-2xl font-bold">{title}</h3>

      <div className="flex flex-wrap space-x-6 items-center">
        {infoItems.map((item, index) => (
          <IconWithText
            key={index}
            icon={item.icon}
            label={item.label}
            alt={item.alt}
          />
        ))}
      </div>
    </div>
  )
}
