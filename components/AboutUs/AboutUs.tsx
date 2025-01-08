"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaTools,
  FaCar,
  FaUserCheck,
  FaHistory,
  FaMapMarkerAlt,
} from "react-icons/fa";

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

const features = [
  {
    icon: <FaTools className="w-8 h-8" />,
    title: "Expert Repairs",
    description:
      "Certified mechanics providing professional auto repair services",
  },
  {
    icon: <FaCar className="w-8 h-8" />,
    title: "Quality Vehicles",
    description: "All vehicles professionally inspected and certified",
  },
  {
    icon: <FaUserCheck className="w-8 h-8" />,
    title: "Customer First",
    description: "Exceptional service and satisfaction guaranteed",
  },
  {
    icon: <FaHistory className="w-8 h-8" />,
    title: "20+ Years",
    description: "Trusted experience serving the Cleveland community",
  },
];

export default function AboutUsSection() {
  return (
    <section className="bg-gray-900 text-white py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <motion.div variants={fadeIn} className="space-y-6">
            <h2 className="text-4xl font-bold">
              About <span className="text-orange-500">KARS AUTO</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              At KARS AUTO SALES AND REPAIR, we&apos;ve been serving the
              Cleveland community for over two decades. Our passion for
              automobiles and commitment to customer satisfaction have made us a
              trusted name in both car sales and auto repair.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you&apos;re looking for a quality pre-owned vehicle or
              need expert repair services, our team of certified professionals
              is here to exceed your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500/10"
              >
                <Link
                  href="https://maps.google.com/?q=4364+W+130TH+ST,+CLEVELAND,+OH+44135"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <FaMapMarkerAlt /> Get Directions
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            variants={fadeIn}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <div className="text-orange-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
