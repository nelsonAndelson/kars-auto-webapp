"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Inventory from "@/components/Home/Inventory/Inventory";
import { fadeIn, staggerContainer } from "@/lib/framer/animations";
import carLotImg from '@/app/images/used car lot_i.webp'

export default function InventoryPage() {
  return (
    <div className="min-h-screen bg-[#0F1117] text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0">
          <Image
            src={carLotImg}
            alt="Car interior"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container mx-auto px-4 relative z-20 text-center"
        >
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            RELIABLE <span className="text-orange-500">CARS</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="text-xl mb-8">
            We only sell reliable cars.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              VIEW INVENTORY
            </Button>
          </motion.div>
        </motion.div>
      </section>
      <Inventory />
    </div>
  );
}


