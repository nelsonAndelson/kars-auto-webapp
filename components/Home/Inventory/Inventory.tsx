"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Phone, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CarListingType } from "@/types/types";
import { mockInventory } from "@/data/inventoryData";

export default function InventoryPage() {
  const [inventory] = useState<CarListingType[]>(mockInventory);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("used");

  const filteredInventory = inventory.filter((car) =>
    `${car.make} ${car.model} ${car.year}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container md:mx-auto mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          WELCOME TO{" "}
          <span className="text-primary">KARS AUTO REPAIR AND SALES</span>
        </h1>
        <div className="flex items-center">
          <Car className="mr-2" />
          <span className="text-sm font-medium">
            AVAILABLE {inventory.length} CARS
          </span>
        </div>
      </div>

      <Tabs defaultValue="used" className="mb-6">
        <TabsList>
          <TabsTrigger
            value="used"
            onClick={() => setActiveTab("used")}
            className={`${
              activeTab === "used"
                ? "bg-orange-500 text-black"
                : "bg-transparent text-white"
            }`}
          >
            USED CARS
          </TabsTrigger>
          <TabsTrigger
            value="search"
            onClick={() => setActiveTab("search")}
            className={`${
              activeTab === "search"
                ? "bg-orange-500 text-black"
                : "bg-transparent text-white"
            }`}
          >
            SEARCH INVENTORY
          </TabsTrigger>
        </TabsList>
        <TabsContent value="used">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inventory.map((car: CarListingType) => (
              <Card key={car.id} className="overflow-hidden">
                <CardHeader className="p-0 relative w-full h-36">
                  <Image
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4 ">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-lg font-bold mb-2">
                        {car.make} {car.model} {car.year}
                      </CardTitle>
                      <Badge className="bg-primary text-black font-bold mb-2">
                        ${car.price.toLocaleString()}
                      </Badge>
                    </div>
                    <Button>
                      <Phone className="mr-2 h-4 w-4" /> Call us Today!
                    </Button>
                  </div>

                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{car.mileage.toLocaleString()} mi</span>
                    <span>{car.transmission}</span>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-100 p-2">
                  {car.specialOffer && (
                    <Badge className="bg-orange-500 text-white">
                      Special Offer
                    </Badge>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="search">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredInventory.map((car) => (
              <Card key={car.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    width={500} // Adjust the width as needed
                    height={100} // Adjust the height as needed
                    className="w-full h-48 object-cover"
                    layout="responsive"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg font-bold mb-2">
                    {car.make} {car.model} {car.year}
                  </CardTitle>
                  <Badge className="bg-primary text-black font-bold mb-2">
                    ${car.price.toLocaleString()}
                  </Badge>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{car.mileage.toLocaleString()} mi</span>
                    <span>{car.transmission}</span>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-100 p-2">
                  {car.specialOffer && (
                    <Badge className="bg-orange-500 text-white">
                      Special Offer
                    </Badge>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
