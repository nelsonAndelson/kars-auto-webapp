"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaCar, FaHandshake } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const steps = [
  {
    number: "01",
    icon: <FaHandshake className="w-6 h-6 text-orange-500" />,
    title: "Quick Online Pre-Approval",
    description:
      "Get pre-approved in minutes with our simple online form. No impact on your credit score!",
    action: {
      text: "Start Pre-Approval",
      href: "/pre-approval",
    },
  },
  {
    number: "02",
    icon: <FaCar className="w-6 h-6 text-orange-500" />,
    title: "Pick Your Dream Car",
    description:
      "Browse our extensive inventory of quality vehicles. Test drive your favorites, no pressure.",
    action: {
      text: "View Inventory",
      href: "/inventory",
    },
  },
  {
    number: "03",
    icon: <FaCar className="w-6 h-6 text-orange-500" />,
    title: "Book a Test Drive",
    description:
      "Schedule a convenient time to test drive your chosen vehicle. Our team is ready to assist you!",
    action: {
      text: "Book Appointment",
      href: "/contact",
    },
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Get Your Car in
            <span className="text-orange-500"> 3 Easy Steps</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Experience our streamlined process designed to get you behind the
            wheel quickly and confidently
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 relative"
        >
          {/* Connection Lines (Only visible on md and up screens) */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-orange-200 to-orange-500" />

          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeIn}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Step Number */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50"
                >
                  <Link href={step.action.href}>{step.action.text}</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
