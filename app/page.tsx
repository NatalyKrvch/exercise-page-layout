import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Link href="/exercise" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
        Go to Exercise Page
      </Link>
    </div>
  );
}
