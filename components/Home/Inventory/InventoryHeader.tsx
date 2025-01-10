import { Car, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface InventoryHeaderProps {
  inventoryCount: number;
}

export default function InventoryHeader({ inventoryCount }: InventoryHeaderProps) {
  return (
    <div className="space-y-6 mb-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          WELCOME TO{" "}
          <span className="text-primary">KARS AUTO REPAIR AND SALES</span>
        </h1>
        <div className="flex items-center gap-2">
          <Car className="mr-2" />
          <span className="text-sm font-medium">
            AVAILABLE {inventoryCount} CARS
          </span>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-gray-800/50 rounded-lg">
        <div className="flex flex-wrap gap-2">
          <Button variant="ghost" className="hover:bg-orange-500/20 hover:text-orange-500">
            All Vehicles
          </Button>
          <Button variant="ghost" className="hover:bg-orange-500/20 hover:text-orange-500">
            SUVs
          </Button>
          <Button variant="ghost" className="hover:bg-orange-500/20 hover:text-orange-500">
            Sedans
          </Button>
          <Button variant="ghost" className="hover:bg-orange-500/20 hover:text-orange-500">
            Trucks
          </Button>
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto">
                <Filter className="w-4 h-4 mr-2" />
                Sort By
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-800 text-white border-gray-700">
              <DropdownMenuItem className="hover:bg-gray-700">
                Price: Low to High
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-700">
                Price: High to Low
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-700">
                Year: Newest First
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-700">
                Year: Oldest First
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
} 