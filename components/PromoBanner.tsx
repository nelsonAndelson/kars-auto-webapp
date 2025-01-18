"use client";

import { motion } from "framer-motion";

export default function PromoBanner() {
  return (
    <motion.div
      className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 text-center"
      initial={{ opacity: 0.9 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
    >
      <div className="flex items-center justify-center">
        <span className="mr-2">🚗</span>
        Limited Time Offer: Drive With Confidence – Free Oil Changes & Warranty Protection!
      </div>
    </motion.div>
  );
}
