"use client";

import React from "react";
import { getAllCars } from "@/actions/sanity-actions";
import { useQuery } from "@tanstack/react-query";
import InventoryLoading from "./InventoryLoading";
import InventoryError from "./InventoryError";
import InventoryEmpty from "./InventoryEmpty";
import FeaturedCarGrid from "./FeaturedCarGrid";

export default function FeaturedInventory() {
  const {
    data: inventory = [],
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["cars"],
    queryFn: getAllCars,
  });

  if (isLoading) return <InventoryLoading />;
  if (isError) return <InventoryError error={error as Error} />;
  if (!inventory.length) return <InventoryEmpty />;

  // Get only the first 4 cars
  const featuredCars = inventory.slice(0, 4);

  return (
    <div className="container md:mx-auto mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Featured Cars</h2>
        <p className="text-gray-400">Check out our featured selection of quality used cars</p>
      </div>
      <FeaturedCarGrid inventory={featuredCars} />
    </div>
  );
} 