import { CarWithFirstImageType } from "@/types/types";
// import CarCard from "./CarCard";
import { CarCardProps } from "@/types/types";
import CarCard from "@/components/ui/car-card/car-card";

export default function CarGrid({
  inventory,
}: {
  inventory: CarWithFirstImageType[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {inventory.map((car) => (
        // <CarCard key={car._id} car={car} />\
        <CarCard key={car._id} {...car} />
      ))}
    </div>
  );
}
