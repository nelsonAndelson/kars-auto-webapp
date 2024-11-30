"use client";
import { motion } from "framer-motion";
import { Shield, PenToolIcon as Tools, Cog } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/framer/animations";

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4">
            Why Choose <span className="text-orange-500">KARS AUTO</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            We combine expertise with cutting-edge technology to provide the
            best service for your vehicle.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <Shield className="w-12 h-12 text-orange-500" />,
              title: "Quality Guarantee",
              description: "All our repairs come with a satisfaction guarantee",
            },
            {
              icon: <Tools className="w-12 h-12 text-orange-500" />,
              title: "Expert Technicians",
              description: "Certified professionals with years of experience",
            },
            {
              icon: <Cog className="w-12 h-12 text-orange-500" />,
              title: "Modern Equipment",
              description: "State-of-the-art diagnostic and repair tools",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="text-center p-6 bg-gray-700 rounded-lg"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
