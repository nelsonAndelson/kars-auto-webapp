"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { fadeIn } from "@/lib/framer/animations";
import { FaDollarSign } from "react-icons/fa";

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

export default function Footer() {
  return (
    <footer className="bg-black-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 text-orange-500">
              KARS AUTO SALES AND REPAIR LLC
            </h3>
            <p className="mb-2 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-orange-500" />
              19100 Nottingham Road Cleveland OH 44110
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">
              Business Hours
            </h4>
            <p className="mb-2 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-orange-500" />
              EVERYDAY 9:00 AM - 5:00 PM
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">
              Contact Us
            </h4>
            <Link href="tel:216-304-1233" className="mb-2 flex items-center hover:text-orange-500">
              <Phone className="w-5 h-5 mr-2 text-orange-500" />
              Sales: (216) 304-1233
            </Link>

            <Link href="tel:2163720661"className="mb-2 flex items-center hover:text-orange-500">
              <Phone className="w-5 h-5 mr-2 text-orange-500" />
              Auto Repair: (216) 372-0661
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-between"
          >
            <h4 className="text-lg font-semibold mb-4 text-orange-500">
              Quick Links
            </h4>
            <nav className="space-y-2">
              <Link
                href="/inventory"
                className="block hover:text-orange-500 transition-colors"
              >
                View Inventory
              </Link>
              <Link
                href="/auto-repair/booking"
                className="block hover:text-orange-500 transition-colors"
              >
                Schedule Auto Repair Service
              </Link>
              <Link
                href="/fleet-maintanance"
                className="block hover:text-orange-500 transition-colors"
              >
                Fleet Maintanance
              </Link>
            </nav>
            <motion.div variants={fadeIn} className="mt-2 ">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold xl:text-lg"
            >
              <Link href="/pre-approval" className="flex items-center gap-2">
                <FaDollarSign className="w-4 h-4" />
                Get Pre-Approved Now
              </Link>
            </Button>
          </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} KARS AUTO SALES AND REPAIR LLC. All
            rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
