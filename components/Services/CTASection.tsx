"use client";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/framer/animations";

export function CTASection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4">
            Ready to Schedule Your Service?
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Our team of expert technicians is ready to assist you. Call now to
            book your appointment.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg flex items-center justify-center">
              <PhoneCall className="mr-2 h-5 w-5" />
              Call (216) 304-1233 to Schedule
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
