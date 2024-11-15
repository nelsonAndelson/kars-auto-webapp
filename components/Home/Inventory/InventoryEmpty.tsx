import { Car } from "lucide-react";

export default function InventoryEmpty() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <Car className="w-12 h-12 text-gray-400 mb-4" />
        <h2 className="text-xl font-bold mb-2">No Cars Available</h2>
        <p className="text-gray-400">
          Our inventory is currently empty. Please check back later for new arrivals.
        </p>
      </div>
    </div>
  );
} 