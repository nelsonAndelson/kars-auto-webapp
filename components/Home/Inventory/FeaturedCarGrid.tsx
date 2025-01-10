import { CarWithFirstImageType } from "@/types/types";
import FeaturedCarCard from "./FeaturedCarCard";

export default function FeaturedCarGrid({ inventory }: { inventory: CarWithFirstImageType[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {inventory.map((car) => (
        <FeaturedCarCard key={car._id} car={car} />
      ))}
    </div>
  );
} 