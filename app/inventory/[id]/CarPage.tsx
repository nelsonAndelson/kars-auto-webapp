"use client";

import { motion } from "framer-motion";
import { Suspense } from "react";
import ImageGallery from "@/components/Inventory/ImageGallery";
import ErrorBoundary from "@/components/ErrorBoundary";
import Loading from "./loading";
import CarDetails from "./CarDetails";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn } from "@/lib/framer/animations";
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function CarPage({ car }: { car: any }) {
  return (
    <div className="min-h-screen bg-[#0F1117] text-white">
      <ErrorBoundary fallback={<div>Something went wrong loading the car details.</div>}>
        <Suspense fallback={<Loading />}>
          <section className="pt-8">
            <div className="container mx-auto px-4">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-8"
              >
                <ErrorBoundary fallback={<div>Failed to load images</div>}>
                  <Suspense fallback={<div>Loading images...</div>}>
                    <ImageGallery 
                      images={car.images} 
                      alt={`${car.make} ${car.model} ${car.year}`} 
                    />
                  </Suspense>
                </ErrorBoundary>

                <CarDetails car={car} />
              </motion.div>
            </div>
          </section>

          <section className="py-2 mt-8 border-t border-gray-800">
            <div className="container mx-auto px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-12"
              >
                <div>
                  <motion.div variants={fadeIn} className="prose prose-invert max-w-none space-y-8">
                    <div>
                      <p className="text-gray-300">
                        {car.description}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold  uppercase">Vehicle Condition</h3>
                      <p className="text-gray-300">
                        This {car.year} {car.make} {car.model} comes well-maintained and ready for its new
                        owner. It features a reliable engine, smooth {car.transmission.toLowerCase()} transmission, 
                        and includes all the essential modern conveniences. The vehicle has been thoroughly 
                        inspected by our certified mechanics and meets our high standards for quality and
                        reliability.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold uppercase">About Us</h3>
                      <p className="text-gray-300">
                        At KARS Auto Sales and Repair LLC, we take pride in offering 
                        quality pre-owned vehicles and professional repair services. 
                        Our dual expertise in sales and repairs ensures that every 
                        vehicle we sell meets our rigorous quality standards. We're 
                        committed to transparent dealings and exceptional customer 
                        service. Whether you're looking to purchase a vehicle or need 
                        automotive repairs, our experienced team is here to help.
                      </p>
                    </div>
                  </motion.div>
                </div>

                <motion.div variants={fadeIn} className="grid md:grid-cols-2 gap-8">
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 uppercase">Features</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {car.features?.map((feature: string, index: number) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full" />
                            <span className="uppercase">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 uppercase">
                        Vehicle Details
                      </h3>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Make:</span>
                          <span className="uppercase">{car.make}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Model:</span>
                          <span className="uppercase">{car.model}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Year:</span>
                          <span className="uppercase">{car.year}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Mileage:</span>
                          <span className="uppercase">{car.mileage.toLocaleString()} MI</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Transmission:</span>
                          <span className="uppercase">{car.transmission}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">VIN:</span>
                          <span className="uppercase">{car.vin}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Exterior Color:</span>
                          <span className="uppercase">{car.exteriorColor}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Interior Color:</span>
                          <span className="uppercase">{car.interiorColor}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
} 