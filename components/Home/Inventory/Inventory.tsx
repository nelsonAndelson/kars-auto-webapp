"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InventoryLoading from "./InventoryLoading";
import InventoryError from "./InventoryError";
import InventoryEmpty from "./InventoryEmpty";
import InventoryHeader from "./InventoryHeader";
import CarGrid from "./CarGrid";
import SearchInventory from "./SearchInventory";
import useInventory from "@/hooks/inventory/useInventory";
import { useState } from "react";

export default function InventoryPage() {
  const [activeTab, setActiveTab] = useState("used");
  
  const {
    inventory,
    isLoading,
    error,
    isError,
    filteredInventory,
    searchTerm,
    setSearchTerm,
  } = useInventory();

  if (isLoading) return <InventoryLoading />;
  if (isError) return <InventoryError error={error as Error} />;
  if (!inventory.length) return <InventoryEmpty />;

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
            filteredInventory={filteredInventory.map(car => ({
              ...car,
              specialOffer: false,
              image: car.images[0]?.asset?._ref || ''
            }))}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
