import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { CarType } from "@/types/types";
import CarGrid from "./CarGrid";
interface SearchInventoryProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredInventory: CarType[];
}

export default function SearchInventory({
  searchTerm,
  setSearchTerm,
  filteredInventory,
}: SearchInventoryProps) {
  return (
    <div>
      <div className="mb-6">
        <div className="flex gap-4">
          <Input
            type="text"
            placeholder="Search by make, model, or year"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Button>
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
      </div>
      <CarGrid inventory={filteredInventory} />
    </div>
  );
}
