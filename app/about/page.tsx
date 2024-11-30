"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Settings, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { staggerContainer, fadeIn } from "@/lib/framer/animations";
import autoRepairImage from "@/app/images/auto-repair.jpg";
import logo from "@/app/images/logo.png";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0">
          <Image
            src={autoRepairImage}
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
            Our <span className="text-orange-500">Legacy</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="text-xl md:text-2xl max-w-2xl">
            Since our establishment, KARS AUTO has been a cornerstone of the
            Cleveland automotive community.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-6">
                Our <span className="text-orange-500">Mission</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Our journey began with a simple vision: to provide honest,
                reliable automotive services to our neighbors. Today, we
                continue to build on that foundation, combining traditional
                values with modern expertise to serve our growing family of
                satisfied customers.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-orange-500" />
                  <span>Over 20 years of experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-orange-500" />
                  <span>Thousands of satisfied customers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-orange-500" />
                  <span>Comprehensive automotive solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-orange-500" />
                  <span>Community-focused service</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="bg-navy-900 relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src={logo}
                alt="KARS AUTO"
                className="rounded-lg w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="text-orange-500">Values</span>
            </motion.h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Timely Service",
                description: "Quick turnaround without compromising quality",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Customer First",
                description: "Building lasting relationships through trust",
              },
              {
                icon: <Settings className="h-8 w-8" />,
                title: "Expert Solutions",
                description: "Advanced diagnostics and repairs",
              },
              {
                icon: <Phone className="h-8 w-8" />,
                title: "Always Available",
                description: "Here when you need us most",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="bg-gray-900 border-gray-700 h-full">
                  <CardContent className="pt-6 text-center">
                    <div className="mb-4 inline-block p-3 bg-orange-500 rounded-full">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6">
              Ready to Experience the{" "}
              <span className="text-orange-500">KARS Difference?</span>
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="mb-8 text-gray-300 max-w-2xl mx-auto"
            >
              Join thousands of satisfied customers who trust us with their
              automotive needs. Contact us today to schedule your service or
              discuss your vehicle requirements.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link href="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us Today
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
