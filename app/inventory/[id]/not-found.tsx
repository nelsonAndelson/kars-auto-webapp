import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0F1117] text-white flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Vehicle Not Found</h1>
        <p className="text-gray-400">The vehicle you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <Link 
          href="/inventory" 
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg mt-4"
        >
          Browse Inventory
        </Link>
      </div>
    </div>
  );
} 