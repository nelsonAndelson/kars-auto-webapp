"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, staggerContainer } from "@/lib/framer/animations";
import servicesImage from "@/app/images/auto-repair.jpg";

export function HeroSection() {
  return ( 
    <section className="relative h-[60vh] min-h-[400px] flex items-center">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="absolute inset-0">
        <Image
          src={servicesImage}
          alt="Auto repair shop"
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
        className="container mx-auto px-4 relative z-20"
      >
        <motion.h1
          variants={fadeIn}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Our <span className="text-orange-500">Services</span>
        </motion.h1>
        <motion.p variants={fadeIn} className="text-xl max-w-2xl">
          Professional auto repair services with state-of-the-art equipment and
          certified technicians.
        </motion.p>
      </motion.div>
    </section>
  );
}
