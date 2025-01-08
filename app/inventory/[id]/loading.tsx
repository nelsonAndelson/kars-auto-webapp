export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0F1117] text-white animate-pulse">
      <div className="container mx-auto px-4 pt-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-[500px] bg-gray-800 rounded-lg" />
          <div className="space-y-4">
            <div className="h-8 bg-gray-800 rounded w-3/4" />
            <div className="h-6 bg-gray-800 rounded w-1/2" />
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-6 bg-gray-800 rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 