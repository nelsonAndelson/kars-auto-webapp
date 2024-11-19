import { Car } from "lucide-react";

interface InventoryHeaderProps {
  inventoryCount: number;
}

export default function InventoryHeader({ inventoryCount }: InventoryHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">
        WELCOME TO{" "}
        <span className="text-primary">KARS AUTO REPAIR AND SALES</span>
      </h1>
      <div className="flex items-center">
        <Car className="mr-2" />
        <span className="text-sm font-medium">
          AVAILABLE {inventoryCount} CARS
        </span>
      </div>
    </div>
  );
} 