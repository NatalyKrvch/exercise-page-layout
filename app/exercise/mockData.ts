interface Exercise {
  title: string;
  duration: string;
  imageUrl: string;
}

interface TrainingSection {
  title: string;
  summary: string;
  exercises: Exercise[];
}

export const trainingData: TrainingSection[] = [
  {
    title: "Warm up",
    summary: "2 exercises x 30 sec",
    exercises: [
      {
        title: "Hands up and down",
        duration: "30 sec",
        imageUrl: "/images/exercise-image.png",
      },
      {
        title: "Hands up and down",
        duration: "30 sec",
        imageUrl: "/images/exercise-image.png",
      },
    ],
  },
  {
    title: "Hands",
    summary: "5 exercises x 30 sec",
    exercises: [
      {
        title: "Arm raises",
        duration: "30 sec",
        imageUrl: "/images/exercise-image.png",
      },
      {
        title: "Push-ups",
        duration: "30 sec",
        imageUrl: "/images/exercise-image.png",
      },
      {
        title: "Shoulder circles",
        duration: "30 sec",
        imageUrl: "/images/exercise-image.png",
      },
    ],
  },
  {
    title: "Legs",
    summary: "6 exercises x 30 sec",
    exercises: [
      {
        title: "Squats",
        duration: "30 sec",
        imageUrl: "/images/exercise-image.png",
      },
      {
        title: "Lunges",
        duration: "30 sec",
        imageUrl: "/images/exercise-image.png",
      },
      {
        title: "Leg raises",
        duration: "30 sec",
        imageUrl: "/images/exercise-image.png",
      },
    ],
  },
  {
    title: "Final stretching",
    summary: "4 exercises x 60 sec",
    exercises: [
      {
        title: "Hamstring stretch",
        duration: "60 sec",
        imageUrl: "/images/exercise-image.png",
      },
      {
        title: "Quadriceps stretch",
        duration: "60 sec",
        imageUrl: "/images/exercise-image.png",
      },
    ],
  },
];
