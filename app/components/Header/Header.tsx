'use client';

import Image from 'next/image';

export default function Header() {
  const userName = 'Marta';

  return (
    <header className="bg-gray-100 py-[26px]">
      <div className="max-w-[1280px] mx-auto px-[26px] flex justify-between items-center">

        <div className="flex items-center cursor-default">
          <Image src="/icons/sparcle-icon.svg" alt="Star Icon" width={28} height={28} />
          <span className="ml-1 text-base text-darkGrayFont text-[20px] font-semibold">Hey, {userName}</span>
        </div>

        <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors">
          <Image src="/icons/logout-icon.svg" alt="Log out Icon" width={20} height={20} />
          <span className="text-sm text-[16px] font-semibold text-darkGrayFont">Log out</span>
        </button>
      </div>
    </header>
  );
}
