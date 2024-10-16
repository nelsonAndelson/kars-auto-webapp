"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/servicesData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function ServicesSection() {
  return (
    <section className="py-8 bg-gray-900 text-white border border-red-800 ">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          WELCOME TO{" "}
          <span className="text-orange-500">KARS AUTO REPAIR AND SALES</span>
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-gray-800 border-gray-700 ">
                <CardHeader className="relative p-0 aspect-video">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black bg-opacity-90 flex items-center justify-center">
                    {service.icon}
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2 text-orange-500">
                    {service.title}
                  </CardTitle>
                  <p className="text-sm text-gray-300">{service.description}</p>
                </CardContent>
                <CardFooter className="p-4">
                  <Button
                    variant="outline"
                    className="w-full bg-orange-500 text-white hover:bg-orange-600"
                  >
                    Call Us Today
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="font-semibold bg-orange-500 text-white hover:bg-orange-600"
            >
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}