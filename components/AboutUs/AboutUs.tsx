"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Wrench, Car, Users, Award } from "lucide-react";
import Image from "next/image";
import logo from "@/app/images/logo.png";
import { fadeInUp } from "@/lib/framer/animations";
import Link from "next/link";

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutUsSection() {
  return (
    <section className="py-16 bg-gray-900 text-white overflow-hidden ">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold mb-6">
              About <span className="text-orange-500">KARS AUTO</span>
            </h2>
            <p className="mb-6 text-gray-300">
              At KARS AUTO SALES AND REPAIR, we&apos;ve been serving the
              Cleveland community for over two decades. Our passion for
              automobiles and commitment to customer satisfaction have made us a
              trusted name in both car sales and auto repair.
            </p>
            <p className="mb-6 text-gray-300">
              Whether you&apos;re looking for a quality pre-owned vehicle or
              need expert repair services, our team of certified professionals
              is here to exceed your expectations.
            </p>
            <Link href="/about">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Learn More About Us
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src={logo}
              alt="KARS AUTO team"
              className="rounded-lg w-full h-full object-cover"
            />
            <div className="absolute inset-5 bg-gradient-to-t from-secondary/10 to-transparent"></div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            {
              icon: <Wrench className="w-10 h-10 text-orange-500" />,
              title: "Expert Repairs",
              description: "Certified mechanics",
            },
            {
              icon: <Car className="w-10 h-10 text-orange-500" />,
              title: "Quality Vehicles",
              description: "Carefully selected inventory",
            },
            {
              icon: <Users className="w-10 h-10 text-orange-500" />,
              title: "Customer First",
              description: "Exceptional service",
            },
            {
              icon: <Award className="w-10 h-10 text-orange-500" />,
              title: "20+ Years",
              description: "Trusted experience",
            },
          ].map((item, index) => (
            <motion.div key={index} variants={fadeInUp} className="text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="mb-4 inline-block"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
