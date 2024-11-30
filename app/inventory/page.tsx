"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Inventory from "@/components/Home/Inventory/Inventory";
import { fadeIn, staggerContainer } from "@/lib/framer/animations";
import useInventory from "@/hooks/inventory/useInventory";

export default function InventoryPage() {
  return (
    <div className="min-h-screen bg-[#0F1117] text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Car interior"
            layout="fill"
            objectFit="cover"
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

      <TestInventory />
    </div>
  );
}

function TestInventory() {
  const { inventory, loading, error } = useInventory();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Test Inventory</h2>
      {/* <pre>{JSON.stringify(inventory, null, 2)}</pre> */}
      <pre>{JSON.stringify(loading, null, 2)}</pre>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  );
}
