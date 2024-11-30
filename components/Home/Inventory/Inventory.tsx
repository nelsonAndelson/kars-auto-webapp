"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getCarsWithFirstImage } from "@/actions/sanity-actions";
import InventoryLoading from "./InventoryLoading";
import InventoryError from "./InventoryError";
import InventoryEmpty from "./InventoryEmpty";
import InventoryHeader from "./InventoryHeader";
import CarGrid from "./CarGrid";
import SearchInventory from "./SearchInventory";

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("used");

  const {
    data: inventory = [],
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["cars"],
    queryFn: getCarsWithFirstImage,
  });

  if (isLoading) return <InventoryLoading />;
  if (isError) return <InventoryError error={error as Error} />;
  if (!inventory.length) return <InventoryEmpty />;

  const filteredInventory = inventory.filter((car) =>
    `${car.make} ${car.model} ${car.year}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container md:mx-auto mx-auto px-4 py-8">
      <InventoryHeader inventoryCount={inventory.length} />

      <Tabs defaultValue="used" className="mb-6">
        <TabsList>
          <TabsTrigger
            value="used"
            onClick={() => setActiveTab("used")}
            className={
              activeTab === "used"
                ? "bg-orange-500 text-black"
                : "bg-transparent text-white"
            }
          >
            USED CARS
          </TabsTrigger>
          <TabsTrigger
            value="search"
            onClick={() => setActiveTab("search")}
            className={
              activeTab === "search"
                ? "bg-orange-500 text-black"
                : "bg-transparent text-white"
            }
          >
            SEARCH INVENTORY
          </TabsTrigger>
        </TabsList>

        <TabsContent value="used">
          <CarGrid inventory={inventory} />
        </TabsContent>

        <TabsContent value="search">
          <SearchInventory
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filteredInventory={filteredInventory}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
