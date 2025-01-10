"use client";

import { CarWithFirstImageType } from "@/types/types";
import { urlFor } from "@/sanity/sanity.config";
import Image from "next/image";
import {  Calendar, Fuel, Gauge, Cog, Info } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function FeaturedCarCard({ car }: { car: CarWithFirstImageType }) {
  const imageUrl = car.image ? urlFor(car.image).url() : "/car-placeholder.jpg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group cursor-pointer">
        {/* Image Container */}
        <div className="relative">
          <div className="relative h-56 overflow-hidden">
            <Link href={`/inventory/${car._id}`}>
              <Image
                src={imageUrl}
                alt={`${car.year} ${car.make} ${car.model}`}
                fill
                className="group-hover:scale-110 transition-transform duration-300 object-cover"
              />
            </Link>
            <Badge className="absolute top-4 left-4 bg-orange-500 text-white">
              Featured
            </Badge>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
        </div>

        {/* Content */}
        <CardContent className="relative p-6">
          {/* Title and Price */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold mb-1 uppercase">
                {car.make} {car.model}
              </h3>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">{car.year}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-orange-500">
                ${car.price.toLocaleString()}
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <Info className="w-3 h-3" />
                      <span>Est. $150/mo</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Estimated monthly payment with 20% down for 72 months at 4.9% APR</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-gray-400" />
              <span className="text-sm">{car.mileage.toLocaleString()} mi</span>
            </div>
            <div className="flex items-center gap-2">
              <Cog className="w-4 h-4 text-gray-400" />
              <span className="text-sm capitalize">{car.transmission}</span>
            </div>
            <div className="flex items-center gap-2">
              <Fuel className="w-4 h-4 text-gray-400" />
              <span className="text-sm capitalize">{car.fuelType || "Gasoline"}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4 text-gray-400"
              >
                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M5 17H3v-6l2-5h12l2 5v6h-2m-4 0h-4" />
              </svg>
              <span className="text-sm capitalize">2.0L</span>
            </div>
          </div>
        </CardContent>

        {/* Footer with new action buttons */}
        <CardFooter className="p-6 pt-0 flex flex-col gap-2">
          <Link href="/pre-approval" className="w-full">
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6">
              Get Pre-Approved
            </Button>
          </Link>
          <Link href={`/inventory/${car._id}`} className="w-full">
            <Button variant="outline" className="w-full py-6">
              Get Details
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
} 