"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import carImage from "@/app/images/buying-car.png";
import { FaClock, FaUserCheck, FaShieldAlt } from "react-icons/fa";

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
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1.5 rounded-lg text-sm font-medium w-fit">
              Limited Time Offer
            </div>
            <h2 className="text-2xl font-semibold text-orange-500">
              Drive Home Today with $1,000 Down
            </h2>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-5xl font-bold text-gray-900"
          >
            Your Dream Car
            <br />
            <span className="text-orange-500">Without The Hassle</span>
          </motion.h1>

          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-12 py-6 transform hover:scale-105 transition-transform"
            >
              <Link href="/pre-approval">Get Pre-Approved Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-50 text-lg"
            >
              <Link href="/inventory">Browse Inventory</Link>
            </Button>
          </motion.div>

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
