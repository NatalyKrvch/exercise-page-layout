import { MouseEventHandler } from 'react';

interface MainButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
}

export default function MainButton({ onClick, text }: MainButtonProps) {
  return (
    <button
      className="bg-mainButtonColor text-darkGrayFont text-lg font-bold py-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
      onClick={onClick}
    >
      {text}
    </button>
  );
}


