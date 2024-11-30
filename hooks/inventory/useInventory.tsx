import { getAllCars } from "@/actions/sanity-actions";
import { CarType } from "@/types/types";
import { useEffect, useState } from "react";

const useInventory = () => {
  const [inventory, setInventory] = useState<CarType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filteredInventory, setFilteredInventory] = useState<CarType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const cars = (await getAllCars()) as CarType[];
        setInventory(cars);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch cars");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const filterInventory = (searchTerm: string) => {
    const filtered = inventory.filter((car) =>
      car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.model.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredInventory(filtered);
  };

  return {
    inventory,
    loading,
    error,
    filterInventory,
  };
};

export default useInventory;
