"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Phone, Calendar, Fuel, Gauge, Cog, Info } from "lucide-react";
import Image from "next/image";
import { CarCardProps } from "@/types/types";

const CarCard = ({
  make,
  model,
  year,
  price,
  mileage,
  transmission,
  fuelType = "Gasoline",
  engineSize = "2.0L",
  image,
  featured = false,
}: CarCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group">
        {/* Image Container */}
        <div className="relative">
          <div className="relative h-56 overflow-hidden">
            <Image
              src={image}
              alt={`${year} ${make} ${model}`}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-110 transition-transform duration-300"
            />
            {featured && (
              <Badge className="absolute top-4 left-4 bg-orange-500 text-white">
                Featured
              </Badge>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
        </div>

        {/* Content */}
        <CardContent className="relative p-6">
          {/* Title and Price */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold mb-1 uppercase">
                {make} {model}
              </h3>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">{year}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-orange-500">
                ${price.toLocaleString()}
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
                    <p>
                      Estimated monthly payment with 20% down for 72 months at
                      4.9% APR
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-gray-400" />
              <span className="text-sm">{mileage.toLocaleString()} mi</span>
            </div>
            <div className="flex items-center gap-2">
              <Cog className="w-4 h-4 text-gray-400" />
              <span className="text-sm capitalize">{transmission}</span>
            </div>
            <div className="flex items-center gap-2">
              <Fuel className="w-4 h-4 text-gray-400" />
              <span className="text-sm capitalize">{fuelType}</span>
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
              <span className="text-sm capitalize">{engineSize}</span>
            </div>
          </div>
        </CardContent>

        {/* Footer */}
        <CardFooter className="p-6 pt-0">
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white gap-2 py-6">
            <Phone className="w-4 h-4" />
            Call us Today!
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CarCard;

// Example usage
// export default function ExampleCarCard() {
//   return (
//     <div className="p-4 max-w-sm mx-auto">
//       <CarCard
//         make="KIA"
//         model="RIO"
//         year={2012}
//         price={3499}
//         mileage={138000}
//         transmission="automatic"
//         image="/placeholder.svg?height=300&width=400"
//         featured={true}
//       />
//     </div>
//   );
// }
