import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Link href="/exercise" className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
        Go to Exercise Page
      </Link>
    </div>
  );
}
