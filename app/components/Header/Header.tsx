'use client';

import Image from 'next/image';

export default function Header() {
  const userName = 'Marta';

  return (
    <header className="bg-gray-100 py-[26px]">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-[26px]">

        <div className="flex cursor-default items-center">
          <Image src="/icons/sparcle-icon.svg" alt="Star Icon" width={28} height={28} />
          <span className="ml-1 text-xl font-semibold text-darkGrayFont">Hey, {userName}</span>
        </div>

        <button className="flex items-center space-x-1 text-gray-600 transition-colors hover:text-gray-800">
          <Image src="/icons/logout-icon.svg" alt="Log out Icon" width={20} height={20} />
          <span className="text-base font-semibold text-darkGrayFont">Log out</span>
        </button>
      </div>
    </header>
  );
}
