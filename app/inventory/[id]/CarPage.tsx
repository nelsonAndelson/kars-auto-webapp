"use client";

import { motion } from "framer-motion";
import { Suspense, useEffect } from "react";
import ImageGallery from "@/components/Inventory/ImageGallery";
import ErrorBoundary from "@/components/ErrorBoundary";
import Loading from "./loading";
import CarDetails from "./CarDetails";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn } from "@/lib/framer/animations";
import { CarType } from "@/types/car-types";
import { urlFor } from "@/sanity/sanity.config";
import { Gauge, Settings2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { trackViewContent } from "@/lib/meta-pixel";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function CarPage({ car }: { car: CarType }) {
  useEffect(() => {
    // Track the vehicle detail page view
    trackViewContent({
      content_type: "vehicle",
      content_name: `${car.year} ${car.make} ${car.model}`,
      content_category: "Vehicle Details",
      content_ids: [car._id],
      value: car.price || 0,
      currency: "USD"
    });
  }, [car]);

  return (
    <div className="min-h-screen bg-[#0F1117] text-white">
      <ErrorBoundary
        fallback={<div>Something went wrong loading the car details.</div>}
      >
        <Suspense fallback={<Loading />}>
          <section className="pt-8">
            <div className="container mx-auto px-4">
              {/* Back Navigation */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <Link href="/inventory" passHref>
                  <Button
                    variant="ghost"
                    className="text-gray-400 hover:text-white hover:bg-gray-800"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Inventory
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-8"
              >
                <ErrorBoundary fallback={<div>Failed to load images</div>}>
                  <Suspense fallback={<div>Loading images...</div>}>
                    <ImageGallery
                      images={car.images.map((image) => urlFor(image).url())}
                      alt={`${car.make} ${car.model} ${car.year}`}
                    />
                  </Suspense>
                </ErrorBoundary>

                <CarDetails car={car} />
              </motion.div>
            </div>
          </section>

          <section className="py-8 mt-8 border-t border-gray-800">
            <div className="container mx-auto px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-12"
              >
                {/* Description Section */}
                <motion.div variants={fadeIn} className="space-y-8">
                  {car.description && (
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300">{car.description}</p>
                    </div>
                  )}

                  {/* Performance Specs */}
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-6 uppercase flex items-center gap-2">
                        <Settings2 className="w-6 h-6" />
                        Performance Specifications
                      </h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="text-sm text-gray-400 mb-2">Engine</h4>
                          <p className="text-white">{car.engineSize || '2.5L'} {car.cylinders || 'I4'}</p>
                        </div>
                        <div>
                          <h4 className="text-sm text-gray-400 mb-2">Transmission</h4>
                          <p className="text-white">{car.transmission || 'N/A'}</p>
                        </div>
                        <div>
                          <h4 className="text-sm text-gray-400 mb-2">Drivetrain</h4>
                          <p className="text-white">{car.drivetrain || 'FWD'}</p>
                        </div>
                        <div>
                          <h4 className="text-sm text-gray-400 mb-2">Fuel Type</h4>
                          <p className="text-white">{car.fuelType || 'Gasoline'}</p>
                        </div>
                        <div>
                          <h4 className="text-sm text-gray-400 mb-2">Fuel Economy</h4>
                          <p className="text-white">{car.fuelEconomy || '25/32'} MPG</p>
                        </div>
                        <div>
                          <h4 className="text-sm text-gray-400 mb-2">Horsepower</h4>
                          <p className="text-white">{car.horsepower || 'N/A'} HP</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Vehicle Condition */}
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-6 uppercase flex items-center gap-2">
                        <Gauge className="w-6 h-6" />
                        Vehicle Condition
                      </h3>
                      <p className="text-gray-300">
                        This {car.year} {car.make} {car.model} comes
                        well-maintained and ready for its new owner. It features
                        a reliable {car.engineSize || '2.5L'} {car.cylinders || 'I4'} engine, smooth{" "}
                        {car.transmission?.toLowerCase() || 'automatic'} transmission, and
                        includes all the essential modern conveniences. The
                        vehicle has been thoroughly inspected by our certified
                        mechanics and meets our high standards for quality and
                        reliability.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Features Section */}
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-6 uppercase">
                        Features & Equipment
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {car.features?.map((feature: string, index: number) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full" />
                            <span className="uppercase">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* About Us Section */}
                  <div className="prose prose-invert max-w-none">
                    <h3 className="text-xl font-semibold uppercase">
                      About Us
                    </h3>
                    <p className="text-gray-300">
                      At KARS Auto Sales and Repair LLC, we take pride in
                      offering quality pre-owned vehicles and professional
                      repair services. Our dual expertise in sales and repairs
                      ensures that every vehicle we sell meets our rigorous
                      quality standards. We are committed to transparent
                      dealings and exceptional customer service. Whether
                      you&apos;re looking to purchase a vehicle or need
                      automotive repairs, our experienced team is here to
                      help.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
