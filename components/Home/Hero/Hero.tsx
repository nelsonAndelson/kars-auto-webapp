"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import carImage from "@/app/images/buying-car.png";
import { FaClock, FaUserCheck, FaShieldAlt } from "react-icons/fa";
import PromoDetails from "./PromoDetails";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[600px] bg-gray-50">
      {/* Main Hero Section */}
      <motion.div
        className="container mx-auto px-4 py-24 flex flex-col lg:flex-row items-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <motion.div variants={fadeIn} className="flex flex-col gap-3">
            <div className="inline-block bg-orange-100 text-orange-800 px-4 py-1.5 rounded-lg text-sm font-medium w-fit">
              Winter Warm Deal ❄️🔥
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Drive With Confidence: Free Oil Changes & Warranty Protection!
            </h1>
            <p className="text-lg text-gray-700">
              Satisfaction Guarantee, Free Oil Changes, Warranty Protection, and More!
            </p>
          </motion.div>

          {/* Offer Highlights */}
          <motion.div variants={fadeIn} className="flex flex-col gap-4 mt-6">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>✅ Satisfaction Guarantee with Repairs</li>
              <li>✅ Free Oil Changes for a Year</li>
              <li>✅ Warranty Protection (Cash and Financed Cars)</li>
              <li>🔧 Certified Inspections</li>
              <li>💸 Maintenance Discounts</li>
            </ul>
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-8">
            <Link href="/pre-approval">
              <Button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
                Get Started
              </Button>
            </Link>
            <Link href="/inventory">
              <Button className="bg-transparent border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white">
                Browse Inventory
              </Button>
            </Link>
          </div>

          <motion.div
            variants={fadeIn}
            className="flex items-center text-sm text-gray-600 pt-2"
          >
            <Clock className="w-4 h-4 mr-2" />
            Quick 3-minute application • No credit impact
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          className="w-full lg:w-1/2 mt-8 lg:mt-0"
          variants={fadeIn}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={carImage}
              alt="New car"
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
        <PromoDetails />
      {/* Trust Indicators */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              className="flex items-center justify-center space-x-4"
              variants={fadeIn}
            >
              <div className="p-4 bg-orange-50 rounded-full">
                <FaClock className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  Quick Pre-Approval
                </div>
                <div className="text-gray-500">
                  3-minute application process
                </div>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center justify-center space-x-4"
              variants={fadeIn}
            >
              <div className="p-4 bg-orange-50 rounded-full">
                <FaUserCheck className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  All Credit Welcome
                </div>
                <div className="text-gray-500">Everyone gets approved</div>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center justify-center space-x-4"
              variants={fadeIn}
            >
              <div className="p-4 bg-orange-50 rounded-full">
                <FaShieldAlt className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  Warranty Included
                </div>
                <div className="text-gray-500">Peace of mind guaranteed</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
