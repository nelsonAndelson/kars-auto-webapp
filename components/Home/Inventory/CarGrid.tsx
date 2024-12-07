import { CarType } from "@/types/types";
import CarCard from "@/components/ui/car-card/car-card";
import { urlFor } from "@/sanity/sanity.config";

export default function CarGrid({
  inventory,
}: {
  inventory: CarType[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {inventory.map((car) => {
        const imageUrl = car.images[0]?.asset?._ref 
          ? urlFor(car.images[0]).url()
          : '/fallback-image.jpg';

        return (
          <CarCard 
            key={car._id} 
            {...car} 
            image={imageUrl}
          />
        );
      })}
    </div>
  );
}
