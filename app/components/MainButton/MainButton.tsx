import { MouseEventHandler } from 'react';

interface MainButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
}

export default function MainButton({ onClick, text }: MainButtonProps) {
  return (
    <button
      className="rounded-lg bg-mainButtonColor px-8 py-4 text-lg font-bold text-darkGrayFont shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg"
      onClick={onClick}
    >
      {text}
    </button>
  );
}


