"use client";
import { motion } from "framer-motion";
import { ServiceCard } from "@/types/components/ServicesTypes";
import { fadeIn, staggerContainer } from "@/lib/framer/animations";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface ServicesGridProps {
  services: ServiceCard[];
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="bg-gray-800 border-gray-700 overflow-hidden h-full flex flex-col">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-0 left-0 m-4 p-2 bg-orange-500 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <p className="text-gray-300">{service.description}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="justify-center bg-gray-700 text-white"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Schedule Service
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
