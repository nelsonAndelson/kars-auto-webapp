import { getAllCars } from "@/actions/sanity-actions";
import { useQuery } from "@tanstack/react-query";
import { CarType } from "@/types/types";
import { useEffect, useState } from "react";

const useInventory = () => {
  const [filteredInventory, setFilteredInventory] = useState<CarType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: inventory = [],
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["cars"],
    queryFn: getAllCars,
  });

  useEffect(() => {
    const filtered = inventory.filter(
      (car: CarType) =>
        car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredInventory(filtered);
  }, [inventory, searchTerm]);

  return {
    inventory,
    isLoading,
    error,
    isError,
    filteredInventory,
    searchTerm,
    setSearchTerm,
  };
};

export default useInventory;
